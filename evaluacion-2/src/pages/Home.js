import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center min-vh-100 align-items-center">
          <Col lg={8}>
            <h1 className="hero-title display-1 fw-bold mb-3">SpaceTI</h1>
            <p className="hero-subtitle lead mb-4">
              Más allá del espacio
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

