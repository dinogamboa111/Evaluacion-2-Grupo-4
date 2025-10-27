import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { sendContactForm } from '../utils/api';
import { validateContactForm, validateEmail } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    referencia: '',
    asunto: '',
    mensaje: '',
    whatsapp_contact: false,
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Validación en tiempo real para email
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Email debe tener formato: usuario@dominio.com' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateContactForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setAlert({ show: false, type: '', message: '' });

    try {
      const result = await sendContactForm(formData);
      
      if (result.success) {
        setAlert({
          show: true,
          type: 'success',
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
        });
        setFormData({
          nombre: '',
          email: '',
          referencia: '',
          asunto: '',
          mensaje: '',
          whatsapp_contact: false,
          telefono: ''
        });
      } else {
        setAlert({
          show: true,
          type: 'danger',
          message: `Error: ${result.message}`
        });
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'danger',
        message: 'Error al enviar el mensaje. Verifica que el servidor esté corriendo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact py-5">
      <Container>
        <div className="text-center mb-5 mt-5">
          <h2 className="section-title">Contacto</h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
          </p>
        </div>

        {alert.show && (
          <Alert variant={alert.type} className="mb-4">
            {alert.message}
          </Alert>
        )}

        <Row>
          <Col lg={6} className="mb-4">
            <Card className="h-100 contact-info-card">
              <Card.Body className="p-4">
                <h3 className="mb-4">¿Trabajamos juntos?</h3>
                <p className="mb-4">
                  Si tienes un proyecto en mente o quieres colaborar, no dudes en contactarnos. 
                  Respondemos en menos de 24 horas.
                </p>

                <div className="contact-details mb-4">
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <div>contacto@spaceti.com</div>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <strong>Teléfono</strong>
                      <div>+56 9 9123 1212</div>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <strong>Ubicación</strong>
                      <div>Santiago, Chile</div>
                    </div>
                  </div>
                </div>

                <div className="social-links d-flex gap-3">
                  <a href="https://www.instagram.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.tiktok.com/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="contact-form-card bg-dark text-light">
              <Card.Body className="p-4">
                <div className="form-header mb-4">
                  <h3>Envíame un mensaje</h3>
                  <p className="text-white">
                    Completa el formulario y me pondré en contacto contigo pronto
                  </p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre completo *</Form.Label>
                        <Form.Control
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          minLength="2"
                          isInvalid={!!errors.nombre}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.nombre}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Correo electrónico *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@dominio.com"
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>¿Cómo nos conociste? *</Form.Label>
                    <Form.Select
                      name="referencia"
                      value={formData.referencia}
                      onChange={handleChange}
                      required
                      isInvalid={!!errors.referencia}
                      style={{ color: '#6c757d', backgroundColor: '#fff' }} // 👈 texto gris
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="google" style={{ color: '#6c757d' }}>Búsqueda en Google</option>
                      <option value="redes_sociales" style={{ color: '#6c757d' }}>Redes Sociales</option>
                      <option value="recomendacion" style={{ color: '#6c757d' }}>Recomendación</option>
                      <option value="evento" style={{ color: '#6c757d' }}>Evento o Conferencia</option>
                      <option value="otro" style={{ color: '#6c757d' }}>Otro</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      {errors.referencia}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Asunto *</Form.Label>
                    <Form.Control
                      type="text"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      placeholder="¿Sobre qué quieres hablar?"
                      isInvalid={!!errors.asunto}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.asunto}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntame más sobre tu proyecto..."
                      minLength="10"
                      isInvalid={!!errors.mensaje}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mensaje}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="whatsapp-option p-3 bg-light rounded mb-3">
                    <Form.Check
                      type="checkbox"
                      id="whatsapp_contact"
                      name="whatsapp_contact"
                      checked={formData.whatsapp_contact}
                      onChange={handleChange}
                      label={<span style={{ color: '#6c757d' }}>Prefiero que me contacten por WhatsApp</span>}
                      className="mb-2"
                    />
                    
                    <Form.Group>
                      <Form.Label style={{ color: '#6c757d' }}>Número de WhatsApp</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={!formData.whatsapp_contact}
                        placeholder="+56 9 1234 5678"
                        isInvalid={!!errors.telefono}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.telefono}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-100 btn-custom"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>

                  <div className="form-footer text-center mt-3">
                    <small className="text-white">
                      <i className="fas fa-shield-alt me-2"></i>
                      Tu información está segura y nunca será compartida
                    </small>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
