#!/usr/bin/env python3
"""
Encuentra componentes que tienen 'use client' y funciones async.
"""

import os
import re

def check_file(filepath):
    """Verifica si un archivo tiene 'use client' y funciones async."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    has_use_client = "'use client'" in content or '"use client"' in content
    has_async_export = re.search(r'export\s+(default\s+)?async\s+function', content)
    has_await_params = 'await params' in content
    
    if has_use_client and (has_async_export or has_await_params):
        return True, {
            'has_use_client': has_use_client,
            'has_async_export': bool(has_async_export),
            'has_await_params': has_await_params
        }
    return False, None

def main():
    print("🔍 Buscando componentes con 'use client' y async...")
    
    # Cambiar al directorio del proyecto
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    problematic_files = []
    
    # Buscar en src/app
    for root, dirs, files in os.walk('src/app'):
        # Saltar directorios no relevantes
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.next']]
        
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                has_problem, details = check_file(filepath)
                
                if has_problem:
                    problematic_files.append((filepath, details))
    
    if problematic_files:
        print(f"\n❌ Encontrados {len(problematic_files)} archivos problemáticos:\n")
        for filepath, details in problematic_files:
            print(f"📄 {filepath}")
            if details['has_async_export']:
                print("   - Tiene export async function")
            if details['has_await_params']:
                print("   - Usa await params")
            print()
    else:
        print("\n✅ No se encontraron archivos problemáticos")
    
    return len(problematic_files)

if __name__ == "__main__":
    import sys
    sys.exit(main())
