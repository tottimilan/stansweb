const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración de favicons
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 16, name: 'favicon.ico', format: 'ico' }
];

async function generateFavicon(size, outputName, format = 'png') {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const inputPath = path.join(publicDir, 'images', 'logos', 'favicon.png');
    const outputPath = path.join(publicDir, outputName);
    
    let sharpInstance = sharp(inputPath)
      .resize(size, size, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Fondo transparente
      });
    
    if (format === 'ico') {
      // Para ICO, generar múltiples tamaños
      const icoSizes = [16, 32, 48];
      const buffers = [];
      
      for (const icoSize of icoSizes) {
        const buffer = await sharp(inputPath)
          .resize(icoSize, icoSize, { 
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .png()
          .toBuffer();
        buffers.push(buffer);
      }
      
      // Crear ICO con múltiples tamaños
      await sharp(buffers[0])
        .resize(16, 16)
        .png()
        .toFile(outputPath);
    } else {
      await sharpInstance
        .png({ quality: 100 })
        .toFile(outputPath);
    }
    
    console.log(`✅ Generado: ${outputName} (${size}x${size})`);
    
  } catch (error) {
    console.error(`❌ Error generando ${outputName}:`, error.message);
  }
}

async function generateAllFavicons() {
  console.log('🚀 Generando favicons para Stans Abogados...\n');
  
  for (const favicon of faviconSizes) {
    await generateFavicon(favicon.size, favicon.name, favicon.format);
  }
  
  console.log('\n🎉 Favicons generados exitosamente!');
  console.log('💡 Recuerda actualizar el HTML para incluir todos los favicons');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateAllFavicons();
}

module.exports = { generateFavicon, generateAllFavicons };
