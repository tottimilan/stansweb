import json

# Leer el archivo SEO
with open('public/casos/seo-info.json', 'r', encoding='utf-8') as f:
    seo_info = json.load(f)

print("🔄 Corrigiendo URLs de los casos 1 y 2...\n")

# Corregir caso 1
seo_info["1"] = {
    "url": "/casos/sobreseimiento-queque-abogados-cristianos",
    "title": "Sobreseimiento en caso Queque Abogados Cristianos – libertad de expresión",
    "description": "La Audiencia Provincial de Madrid decreta el sobreseimiento libre en el caso contra Queque Abogados Cristianos por delito de odio y contra los sentimientos religiosos.",
    "keywords": "queque abogados cristianos, sobreseimiento, libertad de expresión, delito de odio, Audiencia Provincial Madrid",
    "anchors": "#queque-resumen, #hechos, #estrategia, #pruebas, #resolucion, #prensa",
    "tags": "Libertad de expresión, Delito de odio, Sobreseimiento, Madrid, 2025"
}

# Corregir caso 2
seo_info["2"] = {
    "url": "/casos/sobreseimiento-nordin-workout",
    "title": "Sobreseimiento provisional en caso Nordin Workout – terrorismo yihadista",
    "description": "Auto de sobreseimiento provisional en el caso Nordin Workout por terrorismo yihadista y adoctrinamiento. La causa sigue en instrucción.",
    "keywords": "nordin workout, terrorismo yihadista, adoctrinamiento, sobreseimiento provisional, Audiencia Nacional",
    "anchors": "#nordin-resumen, #hechos, #estrategia, #pruebas, #resolucion, #prensa",
    "tags": "Terrorismo, Yihadismo, Audiencia Nacional, Sobreseimiento provisional, 2025"
}

print("✅ Caso 1: Sobreseimiento Queque Abogados Cristianos")
print("   → URL: /casos/sobreseimiento-queque-abogados-cristianos")
print()

print("✅ Caso 2: Sobreseimiento Nordin Workout")
print("   → URL: /casos/sobreseimiento-nordin-workout")
print()

# Guardar el archivo actualizado
with open('public/casos/seo-info.json', 'w', encoding='utf-8') as f:
    json.dump(seo_info, f, ensure_ascii=False, indent=2)

print("=" * 60)
print("✅ URLs corregidas y guardadas en: public/casos/seo-info.json")
