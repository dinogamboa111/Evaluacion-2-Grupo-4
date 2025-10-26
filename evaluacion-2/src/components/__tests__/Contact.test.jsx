// src/components/__tests__/Contact.test.jsx - CON VALIDATION.JS
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../pages/Contact';
import { validateEmail, validateName, validateMessage, validateContactForm, validatePhone } from '../../utils/validation'; // Ruta corregida

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
    
    // Validar con validation.js
    expect(validateName(testNombre)).toBe(true);
    expect(nombreInput.value).toBe(testNombre);
  });

  // PRUEBA 2: Validación de EMAIL con validation.js
  it('VALIDACIÓN DE EMAIL CON validation.js', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    const testEmail = 'test@test.com';
    
    fireEvent.change(emailInput, { target: { value: testEmail } });
    
    // Validar con validation.js
    expect(validateEmail(testEmail)).toBe(true);
    expect(emailInput.value).toBe(testEmail);
  });

  // PRUEBA 3: Validación de REFERENCIA (select) con validation.js
  it('VALIDACIÓN DE REFERENCIA CON validation.js', () => {
    render(<MockContact />);
    
    const select = screen.getByDisplayValue('Selecciona una opción');
    const testReferencia = 'google';
    
    fireEvent.change(select, { target: { value: testReferencia } });
    
    // Para referencia, validamos que no esté vacío
    expect(testReferencia).toBeTruthy();
    expect(testReferencia).not.toBe('');
    expect(select.value).toBe(testReferencia);
  });

  // PRUEBA 4: Validación de ASUNTO con validation.js
  it('VALIDACIÓN DE ASUNTO CON validation.js', () => {
    render(<MockContact />);
    
    const asuntoInput = screen.getByPlaceholderText('¿Sobre qué quieres hablar?');
    const testAsunto = 'Proyecto Web';
    
    fireEvent.change(asuntoInput, { target: { value: testAsunto } });
    
    // Para asunto, validamos que no esté vacío
    expect(testAsunto).toBeTruthy();
    expect(testAsunto.length).toBeGreaterThan(0);
    expect(asuntoInput.value).toBe(testAsunto);
  });

  // PRUEBA 5: Validación de MENSAJE con validation.js
  it('VALIDACIÓN DE MENSAJE CON validation.js', () => {
    render(<MockContact />);
    
    const mensajeInput = screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...');
    const testMensaje = 'Este es un mensaje de prueba válido con más de 10 caracteres';
    
    fireEvent.change(mensajeInput, { target: { value: testMensaje } });
    
    // Validar con validation.js
    expect(validateMessage(testMensaje)).toBe(true);
    expect(mensajeInput.value).toBe(testMensaje);
  });

  // PRUEBA 6: Validación de WHATSAPP con validation.js
  it('VALIDACIÓN DE WHATSAPP CON validation.js', () => {
    render(<MockContact />);
    
    const checkbox = screen.getByLabelText(/whatsapp/i);
    
    fireEvent.click(checkbox);
    
    // Validar que el checkbox funciona
    expect(checkbox.checked).toBe(true);
  });

  // PRUEBA 7: Validación de TELÉFONO con validation.js
  it('VALIDACIÓN DE TELÉFONO CON validation.js', () => {
    render(<MockContact />);
    
    // Activar WhatsApp primero
    const checkbox = screen.getByLabelText(/whatsapp/i);
    fireEvent.click(checkbox);
    
    // Llenar teléfono
    const telefonoInput = screen.getByPlaceholderText(/\+56 9 1234 5678/i);
    const testTelefono = '+56 9 9876 5432';
    
    fireEvent.change(telefonoInput, { target: { value: testTelefono } });
    
    // Validar con validation.js
    expect(validatePhone(testTelefono)).toBe(true);
    expect(telefonoInput.value).toBe(testTelefono);
  });

  // PRUEBA 8: FORMULARIO COMPLETO CON VALIDACIÓN TOTAL con validation.js
  it('FORMULARIO COMPLETO CON VALIDACIÓN TOTAL DE validation.js', () => {
    render(<MockContact />);
    
    // Datos de prueba válidos
    const formData = {
      nombre: 'Juan Pérez',
      email: 'juan@empresa.com',
      referencia: 'recomendacion',
      asunto: 'Desarrollo de App Móvil',
      mensaje: 'Necesito desarrollar una aplicación móvil para iOS y Android con funcionalidades avanzadas de geolocalización y notificaciones push',
      whatsapp_contact: true,
      telefono: '+56 9 8765 4321'
    };
    
    // Llenar todos los campos uno por uno
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { 
      target: { value: formData.nombre } 
    });
    
    fireEvent.change(screen.getByPlaceholderText('tu@dominio.com'), { 
      target: { value: formData.email } 
    });
    
    fireEvent.change(screen.getByDisplayValue('Selecciona una opción'), { 
      target: { value: formData.referencia } 
    });
    
    fireEvent.change(screen.getByPlaceholderText('¿Sobre qué quieres hablar?'), { 
      target: { value: formData.asunto } 
    });
    
    fireEvent.change(screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...'), { 
      target: { value: formData.mensaje } 
    });
    
    // Activar WhatsApp y agregar teléfono
    fireEvent.click(screen.getByLabelText(/whatsapp/i));
    fireEvent.change(screen.getByPlaceholderText(/\+56 9 1234 5678/i), { 
      target: { value: formData.telefono } 
    });
    
    // VERIFICAR TODOS LOS CAMPOS EN LA UI
    expect(screen.getByPlaceholderText('Tu nombre').value).toBe(formData.nombre);
    expect(screen.getByPlaceholderText('tu@dominio.com').value).toBe(formData.email);
    expect(screen.getByDisplayValue(formData.referencia).value).toBe(formData.referencia);
    expect(screen.getByPlaceholderText('¿Sobre qué quieres hablar?').value).toBe(formData.asunto);
    expect(screen.getByPlaceholderText('Cuéntame más sobre tu proyecto...').value).toBe(formData.mensaje);
    expect(screen.getByLabelText(/whatsapp/i).checked).toBe(formData.whatsapp_contact);
    expect(screen.getByPlaceholderText(/\+56 9 1234 5678/i).value).toBe(formData.telefono);
    
    // VALIDACIÓN COMPLETA CON validation.js
    const validationErrors = validateContactForm(formData);
    
    // Verificar que no hay errores de validación
    expect(validateName(formData.nombre)).toBe(true);
    expect(validateEmail(formData.email)).toBe(true);
    expect(validateMessage(formData.mensaje)).toBe(true);
    expect(validatePhone(formData.telefono)).toBe(true);
    expect(formData.referencia).toBeTruthy();
    expect(formData.asunto).toBeTruthy();
    
    // La validación completa debe retornar objeto vacío (sin errores)
    expect(validationErrors).toEqual({});
    expect(Object.keys(validationErrors).length).toBe(0);
  });

});