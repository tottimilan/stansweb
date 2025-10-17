// Script para verificar que todas las URLs problemáticas ahora funcionan
const https = require('https');

const baseUrl = 'https://www.stansabogados.com';

// URLs específicas reportadas por Semrush
const urlsToTest = [
  '/blog/primeros-pasos-comisaria',
  '/blog/derechos-detenidos-garantias-procesales',
  '/blog/habeas-corpus-recurso-amparo',
  '/blog/asistencia-letrada-urgencia',
  '/blog/procedimientos-extradicion',
  '/blog/terrorismo-audiencia-nacional',
  '/blog/medidas-cautelares-procesos-penales',
  '/blog/derechos-inmediatos-detenido',
  '/blog/defensa-penal-urgente',
  '/blog/puesta-disposicion-judicial',
  '/blog/derechos-detenidos',
  '/blog/derechos-constitucionales-detenido'
];

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(baseUrl + url, (res) => {
      resolve({
        url: url,
        statusCode: res.statusCode,
        success: res.statusCode === 200
      });
    }).on('error', (err) => {
      resolve({
        url: url,
        statusCode: 'ERROR',
        success: false,
        error: err.message
      });
    });
  });
}

async function runTests() {
  console.log('🔍 VERIFICANDO URLs EN PRODUCCIÓN...\n');
  console.log(`Base URL: ${baseUrl}\n`);
  
  const results = [];
  
  for (const url of urlsToTest) {
    const result = await testUrl(url);
    results.push(result);
    
    const icon = result.success ? '✅' : '❌';
    const status = result.success ? 'OK' : `ERROR ${result.statusCode}`;
    console.log(`${icon} ${url} - ${status}`);
    
    // Pequeña pausa para no sobrecargar el servidor
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log('\n📊 RESUMEN:\n');
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Exitosas: ${successful}/${urlsToTest.length}`);
  console.log(`❌ Fallidas: ${failed}/${urlsToTest.length}`);
  console.log('');
  
  if (failed === 0) {
    console.log('🎉 ¡PERFECTO! Todas las URLs funcionan correctamente');
    process.exit(0);
  } else {
    console.log('⚠️ Algunas URLs aún tienen problemas');
    console.log('\nURLs con error:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.url} (${r.statusCode})`);
    });
    process.exit(1);
  }
}

runTests();

