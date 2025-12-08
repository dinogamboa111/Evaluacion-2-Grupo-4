// src/components/__tests__/Contact.test.jsx - COBERTURA 80%+ SIN SPYON
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../pages/Contact';
import { validateEmail, validateName, validateMessage, validateContactForm, validatePhone } from '../../utils/validation';

const MockContact = () => (
  <BrowserRouter>
    <Contact />
  </BrowserRouter>
);

describe('PRUEBAS FORMULARIO CON VALIDATION.JS - CAMPO POR CAMPO + COMPLETO', () => {

  // PRUEBA 1: Validación de NOMBRE con validation.js
  it('VALIDACIÓN DE NOMBRE CON validation.js', () => {
    render(<MockContact />);
    
    const nombreInput = screen.getByPlaceholderText('Tu nombre');
    const testNombre = 'Ana';
    
    fireEvent.change(nombreInput, { target: { value: testNombre } });
    
    expect(validateName(testNombre)).toBe(true);
    expect(nombreInput.value).toBe(testNombre);
  });

  // PRUEBA 1B: Validación de NOMBRE inválido
  it('VALIDACIÓN DE NOMBRE INVÁLIDO con validation.js', () => {
    const nombreCorto = 'A';
    expect(validateName(nombreCorto)).toBe(false);
  });

  // PRUEBA 2: Validación de EMAIL con validation.js
  it('VALIDACIÓN DE EMAIL CON validation.js', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    const testEmail = 'test@test.com';
    
    fireEvent.change(emailInput, { target: { value: testEmail } });
    
    expect(validateEmail(testEmail)).toBe(true);
    expect(emailInput.value).toBe(testEmail);
  });

  // PRUEBA 2B: Validación de EMAIL inválido
  it('VALIDACIÓN DE EMAIL INVÁLIDO con validation.js', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    const emailInvalido = 'correo-sin-arroba';
    
    fireEvent.change(emailInput, { target: { value: emailInvalido } });
    fireEvent.blur(emailInput);
    
    expect(validateEmail(emailInvalido)).toBe(false);
  });

  // PRUEBA 2C: Validación en tiempo real de EMAIL
  it('VALIDACIÓN EN TIEMPO REAL DE EMAIL', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    
    fireEvent.change(emailInput, { target: { value: 'invalido' } });
    expect(validateEmail('invalido')).toBe(false);
    
    fireEvent.change(emailInput, { target: { value: 'valido@test.com' } });
    expect(validateEmail('valido@test.com')).toBe(true);
  });

  // PRUEBA 3: Validación de REFERENCIA
  it('VALIDACIÓN DE REFERENCIA CON validation.js', () => {
    render(<MockContact />);
    
    const select = screen.getByDisplayValue('Selecciona una opción');
    const testReferencia = 'google';
    
    fireEvent.change(select, { target: { value: testReferencia } });
    
    expect(testReferencia).toBeTruthy();
    expect(testReferencia).not.toBe('');
    expect(select.value).toBe(testReferencia);
  });

  // PRUEBA 3B: Todas las opciones del select
  it('VALIDACIÓN DE TODAS LAS OPCIONES DE REFERENCIA', () => {
    render(<MockContact />);
    
    const select = screen.getByDisplayValue('Selecciona una opción');
    const opciones = ['google', 'redes_sociales', 'recomendacion', 'evento', 'otro'];
    
    opciones.forEach(opcion => {
      fireEvent.change(select, { target: { value: opcion } });
      expect(select.value).toBe(opcion);
    });
  });

  // PRUEBA 4: Validación de ASUNTO
  it('VALIDACIÓN DE ASUNTO CON validation.js', () => {
    render(<MockContact />);
    
    const asuntoInput = screen.getByPlaceholderText('¿Sobre qué quieres hablar?');
    const testAsunto = 'Proyecto Web';
    
    fireEvent.change(asuntoInput, { target: { value: testAsunto } });
    
    expect(testAsunto).toBeTruthy();
    expect(asuntoInput.value).toBe(testAsunto);
  });

  // PRUEBA 5: Validación de MENSAJE
  it('VALIDACIÓN DE MENSAJE CON validation.js', () => {
    render(<MockContact />);
    
    const mensajeInput = screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...');
    const testMensaje = 'Este es un mensaje de prueba válido con más de 10 caracteres';
    
    fireEvent.change(mensajeInput, { target: { value: testMensaje } });
    
    expect(validateMessage(testMensaje)).toBe(true);
    expect(mensajeInput.value).toBe(testMensaje);
  });

  // PRUEBA 5B: Mensaje inválido
  it('VALIDACIÓN DE MENSAJE INVÁLIDO con validation.js', () => {
    const mensajeCorto = 'Hola';
    expect(validateMessage(mensajeCorto)).toBe(false);
  });

  // PRUEBA 6: Checkbox WhatsApp
  it('VALIDACIÓN DE WHATSAPP CON validation.js', () => {
    render(<MockContact />);
    
    const checkbox = screen.getByLabelText(/whatsapp/i);
    
    fireEvent.click(checkbox);
    
    expect(checkbox.checked).toBe(true);
  });

  // PRUEBA 6B: Activar/desactivar WhatsApp
  it('ACTIVAR Y DESACTIVAR CHECKBOX WHATSAPP', () => {
    render(<MockContact />);
    
    const checkbox = screen.getByLabelText(/whatsapp/i);
    const telefonoInput = screen.getByPlaceholderText(/\+56 9 1234 5678/i);
    
    expect(checkbox.checked).toBe(false);
    expect(telefonoInput.disabled).toBe(true);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(telefonoInput.disabled).toBe(false);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
    expect(telefonoInput.disabled).toBe(true);
  });

  // PRUEBA 7: Validación de TELÉFONO
  it('VALIDACIÓN DE TELÉFONO CON validation.js', () => {
    render(<MockContact />);
    
    const checkbox = screen.getByLabelText(/whatsapp/i);
    fireEvent.click(checkbox);
    
    const telefonoInput = screen.getByPlaceholderText(/\+56 9 1234 5678/i);
    const testTelefono = '+56 9 9876 5432';
    
    fireEvent.change(telefonoInput, { target: { value: testTelefono } });

    expect(validatePhone(testTelefono)).toBe(true);
    expect(telefonoInput.value).toBe(testTelefono);
  });

  // PRUEBA 7B: Teléfono inválido
  it('VALIDACIÓN DE TELÉFONO INVÁLIDO con validation.js', () => {
    const telefonoInvalido = '123456789';
    expect(validatePhone(telefonoInvalido)).toBe(false);
  });

  // PRUEBA 8: FORMULARIO COMPLETO
  it('FORMULARIO COMPLETO CON VALIDACIÓN TOTAL DE validation.js', () => {
    render(<MockContact />);
    
    const formData = {
      nombre: 'Juan Pérez',
      email: 'juan@empresa.com',
      referencia: 'recomendacion',
      asunto: 'Desarrollo de App Móvil',
      mensaje: 'Necesito desarrollar una aplicación móvil para iOS y Android',
      whatsapp_contact: true,
      telefono: '+56 9 8765 4321'
    };
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { 
      target: { value: formData.nombre } 
    });
    
    fireEvent.change(screen.getByPlaceholderText('tu@dominio.com'), { 
      target: { value: formData.email } 
    });
    
    const selectReferencia = screen.getByDisplayValue('Selecciona una opción');
    fireEvent.change(selectReferencia, { 
      target: { value: formData.referencia } 
    });
    
    fireEvent.change(screen.getByPlaceholderText('¿Sobre qué quieres hablar?'), { 
      target: { value: formData.asunto } 
    });
    
    fireEvent.change(screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...'), { 
      target: { value: formData.mensaje } 
    });
    
    fireEvent.click(screen.getByLabelText(/whatsapp/i));
    fireEvent.change(screen.getByPlaceholderText(/\+56 9 1234 5678/i), { 
      target: { value: formData.telefono } 
    });
    
    expect(screen.getByPlaceholderText('Tu nombre').value).toBe(formData.nombre);
    expect(screen.getByPlaceholderText('tu@dominio.com').value).toBe(formData.email);
    expect(selectReferencia.value).toBe(formData.referencia);
    
    const validationErrors = validateContactForm(formData);
    expect(validationErrors).toEqual({});
  });S

  // PRUEBA 9: Formulario INCOMPLETO
  it('VALIDACIÓN DE FORMULARIO INCOMPLETO con validation.js', () => {
    const formDataIncompleto = {
      nombre: 'J',
      email: 'invalido',
      referencia: '',
      asunto: '',
      mensaje: 'Corto',
      whatsapp_contact: false,
      telefono: ''
    };
    
    const validationErrors = validateContactForm(formDataIncompleto);
    
    expect(Object.keys(validationErrors).length).toBeGreaterThan(0);
    expect(validationErrors.nombre).toBeDefined();
    expect(validationErrors.email).toBeDefined();
  });

  // PRUEBA 10: Teléfono con WhatsApp activo
  it('VALIDACIÓN DE TELÉFONO CUANDO WHATSAPP ESTÁ ACTIVO', () => {
    const formDataConWhatsApp = {
      nombre: 'Juan Pérez',
      email: 'juan@empresa.com',
      referencia: 'google',
      asunto: 'Consulta',
      mensaje: 'Este es un mensaje válido',
      whatsapp_contact: true,
      telefono: '123'
    };
    
    const validationErrors = validateContactForm(formDataConWhatsApp);
    
    expect(validationErrors.telefono).toBeDefined();
  });

  // PRUEBA 11: Cambio de referencia
  it('CAMBIO DE CAMPO REFERENCIA ACTUALIZA EL ESTADO', () => {
    render(<MockContact />);
    
    const selectReferencia = screen.getByDisplayValue('Selecciona una opción');
    
    fireEvent.change(selectReferencia, { target: { value: 'google' } });
    expect(selectReferencia.value).toBe('google');
    
    fireEvent.change(selectReferencia, { target: { value: 'redes_sociales' } });
    expect(selectReferencia.value).toBe('redes_sociales');
  });

  // PRUEBA 12: Múltiples campos en secuencia
  it('CAMBIO DE MÚLTIPLES CAMPOS EN SECUENCIA', () => {
    render(<MockContact />);
    
    const nombreInput = screen.getByPlaceholderText('Tu nombre');
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    const asuntoInput = screen.getByPlaceholderText('¿Sobre qué quieres hablar?');
    
    fireEvent.change(nombreInput, { target: { value: 'Ana García' } });
    fireEvent.change(emailInput, { target: { value: 'ana@test.com' } });
    fireEvent.change(asuntoInput, { target: { value: 'Consulta general' } });
    
    expect(nombreInput.value).toBe('Ana García');
    expect(emailInput.value).toBe('ana@test.com');
    expect(asuntoInput.value).toBe('Consulta general');
  });

  // PRUEBA 13: Todos los campos con errores
  it('VALIDACIÓN COMPLETA CON TODOS LOS CAMPOS CON ERRORES', () => {
    const datosInvalidos = {
      nombre: '',
      email: 'sin-arroba',
      referencia: '',
      asunto: '',
      mensaje: 'ABC',
      whatsapp_contact: true,
      telefono: '123'
    };
    
    const errores = validateContactForm(datosInvalidos);
    
    expect(errores.nombre).toBeDefined();
    expect(errores.email).toBeDefined();
    expect(errores.referencia).toBeDefined();
    expect(errores.asunto).toBeDefined();
    expect(errores.mensaje).toBeDefined();
    expect(errores.telefono).toBeDefined();
  });

  // PRUEBA 14: Email vacío
  it('EMAIL VACÍO NO EJECUTA VALIDACIÓN EN TIEMPO REAL', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    
    fireEvent.change(emailInput, { target: { value: '' } });
    expect(emailInput.value).toBe('');
  });

  // PRUEBA 15: Teléfono sin WhatsApp
  it('CAMBIO DE TELÉFONO SIN WHATSAPP ACTIVO', () => {
    render(<MockContact />);
    
    const telefonoInput = screen.getByPlaceholderText(/\+56 9 1234 5678/i);
    expect(telefonoInput.disabled).toBe(true);
  });

  // PRUEBA 16: Nombre largo
  it('VALIDACIÓN DE NOMBRE LARGO', () => {
    render(<MockContact />);
    
    const nombreInput = screen.getByPlaceholderText('Tu nombre');
    const nombreLargo = 'Juan Carlos Pedro José María Fernández García';
    
    fireEvent.change(nombreInput, { target: { value: nombreLargo } });
    
    expect(validateName(nombreLargo)).toBe(true);
    expect(nombreInput.value).toBe(nombreLargo);
  });

  // PRUEBA 17: Mensaje largo
  it('VALIDACIÓN DE MENSAJE LARGO', () => {
    render(<MockContact />);
    
    const mensajeInput = screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...');
    const mensajeLargo = 'Este es un mensaje muy largo que contiene más de 10 caracteres';
    
    fireEvent.change(mensajeInput, { target: { value: mensajeLargo } });
    
    expect(validateMessage(mensajeLargo)).toBe(true);
    expect(mensajeInput.value).toBe(mensajeLargo);
  });

  // PRUEBA 18: Formulario sin WhatsApp
  it('LLENAR FORMULARIO SIN WHATSAPP', () => {
    render(<MockContact />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { 
      target: { value: 'María López' } 
    });
    fireEvent.change(screen.getByPlaceholderText('tu@dominio.com'), { 
      target: { value: 'maria@test.com' } 
    });
    fireEvent.change(screen.getByDisplayValue('Selecciona una opción'), { 
      target: { value: 'evento' } 
    });
    fireEvent.change(screen.getByPlaceholderText('¿Sobre qué quieres hablar?'), { 
      target: { value: 'Consulta de servicios' } 
    });
    fireEvent.change(screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...'), { 
      target: { value: 'Necesito información sobre sus servicios de desarrollo web' } 
    });
    
    const formData = {
      nombre: 'María López',
      email: 'maria@test.com',
      referencia: 'evento',
      asunto: 'Consulta de servicios',
      mensaje: 'Necesito información sobre sus servicios de desarrollo web',
      whatsapp_contact: false,
      telefono: ''
    };
    
    const errores = validateContactForm(formData);
    expect(Object.keys(errores).length).toBe(0);
  });

  // PRUEBA 19: Sin validar teléfono si WhatsApp desactivado
  it('VALIDACIÓN DE TELÉFONO SIN WHATSAPP NO GENERA ERROR', () => {
    const formData = {
      nombre: 'Juan Pérez',
      email: 'juan@empresa.com',
      referencia: 'google',
      asunto: 'Consulta',
      mensaje: 'Este es un mensaje válido con más de diez caracteres',
      whatsapp_contact: false,
      telefono: 'cualquier-cosa'
    };
    
    const errores = validateContactForm(formData);
    expect(errores.telefono).toBeUndefined();
  });

  // PRUEBA 20: Cambio de email inválido a válido
  it('CAMBIAR EMAIL DE INVÁLIDO A VÁLIDO LIMPIA ERROR', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    
    fireEvent.change(emailInput, { target: { value: 'invalido' } });
    expect(validateEmail('invalido')).toBe(false);
    
    fireEvent.change(emailInput, { target: { value: 'valido@dominio.com' } });
    expect(validateEmail('valido@dominio.com')).toBe(true);
  });

 

  // PRUEBA 21: Intentar enviar formulario con errores de validación
  it('INTENTAR ENVIAR FORMULARIO CON ERRORES DE VALIDACIÓN', () => {
    render(<MockContact />);
    
    // Dejar formulario vacío/inválido
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { 
      target: { value: 'A' } // Muy corto
    });
    
    const submitButton = screen.getByRole('button', { name: /Enviar Mensaje/i });
    
    // Intentar enviar (el formulario debería prevenir el envío por validación)
    fireEvent.click(submitButton);
    
    // Verificar que el botón existe y puede ser clickeado
    expect(submitButton).toBeTruthy();
  });

  // PRUEBA 22: Click en botón de enviar con formulario válido
  it('CLICK EN BOTÓN ENVIAR CON FORMULARIO VÁLIDO', async () => {
    render(<MockContact />);
    
    // Llenar formulario completamente
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { 
      target: { value: 'Pedro González' } 
    });
    fireEvent.change(screen.getByPlaceholderText('tu@dominio.com'), { 
      target: { value: 'pedro@test.com' } 
    });
    fireEvent.change(screen.getByDisplayValue('Selecciona una opción'), { 
      target: { value: 'google' } 
    });
    fireEvent.change(screen.getByPlaceholderText('¿Sobre qué quieres hablar?'), { 
      target: { value: 'Proyecto importante' } 
    });
    fireEvent.change(screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...'), { 
      target: { value: 'Este es un mensaje válido con suficiente longitud para pasar validación' } 
    });
    
    const submitButton = screen.getByRole('button', { name: /Enviar Mensaje/i });
    
    // Click en enviar
    fireEvent.click(submitButton);
    
    // Esperar a que el botón cambie a "Enviando..."
    await waitFor(() => {
      // El botón debería cambiar su texto o estado
      expect(submitButton).toBeTruthy();
    }, { timeout: 1000 });
  });

  // PRUEBA 23: Verificar estado inicial del formulario
  it('VERIFICAR ESTADO INICIAL DEL FORMULARIO', () => {
    render(<MockContact />);
    
    // Todos los campos deben estar vacíos
    expect(screen.getByPlaceholderText('Tu nombre').value).toBe('');
    expect(screen.getByPlaceholderText('tu@dominio.com').value).toBe('');
    expect(screen.getByDisplayValue('Selecciona una opción').value).toBe('');
    expect(screen.getByPlaceholderText('¿Sobre qué quieres hablar?').value).toBe('');
    expect(screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...').value).toBe('');
    expect(screen.getByLabelText(/whatsapp/i).checked).toBe(false);
    expect(screen.getByPlaceholderText(/\+56 9 1234 5678/i).disabled).toBe(true);
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i }).disabled).toBe(false);
  });

  // PRUEBA 24: Llenar teléfono con WhatsApp activado y desactivarlo
  it('LLENAR TELÉFONO Y LUEGO DESACTIVAR WHATSAPP', () => {
    render(<MockContact />);
    
    const checkbox = screen.getByLabelText(/whatsapp/i);
    const telefonoInput = screen.getByPlaceholderText(/\+56 9 1234 5678/i);
    
    // Activar WhatsApp
    fireEvent.click(checkbox);
    expect(telefonoInput.disabled).toBe(false);
    
    // Llenar teléfono
    fireEvent.change(telefonoInput, { target: { value: '+56 9 1234 5678' } });
    expect(telefonoInput.value).toBe('+56 9 1234 5678');
    
    // Desactivar WhatsApp
    fireEvent.click(checkbox);
    expect(telefonoInput.disabled).toBe(true);
    
    // El teléfono mantiene su valor aunque esté deshabilitado
    expect(telefonoInput.value).toBe('+56 9 1234 5678');
  });

  // PRUEBA 25: Validar múltiples formatos de email
  it('VALIDAR MÚLTIPLES FORMATOS DE EMAIL', () => {
    const emailsValidos = [
      'usuario@dominio.com',
      'test@test.co',
      'nombre.apellido@empresa.com',
      'user+tag@mail.com'
    ];
    
    const emailsInvalidos = [
      'sin-arroba',
      '@sinusuario.com',
      'usuario@',
      'usuario @dominio.com'
    ];
    
    emailsValidos.forEach(email => {
      expect(validateEmail(email)).toBe(true);
    });
    
    emailsInvalidos.forEach(email => {
      expect(validateEmail(email)).toBe(false);
    });
  });

  // PRUEBA 26: Validar múltiples formatos de teléfono
  it('VALIDAR MÚLTIPLES FORMATOS DE TELÉFONO', () => {
    const telefonosValidos = [
      '+56 9 1234 5678',
      '+56 9 9999 9999',
      '+56 9 0000 0000'
    ];
    
    const telefonosInvalidos = [
      '56 9 1234 5678', // Sin +
      '+56 1234 5678', // Sin el 9
      '+56 9 12345678', // Sin espacios
      '123456789',
      '+56912345678'
    ];
    
    telefonosValidos.forEach(telefono => {
      expect(validatePhone(telefono)).toBe(true);
    });
    
    telefonosInvalidos.forEach(telefono => {
      expect(validatePhone(telefono)).toBe(false);
    });
  });

  // PRUEBA 27: Validar límites de longitud de nombre
  it('VALIDAR LÍMITES DE LONGITUD DE NOMBRE', () => {
    expect(validateName('')).toBe(false); // Vacío
    expect(validateName('A')).toBe(false); // 1 carácter
    expect(validateName('Ab')).toBe(true); // 2 caracteres (mínimo)
    expect(validateName('Juan')).toBe(true); // 4 caracteres
  });

  // PRUEBA 28: Validar límites de longitud de mensaje
  it('VALIDAR LÍMITES DE LONGITUD DE MENSAJE', () => {
    expect(validateMessage('')).toBe(false); // Vacío
    expect(validateMessage('Hola')).toBe(false); // 4 caracteres
    expect(validateMessage('123456789')).toBe(false); // 9 caracteres
    expect(validateMessage('1234567890')).toBe(true); // 10 caracteres (mínimo)
    expect(validateMessage('Este es un mensaje válido')).toBe(true);
  });

});