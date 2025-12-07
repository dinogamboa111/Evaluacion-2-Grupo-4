import axios from 'axios';

const API_URL = 'http://localhost:8080/api/contacto';

export const enviarContacto = async (formData) => {
  try {
    const payload = {
      nombre: formData.nombre,
      email: formData.email,
      referencia: formData.referencia,
      asunto: formData.asunto,
      mensaje: formData.mensaje,
      whatsappContacto: formData.whatsapp_contact,
      telefono: formData.telefono
    };

    const response = await axios.post(API_URL, payload);
    return response.data; // { success: true, message: "...", id: ... }
  } catch (error) {
    console.error('Error enviando formulario:', error.response || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};
