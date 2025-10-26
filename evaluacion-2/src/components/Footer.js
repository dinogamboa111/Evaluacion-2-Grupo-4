import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">© 2025 SpaceTI. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-social">
              <a href="https://github.com/dinogamboa111/Evaluacion-2-Grupo-4" target="_blank" rel="noopener noreferrer" className="me-3">
                GitHub
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;