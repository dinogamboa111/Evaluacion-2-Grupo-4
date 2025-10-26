import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const stats = [
    { number: "15+", label: "Proyectos Completados" },
    { number: "5+", label: "Años de Experiencia" },
    { number: "20+", label: "Clientes Felices" }
  ];

  return (
    <section className="about py-5">
      <Container>
        <h2 className="section-title text-center mb-5 mt-5">Acerca de Nosotros</h2>
        
               
        <Row className="align-items-center mb-5">
          <Col lg={8}>
            <div className="about-text">
              <p className="lead">
                Somos un equipo apasionado por la tecnología, la programación y el espacio.
                Cada proyecto es una nueva misión, y nos emociona crear soluciones que lleven
                la innovación un poco más allá de nuestra órbita.
              </p>
              <p>
                Programamos, innovamos y buscamos soluciones.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {stats.map((stat, index) => (
            <Col lg={4} md={4} sm={12} className="mb-4" key={index}>
              <Card className="stat-card text-center h-100">
                <Card.Body className="p-4">
                  <h3 className="stat-number display-4 fw-bold mb-2">{stat.number}</h3>
                  <p className="stat-label mb-0">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;