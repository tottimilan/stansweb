#!/usr/bin/env python3
"""
Extrae todo el contenido de los blogs en formato estructurado
para que los abogados puedan revisarlo.
"""

import os
import re
import json
from datetime import datetime

class BlogContentExtractor:
    def __init__(self):
        self.blogs = {}
        
    def extract_text_from_jsx(self, content):
        """Extrae todo el texto visible de un archivo JSX."""
        texts = []
        
        # Extraer texto entre > y <
        jsx_pattern = r'>([^<>{}]+)<'
        for match in re.finditer(jsx_pattern, content):
            text = match.group(1).strip()
            if text and not text.startswith('t.') and not text.startswith('{'):
                # Filtrar textos muy cortos o que no sean contenido real
                if len(text) > 2 and not text.isdigit():
                    texts.append(text)
        
        # Extraer de propiedades title, description, etc.
        prop_patterns = [
            r'title:\s*["\']([^"\']+)["\']',
            r'description:\s*["\']([^"\']+)["\']',
            r'content:\s*["\']([^"\']+)["\']',
            r'excerpt:\s*["\']([^"\']+)["\']'
        ]
        
        for pattern in prop_patterns:
            for match in re.finditer(pattern, content):
                text = match.group(1).strip()
                if text and len(text) > 2:
                    texts.append(text)
        
        # Extraer arrays de FAQ o contenido estructurado
        faq_pattern = r'question:\s*["\']([^"\']+)["\'][^}]*answer:\s*["\']([^"\']+)["\']'
        for match in re.finditer(faq_pattern, content, re.DOTALL):
            texts.append(f"P: {match.group(1)}")
            texts.append(f"R: {match.group(2)}")
        
        return texts
    
    def process_blog_file(self, file_path, blog_name):
        """Procesa un archivo de blog y extrae su contenido."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extraer metadatos si existen
        title_match = re.search(r'<title>([^<]+)</title>', content)
        title = title_match.group(1) if title_match else blog_name.replace('-', ' ').title()
        
        # Extraer todo el texto
        texts = self.extract_text_from_jsx(content)
        
        # Organizar por secciones (detectar patrones de encabezados)
        sections = []
        current_section = {"title": "Introducción", "content": []}
        
        for text in texts:
            # Detectar si es un título de sección (generalmente más corto y en mayúsculas)
            if len(text) < 50 and (text.isupper() or text.count(' ') < 5):
                if current_section["content"]:
                    sections.append(current_section)
                current_section = {"title": text, "content": []}
            else:
                current_section["content"].append(text)
        
        if current_section["content"]:
            sections.append(current_section)
        
        return {
            "title": title,
            "sections": sections,
            "total_words": sum(len(text.split()) for section in sections for text in section["content"])
        }
    
    def extract_all_blogs(self):
        """Extrae el contenido de todos los blogs."""
        blog_dir = "src/app/blog"
        
        for item in os.listdir(blog_dir):
            item_path = os.path.join(blog_dir, item)
            if os.path.isdir(item_path) and item != '[slug]':
                page_file = os.path.join(item_path, "page.tsx")
                if os.path.exists(page_file):
                    print(f"📄 Procesando: {item}")
                    self.blogs[item] = self.process_blog_file(page_file, item)
        
        return self.blogs
    
    def generate_document(self, output_format='txt'):
        """Genera documentos con el contenido extraído."""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # Generar un archivo maestro con todo el contenido
        if output_format == 'txt':
            output_file = f"blogs_content_{timestamp}.txt"
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write("CONTENIDO DE BLOGS - STANS ABOGADOS\n")
                f.write("=" * 60 + "\n")
                f.write(f"Fecha de extracción: {datetime.now().strftime('%d/%m/%Y %H:%M')}\n")
                f.write(f"Total de blogs: {len(self.blogs)}\n")
                f.write("=" * 60 + "\n\n")
                
                for blog_name, blog_data in sorted(self.blogs.items()):
                    f.write(f"\n{'='*60}\n")
                    f.write(f"BLOG: {blog_data['title']}\n")
                    f.write(f"URL: /blog/{blog_name}\n")
                    f.write(f"Palabras: {blog_data['total_words']}\n")
                    f.write(f"{'='*60}\n\n")
                    
                    for section in blog_data['sections']:
                        f.write(f"\n### {section['title']}\n\n")
                        for text in section['content']:
                            f.write(f"{text}\n\n")
                    
                    f.write("\n" + "-"*60 + "\n")
        
        # Generar archivos individuales por blog
        os.makedirs('blogs_individuales', exist_ok=True)
        
        for blog_name, blog_data in self.blogs.items():
            individual_file = f"blogs_individuales/{blog_name}.txt"
            with open(individual_file, 'w', encoding='utf-8') as f:
                f.write(f"{blog_data['title']}\n")
                f.write("=" * len(blog_data['title']) + "\n\n")
                
                for section in blog_data['sections']:
                    f.write(f"\n{section['title']}\n")
                    f.write("-" * len(section['title']) + "\n\n")
                    for text in section['content']:
                        f.write(f"{text}\n\n")
        
        # Generar archivo JSON estructurado
        json_file = f"blogs_content_{timestamp}.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(self.blogs, f, indent=2, ensure_ascii=False)
        
        # Generar índice HTML para fácil navegación
        html_file = f"blogs_index_{timestamp}.html"
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write("""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contenido de Blogs - STANS Abogados</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #333; }
        h2 { color: #666; border-bottom: 2px solid #ddd; padding-bottom: 10px; }
        h3 { color: #888; }
        .blog { margin-bottom: 40px; padding: 20px; border: 1px solid #ddd; }
        .metadata { color: #999; font-size: 0.9em; }
        p { line-height: 1.6; }
    </style>
</head>
<body>
    <h1>Contenido de Blogs - STANS Abogados</h1>
    <p class="metadata">Generado: """ + datetime.now().strftime('%d/%m/%Y %H:%M') + "</p>\n")
            
            for blog_name, blog_data in sorted(self.blogs.items()):
                f.write(f'<div class="blog">\n')
                f.write(f'<h2>{blog_data["title"]}</h2>\n')
                f.write(f'<p class="metadata">URL: /blog/{blog_name} | Palabras: {blog_data["total_words"]}</p>\n')
                
                for section in blog_data['sections']:
                    f.write(f'<h3>{section["title"]}</h3>\n')
                    for text in section['content']:
                        f.write(f'<p>{text}</p>\n')
                
                f.write('</div>\n')
            
            f.write("""</body>
</html>""")
        
        return output_file, json_file, html_file

def main():
    print("📚 EXTRACTOR DE CONTENIDO DE BLOGS")
    print("=" * 40)
    
    # Cambiar al directorio del proyecto
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    extractor = BlogContentExtractor()
    
    print("\n📄 Extrayendo contenido de blogs...")
    blogs = extractor.extract_all_blogs()
    
    print(f"\n✅ Extraídos {len(blogs)} blogs")
    
    # Generar documentos
    print("\n📝 Generando documentos...")
    txt_file, json_file, html_file = extractor.generate_document()
    
    print("\n🎉 DOCUMENTOS GENERADOS:")
    print(f"   📄 Archivo maestro TXT: {txt_file}")
    print(f"   📁 Carpeta con blogs individuales: blogs_individuales/")
    print(f"   📊 Archivo JSON estructurado: {json_file}")
    print(f"   🌐 Índice HTML: {html_file}")
    
    # Mostrar resumen
    total_words = sum(blog['total_words'] for blog in blogs.values())
    print(f"\n📊 RESUMEN:")
    print(f"   Total de blogs: {len(blogs)}")
    print(f"   Total de palabras: {total_words:,}")
    print(f"   Promedio por blog: {total_words // len(blogs):,} palabras")
    
    print("\n💡 PRÓXIMOS PASOS:")
    print("1. Abre el archivo TXT en Word")
    print("2. Guarda como .docx")
    print("3. Envía a los abogados para revisión")
    print("\n🔍 El archivo HTML permite navegación fácil del contenido")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
