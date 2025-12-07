export const sendContactForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:8080/api/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        referencia: formData.referencia,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
        whatsappContacto: formData.whatsapp_contact, 
        telefono: formData.telefono
      }),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    return await response.json();
  } catch (error) {
    console.error('Error enviando formulario:', error);
    return { success: false, message: error.message };
  }
};
