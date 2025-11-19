import requests
from bs4 import BeautifulSoup
import os
import json
from urllib.parse import urljoin

BASE = "https://www.modularprojects.es"
LIST_URL = f"{BASE}/projects"

OUTPUT_DIR = "./output_modularprojects"
IMG_DIR = os.path.join(OUTPUT_DIR, "images")
DATA_DIR = os.path.join(OUTPUT_DIR, "data")

os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

def download_img(url, dest_path):
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(dest_path, "wb") as f:
                f.write(r.content)
            print("✓ Imagen:", dest_path)
    except Exception as e:
        print("ERROR descargando:", url, e)

def clean_url(src):
    if not src:
        return None
    if src.startswith("//"):
        return "https:" + src
    return src

def scrape_project_page(url, slug):
    print("\n--- SCRAPING DETALLE:", url)

    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")

    # ---------------------------
    # TÍTULO + UBICACIÓN
    # ---------------------------
    h1 = soup.select_one("h1.titulo")
    title = h1.contents[0].strip() if h1 else slug

    location = ""
    p_loc = h1.find("p") if h1 else None
    if p_loc:
        location = p_loc.text.strip()

    # ---------------------------
    # DESCRIPCIÓN REAL
    # ---------------------------

    # Buscar TODA la sección descriptiva
    description_container = soup.select_one(".contenido")
    description = ""

    if description_container:
        # Unir todos los <p>, no solo el primero
        paragraphs = [p.text.strip() for p in description_container.select("p")]
        description = "\n\n".join(p for p in paragraphs if p)

    # Fallback si no hay nada
    if not description:
        p = soup.select_one(".contenido p")
        description = p.text.strip() if p else ""

    # ---------------------------
    # IMÁGENES PRINCIPALES
    # ---------------------------

    all_imgs = set()

    # Imagen de cabecera
    main_img = soup.select_one(".fragmento_scroll img")
    if main_img:
        src = clean_url(main_img.get("data-src") or main_img.get("src"))
        if src:
            all_imgs.add(urljoin(BASE, src))

    # Galería normal
    for img in soup.select(".div_articulo img"):
        src = clean_url(img.get("data-src") or img.get("src"))
        if src:
            all_imgs.add(urljoin(BASE, src))

    # Slider lazyload tipo data-lazy
    for img in soup.select("img[data-lazy]"):
        src = clean_url(img.get("data-lazy"))
        if src:
            all_imgs.add(urljoin(BASE, src))

    # Imágenes en CSS (background-image)
    for div in soup.find_all(style=True):
        style = div.get("style")
        if "background-image" in style:
            start = style.find("url(")
            end = style.find(")", start)
            url_css = style[start+4:end].replace('"', "").replace("'", "")
            all_imgs.add(urljoin(BASE, url_css))

    all_imgs = list(all_imgs)
    print(f"Encontradas {len(all_imgs)} imágenes")

    # ---------------------------
    # GUARDAR IMÁGENES
    # ---------------------------
    proj_folder = os.path.join(IMG_DIR, slug)
    os.makedirs(proj_folder, exist_ok=True)

    gallery_local = []
    cover_filename = None

    for i, img_url in enumerate(all_imgs):
        ext = os.path.splitext(img_url)[1] or ".jpg"

        if i == 0:
            cover_filename = "cover" + ext
            local_path = os.path.join(proj_folder, cover_filename)
            download_img(img_url, local_path)
        else:
            name = f"img_{i}{ext}"
            local_path = os.path.join(proj_folder, name)
            download_img(img_url, local_path)
            gallery_local.append(f"/projects/{slug}/{name}")

    if not cover_filename:
        cover_filename = "cover.jpg"

    # ---------------------------
    # GUARDAR JSON DETALLE
    # ---------------------------
    detail_data = {
        "slug": slug,
        "title": title,
        "location": location,
        "description": description,
        "cover": f"/projects/{slug}/{cover_filename}",
        "gallery": gallery_local,
    }

    with open(os.path.join(DATA_DIR, f"{slug}.json"), "w", encoding="utf8") as f:
        json.dump(detail_data, f, indent=2, ensure_ascii=False)

    return {
        "slug": slug,
        "title": title,
        "location": location,
        "cover": f"/projects/{slug}/{cover_filename}",
    }

def scrape_list():
    print("Scraping listado...")
    html = requests.get(LIST_URL).text
    soup = BeautifulSoup(html, "html.parser")

    items = soup.select(".div_articulo a")
    list_data = []

    for a in items:
        href = a["href"]
        full_url = urljoin(BASE, href)

        # SLUG
        slug = href.split("/")[-1].strip().lower().replace(" ", "-")

        print("Proyecto encontrado:", slug)

        detail = scrape_project_page(full_url, slug)
        list_data.append(detail)

    with open(os.path.join(DATA_DIR, "projects.json"), "w", encoding="utf8") as f:
        json.dump(list_data, f, indent=2, ensure_ascii=False)

    print("\n✓ SCRAPING COMPLETADO")

if __name__ == "__main__":
    scrape_list()
