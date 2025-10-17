// Script de verificación de slugs
const fs = require('fs');

const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

// Extraer todos los slugs del array blogPosts
const slugMatches = content.match(/slug: '([^']+)'/g);
const blogPostSlugs = slugMatches ? slugMatches.map(m => m.match(/slug: '([^']+)'/)[1]) : [];

// Extraer allBlogSlugs
const allBlogSlugsMatch = content.match(/export const allBlogSlugs = \[([\s\S]+?)\];/);
if (!allBlogSlugsMatch) {
  console.error('❌ No se encontró allBlogSlugs');
  process.exit(1);
}

const allBlogSlugsContent = allBlogSlugsMatch[1];
const allSlugsMatches = allBlogSlugsContent.match(/'([^']+)'/g);
const allSlugs = allSlugsMatches ? allSlugsMatches.map(m => m.match(/'([^']+)'/)[1]) : [];

console.log('📊 ANÁLISIS DE SLUGS:\n');
console.log(`Total slugs en blogPosts: ${blogPostSlugs.length}`);
console.log(`Total slugs en allBlogSlugs: ${allSlugs.length}`);
console.log('');

// Verificar que cada slug en allBlogSlugs existe en blogPosts
const missing = [];
const found = [];

allSlugs.forEach(slug => {
  if (blogPostSlugs.includes(slug)) {
    found.push(slug);
  } else {
    missing.push(slug);
  }
});

if (missing.length === 0) {
  console.log('✅ PERFECTO: Todos los slugs en allBlogSlugs tienen su entrada en blogPosts\n');
  console.log(`✅ ${found.length}/${allSlugs.length} slugs verificados correctamente\n`);
} else {
  console.log(`❌ ERROR: ${missing.length} slugs en allBlogSlugs NO tienen entrada en blogPosts:\n`);
  missing.forEach(slug => console.log(`   - ${slug}`));
  console.log('');
  process.exit(1);
}

// Verificar errores específicos de Semrush
const semrushErrors = [
  'primeros-pasos-comisaria',
  'derechos-detenidos-garantias-procesales',
  'habeas-corpus-recurso-amparo',
  'asistencia-letrada-urgencia',
  'procedimientos-extradicion',
  'medidas-cautelares-procesos-penales',
  'derechos-inmediatos-detenido',
  'defensa-penal-urgente',
  'puesta-disposicion-judicial',
  'derechos-detenidos',
  'terrorismo-audiencia-nacional',
  'derechos-constitucionales-detenido'
];

console.log('🔍 VERIFICACIÓN ERRORES 404 DE SEMRUSH:\n');
let errorsFijos = 0;
semrushErrors.forEach(slug => {
  const existe = blogPostSlugs.includes(slug);
  if (existe) {
    console.log(`✅ ${slug}`);
    errorsFijos++;
  } else {
    console.log(`❌ ${slug} - FALTA EN BLOGPOSTS`);
  }
});

console.log('');
console.log(`📊 RESULTADO: ${errorsFijos}/${semrushErrors.length} errores de Semrush resueltos`);
console.log('');

if (errorsFijos === semrushErrors.length) {
  console.log('🎉 ÉXITO TOTAL: Todos los errores 404 de Semrush están resueltos!');
  process.exit(0);
} else {
  console.log('⚠️ Aún quedan errores por resolver');
  process.exit(1);
}

