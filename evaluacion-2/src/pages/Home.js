import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section
      className="d-flex flex-column justify-content-start text-center text-white"
      style={{
        backgroundImage: "url('/imagenes/Fondo_web.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        margin: 0,
        paddingTop: '6rem', // ajusta si lo quieres más arriba o abajo
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="display-1 fw-bold mb-3">SpaceTI</h1>
            <p className="lead mb-0">Más allá del espacio</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
