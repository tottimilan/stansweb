/**
 * Script de Verificación de Schema.org
 * Verifica que los schemas no contengan propiedades incorrectas
 * 
 * Uso: node scripts/verify-schema.js
 */

const fs = require('fs');
const path = require('path');

// Colores para consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
};

// Propiedades PROHIBIDAS para LegalService
const forbiddenProperties = ['availableLanguage', 'serviceType'];

// Archivos a verificar
const filesToCheck = [
  'src/components/LocalBusinessSchema.tsx',
  'src/app/layout.tsx',
  'src/components/SchemaMarkup.tsx',
];

let hasErrors = false;
let totalChecks = 0;
let passedChecks = 0;

console.log(`\n${colors.blue}╔════════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.blue}║  VERIFICACIÓN DE SCHEMA.ORG - STANS ABOGADOS      ║${colors.reset}`);
console.log(`${colors.blue}╚════════════════════════════════════════════════════╝${colors.reset}\n`);

filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  
  console.log(`${colors.blue}📄 Verificando: ${file}${colors.reset}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`${colors.yellow}⚠️  Archivo no encontrado: ${filePath}${colors.reset}\n`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  forbiddenProperties.forEach(prop => {
    totalChecks++;
    
    // Buscar la propiedad en el contexto de un schema JSON
    // Buscar tanto "availableLanguage" como availableLanguage:
    const regexQuoted = new RegExp(`["']${prop}["']\\s*:`, 'g');
    const regexUnquoted = new RegExp(`${prop}\\s*:`, 'g');
    
    const matchesQuoted = content.match(regexQuoted) || [];
    const matchesUnquoted = content.match(regexUnquoted) || [];
    const totalMatches = matchesQuoted.length + matchesUnquoted.length;
    
    if (totalMatches > 0) {
      hasErrors = true;
      console.log(`${colors.red}  ❌ ERROR: Encontrada propiedad prohibida "${prop}" (${totalMatches} ocurrencias)${colors.reset}`);
    } else {
      passedChecks++;
      console.log(`${colors.green}  ✅ OK: No se encontró "${prop}"${colors.reset}`);
    }
  });
  
  // Verificar que existe knowsLanguage si es un archivo de schema
  if (file.includes('Schema')) {
    totalChecks++;
    if (content.includes('knowsLanguage')) {
      passedChecks++;
      console.log(`${colors.green}  ✅ OK: Propiedad "knowsLanguage" presente${colors.reset}`);
    } else {
      console.log(`${colors.yellow}  ⚠️  ADVERTENCIA: No se encontró "knowsLanguage"${colors.reset}`);
    }
  }
  
  console.log('');
});

// Resumen final
console.log(`${colors.blue}╔════════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.blue}║  RESUMEN DE VERIFICACIÓN                           ║${colors.reset}`);
console.log(`${colors.blue}╚════════════════════════════════════════════════════╝${colors.reset}\n`);

console.log(`Total de verificaciones: ${totalChecks}`);
console.log(`${colors.green}Verificaciones exitosas: ${passedChecks}${colors.reset}`);
console.log(`${colors.red}Verificaciones fallidas: ${totalChecks - passedChecks}${colors.reset}\n`);

if (hasErrors) {
  console.log(`${colors.red}❌ VERIFICACIÓN FALLIDA${colors.reset}`);
  console.log(`${colors.yellow}Se encontraron propiedades prohibidas en los schemas.${colors.reset}`);
  console.log(`${colors.yellow}Por favor, revisa y corrige los archivos marcados con error.${colors.reset}\n`);
  process.exit(1);
} else {
  console.log(`${colors.green}✅ VERIFICACIÓN EXITOSA${colors.reset}`);
  console.log(`${colors.green}Todos los schemas están conformes a Schema.org${colors.reset}\n`);
  console.log(`${colors.blue}Próximos pasos:${colors.reset}`);
  console.log(`  1. npm run build`);
  console.log(`  2. Desplegar a producción`);
  console.log(`  3. Validar en: https://validator.schema.org/`);
  console.log(`  4. Esperar 24-48h para re-escaneo de Semrush\n`);
  process.exit(0);
}

