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
            print("✓ Imagen descargada:", dest_path)
    except Exception as e:
        print("ERROR descargando:", url, e)

def scrape_project_page(url, slug):
    print("\n--- SCRAPING DETALLE:", url)

    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")

    # Título + ubicación
    h1 = soup.select_one("h1.titulo")
    title = h1.contents[0].strip()
    location = h1.find("p").text.strip() if h1.find("p") else ""

    # Descripción
    p = soup.select_one(".contenido p")
    description = p.text.strip() if p else ""

    # Imagen principal
    main_img = soup.select_one(".fragmento_scroll img")
    main_img_url = urljoin(BASE, main_img["src"])

    # Galería
    gallery = []
    gallery_divs = soup.select("#_lcms_divLoad .div_articulo img")

    for img in gallery_divs:
        img_url = urljoin(BASE, img["src"])
        gallery.append(img_url)

    # GUARDAR IMÁGENES
    proj_folder = os.path.join(IMG_DIR, slug)
    os.makedirs(proj_folder, exist_ok=True)

    # Portada
    cover_filename = "cover" + os.path.splitext(main_img_url)[1]
    download_img(main_img_url, os.path.join(proj_folder, cover_filename))

    gallery_local = []
    for i, g in enumerate(gallery):
        ext = os.path.splitext(g)[1]
        name = f"img_{i+1}{ext}"
        download_img(g, os.path.join(proj_folder, name))
        gallery_local.append(f"/projects/{slug}/{name}")

    # JSON DETALLE
    detail_data = {
        "slug": slug,
        "title": title,
        "location": location,
        "description": description,
        "cover": f"/projects/{slug}/{cover_filename}",
        "gallery": gallery_local
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
        href = a["href"]  # ejemplo: producto/69/modulos-palcos-vip...
        full_url = urljoin(BASE, href)

        # slug único
        slug = href.split("/", 2)[2]  # coge "modulos-palcos-..."
        slug = slug.replace(".", "").replace(" ", "-").lower()

        print("Encontrado proyecto:", slug)

        detail = scrape_project_page(full_url, slug)
        list_data.append(detail)

    with open(os.path.join(DATA_DIR, "projects.json"), "w", encoding="utf8") as f:
        json.dump(list_data, f, indent=2, ensure_ascii=False)

    print("\n✓ SCRAPING COMPLETADO")
    print("→ Imágenes en:", IMG_DIR)
    print("→ JSON generado en:", DATA_DIR)

if __name__ == "__main__":
    scrape_list()
