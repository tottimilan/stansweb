const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración de optimización
const config = {
  quality: 85,
  format: 'webp',
  width: 800, // Tamaño máximo para tarjetas
  height: 600,
  fit: 'inside' // Mantener proporción original sin recortar
};

// Rutas de las imágenes del equipo
const teamImages = [
  '/images/Equipo/Ruben1.png',
  '/images/Equipo/Ruben3.png',
  '/images/Equipo/Ruben4.png',
  '/images/Equipo/Mounir1.png',
  '/images/Equipo/Mounir3.png',
  '/images/Equipo/Mounir4.png',
  '/images/Equipo/Diego1.png',
  '/images/Equipo/Diego3.png',
  '/images/Equipo/Diego4.png'
];

async function optimizeImage(inputPath, outputPath) {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const fullInputPath = path.join(publicDir, inputPath);
    const fullOutputPath = path.join(publicDir, outputPath);
    
    // Crear directorio si no existe
    const outputDir = path.dirname(fullOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Optimizar imagen
    await sharp(fullInputPath)
      .resize(config.width, config.height, { fit: config.fit })
      .webp({ quality: config.quality })
      .toFile(fullOutputPath);
    
    console.log(`✅ Optimizada: ${inputPath} → ${outputPath}`);
    
    // Obtener tamaños para comparación
    const originalStats = fs.statSync(fullInputPath);
    const optimizedStats = fs.statSync(fullOutputPath);
    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`📊 Tamaño: ${(originalStats.size / 1024).toFixed(1)}KB → ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings}% reducción)`);
    
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando optimización de imágenes del equipo...\n');
  
  for (const imagePath of teamImages) {
    const outputPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    await optimizeImage(imagePath, outputPath);
  }
  
  console.log('\n🎉 Optimización completada!');
  console.log('💡 Recuerda actualizar las rutas en el código para usar .webp');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  optimizeAllImages();
}

module.exports = { optimizeImage, optimizeAllImages };
