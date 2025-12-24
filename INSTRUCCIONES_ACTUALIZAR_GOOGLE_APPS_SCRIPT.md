# 📧 Instrucciones para Actualizar Google Apps Script

## 🎯 Objetivo
Mejorar el formato del email de notificación de leads con un diseño profesional y agregar el link al Google Sheet.

---

## 📋 Pasos para Actualizar

### 1. Abrir Google Apps Script

1. Ve a tu [Google Sheet de Leads](https://docs.google.com/spreadsheets/d/1xpp3cQHsyGLnGrho60pbFCEX0yz3936eKIt1-_6F2xE/edit?usp=sharing)
2. En el menú superior, haz clic en: **Extensiones** → **Apps Script**
3. Se abrirá el editor de Google Apps Script

### 2. Actualizar la Función `sendNotification`

1. En el editor de Apps Script, localiza la función `sendNotification` (aproximadamente línea 72)
2. Reemplaza toda la función con el nuevo código del archivo: `google-apps-script.js`
3. O copia el código completo desde abajo ⬇️

### 3. Guardar y Probar

1. Haz clic en el icono de **guardar** (💾) o presiona `Ctrl+S`
2. Para probar, ejecuta la función `testScript()` desde el menú desplegable superior
3. Autoriza los permisos si te lo solicita
4. Revisa tu email para ver el nuevo formato

---

## ✨ Nuevas Características del Email

### 📧 Versión HTML (Email moderno)
- ✅ Diseño profesional con colores corporativos (oro #D4AF37)
- ✅ Header con gradiente dorado
- ✅ Secciones claramente separadas
- ✅ Links directos para llamar al teléfono y enviar email
- ✅ Botón destacado para ver el Google Sheet
- ✅ Alerta de acción urgente: contactar en <15 minutos
- ✅ Footer con información de STANS ABOGADOS
- ✅ Emojis para mejor legibilidad

### 📄 Versión Texto Plano (Fallback)
- ✅ Formato ASCII art con bordes decorativos
- ✅ Organización clara con separadores
- ✅ Toda la información estructurada
- ✅ Link al Google Sheet incluido

---

## 🎨 Vista Previa del Email

### Asunto:
```
🔔 Nuevo Lead - [Nombre del Cliente]
```

### Contenido HTML:
```
┌─────────────────────────────────┐
│  🔔 NUEVO LEAD RECIBIDO         │
│  STANS ABOGADOS                 │
└─────────────────────────────────┘

⚡ ACCIÓN REQUERIDA: Contactar al cliente en menos de 15 minutos

📋 Información del Cliente
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nombre:      [Nombre]
📧 Email:       [Email clickeable]
📱 Teléfono:    [Teléfono clickeable]
🌐 Idioma:      Español 🇪🇸

💬 Mensaje del Cliente
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Mensaje completo del cliente]

📊 Información Adicional
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 UTM Source:  [UTM]
🌍 IP:          [IP del cliente]
🕐 Fecha/Hora:  [Fecha completa]

[📊 Ver todos los leads en Google Sheets] ← BOTÓN
```

---

## 👥 Destinatarios Actualizados

Los emails se enviarán automáticamente a:
- ✅ tottimilanmail@gmail.com
- ✅ mounir.elyemlahy@gmail.com

---

## 🧪 Testing

Para probar el nuevo formato:

1. **Opción 1: Test Manual**
   - Ejecuta la función `testScript()` en Google Apps Script
   - Revisa los emails recibidos

2. **Opción 2: Test Real**
   - Envía un formulario de prueba desde www.stansabogados.com
   - Verifica que el email llegue con el nuevo formato

---

## 📝 Código Completo de la Función `sendNotification`

```javascript
function sendNotification(data) {
  try {
    // Enviar notificación por email
    const subject = `🔔 Nuevo Lead - ${data.nombre || 'Sin nombre'}`;
    
    // Cuerpo del email en texto plano
    const body = `
╔═══════════════════════════════════════════════════════════╗
║          🎯 NUEVO LEAD RECIBIDO - STANS ABOGADOS          ║
╚═══════════════════════════════════════════════════════════╝

📋 INFORMACIÓN DEL CLIENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nombre:      ${data.nombre || 'No especificado'}
📧 Email:       ${data.email || 'No especificado'}
📱 Teléfono:    ${data.telefono || 'No especificado'}
🌐 Idioma:      ${data.idioma === 'es' ? 'Español 🇪🇸' : data.idioma === 'ar' ? 'Árabe 🇸🇦' : 'Otro'}

💬 MENSAJE DEL CLIENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.mensaje || 'No especificado'}

📊 INFORMACIÓN ADICIONAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 UTM Source:  ${data.utm || 'No especificado'}
🌍 IP:          ${data.ip || 'No especificado'}
🕐 Fecha/Hora:  ${new Date().toLocaleString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Ver todos los leads en Google Sheets:
🔗 https://docs.google.com/spreadsheets/d/1xpp3cQHsyGLnGrho60pbFCEX0yz3936eKIt1-_6F2xE/edit?usp=sharing

⚡ ACCIÓN REQUERIDA: Contactar al cliente en menos de 15 minutos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏛️  STANS ABOGADOS | Defensa Penal 24/7
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;
    
    // Cuerpo del email en HTML (más bonito)
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #D4AF37 0%, #C4A028 100%); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section-title { color: #D4AF37; font-size: 16px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #D4AF37; padding-bottom: 8px; }
    .info-row { display: flex; margin-bottom: 12px; padding: 10px; background: #f9f9f9; border-radius: 5px; }
    .info-label { font-weight: bold; min-width: 120px; color: #666; }
    .info-value { color: #333; flex: 1; }
    .message-box { background: #f0f8ff; border-left: 4px solid #D4AF37; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap; word-wrap: break-word; }
    .cta-button { display: inline-block; background: #D4AF37; color: white; text-decoration: none; padding: 15px 30px; border-radius: 5px; font-weight: bold; margin: 20px 0; text-align: center; }
    .cta-button:hover { background: #C4A028; }
    .footer { background: #191919; color: #F2F2F2; padding: 20px; text-align: center; font-size: 12px; }
    .alert { background: #fff3cd; border: 1px solid #ffc107; color: #856404; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 NUEVO LEAD RECIBIDO</h1>
      <p style="margin: 10px 0 0 0; font-size: 14px;">STANS ABOGADOS - Defensa Penal 24/7</p>
    </div>
    
    <div class="content">
      <div class="alert">
        ⚡ ACCIÓN REQUERIDA: Contactar al cliente en menos de 15 minutos
      </div>
      
      <div class="section">
        <div class="section-title">📋 Información del Cliente</div>
        <div class="info-row">
          <span class="info-label">👤 Nombre:</span>
          <span class="info-value">${data.nombre || 'No especificado'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">📧 Email:</span>
          <span class="info-value"><a href="mailto:${data.email}">${data.email || 'No especificado'}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">📱 Teléfono:</span>
          <span class="info-value"><a href="tel:${data.telefono}">${data.telefono || 'No especificado'}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">🌐 Idioma:</span>
          <span class="info-value">${data.idioma === 'es' ? 'Español 🇪🇸' : data.idioma === 'ar' ? 'Árabe 🇸🇦' : 'Otro'}</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">💬 Mensaje del Cliente</div>
        <div class="message-box">${data.mensaje || 'No especificado'}</div>
      </div>
      
      <div class="section">
        <div class="section-title">📊 Información Adicional</div>
        <div class="info-row">
          <span class="info-label">📍 UTM Source:</span>
          <span class="info-value">${data.utm || 'No especificado'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">🌍 IP:</span>
          <span class="info-value">${data.ip || 'No especificado'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">🕐 Fecha/Hora:</span>
          <span class="info-value">${new Date().toLocaleString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}</span>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://docs.google.com/spreadsheets/d/1xpp3cQHsyGLnGrho60pbFCEX0yz3936eKIt1-_6F2xE/edit?usp=sharing" class="cta-button">
          📊 Ver todos los leads en Google Sheets
        </a>
      </div>
    </div>
    
    <div class="footer">
      <strong>🏛️ STANS ABOGADOS</strong><br>
      Defensa Penal Especializada | Madrid, España<br>
      📞 +34 611 687 226 | 🌐 www.stansabogados.com
    </div>
  </div>
</body>
</html>
    `;
    
    // Emails configurados - Se envía a ambos destinatarios
    const recipients = 'tottimilanmail@gmail.com, mounir.elyemlahy@gmail.com';
    
    // Enviar email con HTML y texto plano como fallback
    MailApp.sendEmail({
      to: recipients,
      subject: subject,
      body: body,
      htmlBody: htmlBody
    });
    
  } catch (error) {
    console.error('Error enviando notificación:', error);
  }
}
```

---

## ✅ Checklist de Actualización

- [ ] Abrir Google Apps Script desde el Google Sheet
- [ ] Copiar el código de la función `sendNotification`
- [ ] Pegar en el editor reemplazando la función antigua
- [ ] Guardar cambios (💾 o Ctrl+S)
- [ ] Ejecutar `testScript()` para probar
- [ ] Verificar email recibido con nuevo formato
- [ ] Confirmar que ambos emails (totti y mounir) reciben la notificación

---

**¡Listo!** Ahora cada vez que llegue un lead, recibirás un email profesional con toda la información organizada y el link directo al Google Sheet. 🎉

**Fecha:** Diciembre 24, 2025

