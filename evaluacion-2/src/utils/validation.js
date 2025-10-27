// Validación de email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validación de teléfono (opcional)
export const validatePhone = (phone) => {
  const phoneRegex = /^\+56\s9\s\d{4}\s\d{4}$/;
  return phoneRegex.test(phone);
};

// Validación de nombre
export const validateName = (name) => {
  return name.length >= 2;
};

// Validación de mensaje
export const validateMessage = (message) => {
  return message.length >= 10;
};

// Validación completa del formulario
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!validateName(formData.nombre)) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres';
  }
  
  if (!validateEmail(formData.email)) {
    errors.email = 'Email debe tener formato: usuario@dominio.com';
  }
  
  if (!formData.referencia) {
    errors.referencia = 'Por favor selecciona cómo nos conociste';
  }
  
  if (!formData.asunto) {
    errors.asunto = 'El asunto es requerido';
  }
  
  if (!validateMessage(formData.mensaje)) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
  }
  
  if (formData.whatsapp_contact && !validatePhone(formData.telefono)) {
    errors.telefono = 'Formato: +56 9 1234 5678';
  }
  
  return errors;
};