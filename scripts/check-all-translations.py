#!/usr/bin/env python3
"""
Verifica el estado de traducción de TODA la web.
"""

import os
import re
import json

class TranslationChecker:
    def __init__(self):
        self.hardcoded_spanish = []
        self.files_checked = 0
        self.total_issues = 0
        
    def check_file(self, file_path):
        """Verifica un archivo en busca de texto hardcodeado en español."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        issues = []
        
        # Buscar texto entre > y < (JSX)
        jsx_pattern = r'>([^<>{}]+)<'
        for match in re.finditer(jsx_pattern, content):
            text = match.group(1).strip()
            if self.is_spanish_hardcoded(text):
                issues.append({
                    'type': 'JSX',
                    'text': text,
                    'line': content[:match.start()].count('\n') + 1
                })
        
        # Buscar strings en propiedades
        string_patterns = [
            r'title:\s*["\']([^"\']+)["\']',
            r'description:\s*["\']([^"\']+)["\']',
            r'label:\s*["\']([^"\']+)["\']',
            r'placeholder:\s*["\']([^"\']+)["\']',
            r'alt:\s*["\']([^"\']+)["\']'
        ]
        
        for pattern in string_patterns:
            for match in re.finditer(pattern, content):
                text = match.group(1).strip()
                if self.is_spanish_hardcoded(text):
                    issues.append({
                        'type': 'Property',
                        'text': text,
                        'line': content[:match.start()].count('\n') + 1
                    })
        
        return issues
    
    def is_spanish_hardcoded(self, text):
        """Determina si un texto es español hardcodeado."""
        # Ignorar si está vacío o es muy corto
        if len(text.strip()) < 3:
            return False
        
        # Ignorar si es una variable o expresión
        if text.startswith('t.') or text.startswith('{') or text.startswith('$'):
            return False
        
        # Ignorar URLs, emails, etc.
        if any(x in text for x in ['http', 'www', '@', '.com', '.es']):
            return False
        
        # Ignorar números solos
        if text.strip().replace(',', '').replace('.', '').isdigit():
            return False
        
        # Verificar si contiene caracteres españoles
        spanish_chars = re.search(r'[áéíóúñÁÉÍÓÚÑ]', text)
        spanish_words = ['el', 'la', 'de', 'en', 'y', 'a', 'los', 'del', 'las', 'un', 'una', 'para', 'con', 'por', 'que', 'es', 'su']
        
        # Si tiene caracteres españoles, probablemente es español
        if spanish_chars:
            return True
        
        # Si tiene palabras comunes españolas
        words = text.lower().split()
        if any(word in spanish_words for word in words):
            return True
        
        # Si empieza con mayúscula y tiene más de una palabra, podría ser un título
        if text[0].isupper() and len(words) > 1:
            return True
        
        return False
    
    def check_directory(self, dir_path, file_pattern=r'\.tsx?$'):
        """Verifica todos los archivos en un directorio."""
        results = {}
        
        for root, dirs, files in os.walk(dir_path):
            # Ignorar node_modules y .next
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', '.git']]
            
            for file in files:
                if re.search(file_pattern, file):
                    file_path = os.path.join(root, file)
                    self.files_checked += 1
                    
                    issues = self.check_file(file_path)
                    if issues:
                        rel_path = os.path.relpath(file_path, 'src')
                        results[rel_path] = issues
                        self.total_issues += len(issues)
        
        return results
    
    def generate_report(self, results):
        """Genera un informe detallado."""
        report = []
        report.append("📊 INFORME DE ESTADO DE TRADUCCIONES")
        report.append("=" * 50)
        report.append(f"\n📁 Archivos verificados: {self.files_checked}")
        report.append(f"⚠️  Textos hardcodeados encontrados: {self.total_issues}")
        
        if results:
            report.append("\n🔴 ARCHIVOS CON TEXTO HARDCODEADO:\n")
            
            # Agrupar por tipo de archivo
            components = {}
            pages = {}
            blogs = {}
            
            for file_path, issues in results.items():
                if 'components' in file_path:
                    components[file_path] = issues
                elif 'blog' in file_path:
                    blogs[file_path] = issues
                else:
                    pages[file_path] = issues
            
            # Mostrar blogs primero (más importantes)
            if blogs:
                report.append("🔸 BLOGS:")
                for path, issues in sorted(blogs.items()):
                    report.append(f"\n  📄 {path} ({len(issues)} textos)")
                    for issue in issues[:3]:  # Mostrar solo 3 ejemplos
                        report.append(f"     Línea {issue['line']}: \"{issue['text'][:50]}...\"")
                    if len(issues) > 3:
                        report.append(f"     ... y {len(issues) - 3} más")
            
            # Componentes
            if components:
                report.append("\n🔸 COMPONENTES:")
                for path, issues in sorted(components.items()):
                    report.append(f"\n  📄 {path} ({len(issues)} textos)")
                    for issue in issues[:2]:
                        report.append(f"     Línea {issue['line']}: \"{issue['text'][:50]}...\"")
            
            # Páginas principales
            if pages:
                report.append("\n🔸 PÁGINAS:")
                for path, issues in sorted(pages.items()):
                    report.append(f"\n  📄 {path} ({len(issues)} textos)")
                    for issue in issues[:2]:
                        report.append(f"     Línea {issue['line']}: \"{issue['text'][:50]}...\"")
        
        else:
            report.append("\n✅ ¡NO SE ENCONTRARON TEXTOS HARDCODEADOS!")
        
        # Estadísticas por tipo
        blog_count = sum(len(issues) for path, issues in results.items() if 'blog' in path)
        component_count = sum(len(issues) for path, issues in results.items() if 'components' in path)
        page_count = sum(len(issues) for path, issues in results.items() if 'blog' not in path and 'components' not in path)
        
        report.append(f"\n📈 RESUMEN POR TIPO:")
        report.append(f"   - Blogs: {blog_count} textos sin traducir")
        report.append(f"   - Componentes: {component_count} textos sin traducir")
        report.append(f"   - Páginas: {page_count} textos sin traducir")
        
        percentage = ((self.files_checked - len(results)) / self.files_checked * 100) if self.files_checked > 0 else 0
        report.append(f"\n📊 PORCENTAJE TRADUCIDO: {percentage:.1f}% de archivos completamente traducidos")
        
        return '\n'.join(report)

def main():
    print("🔍 VERIFICANDO ESTADO DE TRADUCCIONES EN TODA LA WEB...")
    print("=" * 50)
    
    # Cambiar al directorio del proyecto
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    checker = TranslationChecker()
    
    # Verificar todos los archivos TypeScript/TSX en src
    print("\n📂 Escaneando archivos...")
    results = checker.check_directory('src')
    
    # Generar informe
    report = checker.generate_report(results)
    print(report)
    
    # Guardar informe detallado
    with open('translation_status_report.txt', 'w', encoding='utf-8') as f:
        f.write(report)
        f.write("\n\n📝 LISTA COMPLETA DE ARCHIVOS:\n")
        for path, issues in sorted(results.items()):
            f.write(f"\n{path}:\n")
            for issue in issues:
                f.write(f"  Línea {issue['line']} ({issue['type']}): {issue['text']}\n")
    
    print(f"\n📄 Informe detallado guardado en: translation_status_report.txt")
    
    # Guardar datos JSON para procesamiento posterior
    with open('translation_status.json', 'w', encoding='utf-8') as f:
        json.dump({
            'files_checked': checker.files_checked,
            'total_issues': checker.total_issues,
            'files_with_issues': len(results),
            'details': results
        }, f, indent=2, ensure_ascii=False)
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
