const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Verificar variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: Faltan variables de entorno EMAIL_USER y/o EMAIL_PASS');
  console.log('Asegurate de crear el archivo .env con las credenciales de Gmail');
  process.exit(1);
}

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verificar conexión con Gmail
transporter.verify((error, success) => {
  if (error) {
    console.error('ERROR conectando con Gmail:', error.message);
    console.log('Verifica que:');
    console.log('1. Hayas habilitado la verificación en 2 pasos en Gmail');
    console.log('2. Hayas creado una contraseña de aplicación');
    console.log('3. Las credenciales en .env sean correctas');
  } else {
    console.log('✓ Servidor listo para enviar correos');
  }
});

// Rutas de API
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.post('/api/contact', async (req, res) => {
  console.log('=== NUEVA PETICIÓN ===');
  console.log('Datos recibidos:', req.body);
  
  const { nombre, email, referencia, asunto, mensaje, whatsapp_contact, telefono } = req.body;
  
  // Validación
  if (!nombre || !email || !referencia || !asunto || !mensaje) {
    console.log('ERROR: Faltan campos requeridos');
    return res.status(400).json({
      success: false,
      message: 'Todos los campos son requeridos'
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('ERROR: Email inválido');
    return res.status(400).json({
      success: false,
      message: 'Email inválido'
    });
  }
  
  if (nombre.length < 2) {
    return res.status(400).json({
      success: false,
      message: 'El nombre debe tener al menos 2 caracteres'
    });
  }
  
  if (mensaje.length < 10) {
    return res.status(400).json({
      success: false,
      message: 'El mensaje debe tener al menos 10 caracteres'
    });
  }
  
  // Configurar el correo
  let whatsappInfo = '';
  if (whatsapp_contact && telefono) {
    whatsappInfo = `<p><strong>Prefiere contacto por WhatsApp:</strong> ${telefono}</p>`;
  }
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
    html: `
      <h2>Nuevo mensaje desde SpaceTI</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Referencia:</strong> ${referencia}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      ${whatsappInfo}
      <p><strong>Mensaje:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; border-left: 4px solid #2563eb; color: #333;">
        ${mensaje.replace(/\n/g, '<br>')}
      </div>
      <hr>
      <p><small>Este mensaje fue enviado desde el formulario de contacto el ${new Date().toLocaleString()}</small></p>
    `
  };
  
  try {
    console.log('Enviando correo...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✓ Correo enviado exitosamente:', info.messageId);
    
    res.json({
      success: true,
      message: 'Mensaje enviado correctamente'
    });
    
  } catch (error) {
    console.error('ERROR enviando correo:', error);
    
    let errorMessage = 'Error al enviar el mensaje';
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación con Gmail. Verifica las credenciales';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Error de conexión. Verifica tu conexión a internet';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
});

// Para todas las demás rutas, servir React
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('=== SERVIDOR INICIADO ===');
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Presiona CTRL+C para detener el servidor');
  console.log('========================');
});