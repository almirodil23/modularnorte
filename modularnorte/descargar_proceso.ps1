$basePath = "C:\Users\almir\OneDrive\Escritorio\modularnorte\modularnorte\modularnorte\public\recurso\articulo"

if (-Not (Test-Path $basePath)) {
    New-Item -ItemType Directory -Path $basePath -Force | Out-Null
}

$urls = @(
"https://www.modularprojects.es/recurso/articulo/mini_portada_project_180_aspe.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_1_3.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_image0_mdp.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_56a257a1_5e51_4fd6_a468_af2b54d3b0a6.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_44bbe788_8fc5_46e4_821d_22534ba3f2ab.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_1f9735b1_9625_40c5_a9ba_2e4e6272de09.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_37d2ff99993cb70978bb0d21da84c48b.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_99ebf500_0424_4770_92a9_d584b4a3927b.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_8d81cc2d_4663_4915_9989_5ca364bd43ca.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_5a0c75e21ab89e303eac630268f4efb9_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_2586_portada.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_21_at_17.12.01_8.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_img_3216.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_aa7909194f7be93a9d534ec039d53ba1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_9021.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_0120.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_8cc6c058_9ece_484d_bb43_4011721c98f1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_photo_2022_01_20_21_38_53.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_0f872c80_6fa6_46ed_a816_273337177b3d.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_3978adbf_1760_4be2_997b_3ae2f1d1502e.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_5bdf0f0a_17d9_4f42_a9c2_610c416bbbdc.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_4a25a95c_a3e6_4c9e_8a2e_2a60421052fe.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_3621.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_03f6129b_bc7d_4c81_91c9_eedfbd8352ae.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_07bd2f27_e0ad_4311_8500_c5addbabfac1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2020_12_23_at_11.42.14.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2020_09_22_at_08.54.45__1_.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2020_04_08_at_18.51.30.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_01_27_at_23.22.22.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_23_at_12.36.52_4.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_concesionario.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_22_at_09.54.02_1.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_realejos.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_denia_1_2.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_6877.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_5_1__1_.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_9794.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_1800.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_web_2_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_3583.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_img_3017.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_2460.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_p1030596.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_puzol3.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_0451_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_9434_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_ikyp6323.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_dsc9126_copia.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_78463586_2551379248242868_547211977773023232_o_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_jacinto_benavente_13_3.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_08_at_12.34.39_1.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_19_at_13.39.50.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_azrt4305.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_photo_2022_01_19_15_17_17.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_21_at_16.44.31_2_1.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_lhaf4086.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_whatsapp_image_2021_02_21_at_17.33.56_1.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_qvtk8705.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_9577.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_0242_1_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_4313.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_2__1__1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_sansebastian2.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_pergolasanjuan1_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_muchamiel1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_2_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_1483034_801913813189429_3676653849843021509_n.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_beachclub2.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_1748.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_2.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_5eb1dc76_a660_4079_b8a2_03312ddb580b_1.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_1f_1.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_1166.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_image1_3.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_fotos_ficha_modular_projects_aticovistahermosa3.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_16208.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_6476.jpeg",
"https://www.modularprojects.es/recurso/articulo/mini_82264745_2680054815375310_7566171339623497728_o.jpg",
"https://www.modularprojects.es/recurso/articulo/mini_img_6551_1.jpeg"
)

foreach ($url in $urls) {
    $file = Split-Path $url -Leaf
    $out = Join-Path $basePath $file
    try {
        Invoke-WebRequest -Uri $url -OutFile $out -ErrorAction Stop
        Write-Host "Descargado: $file"
    }
    catch {
        Write-Host "ERROR: $url"
    }
}

Write-Host "Descarga completada."
