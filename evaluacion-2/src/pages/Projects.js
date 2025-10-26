import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "IA-Espacial",
      description: "Reconocimiento de imágenes astronómicas",
      technologies: ["Python", "MATLAB", "C++"]
    },
    {
      title: "Robótica",
      description: "Drones de imitación de misiones espaciales",
      technologies: ["C", "C++", "Python"]
    },
    {
      title: "Blog Personal",
      description: "Blog responsive con sistema de comentarios y categorías",
      technologies: ["HTML", "CSS", "PHP"]
    }
  ];

  return (
    <section className="projects py-5">
      <Container>
        <h2 className="section-title text-center mb-5 mt-5">Futuros Proyectos</h2>
        
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="project-card h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="project-image-placeholder mb-3">
                    <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <Card.Title className="mb-3">{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="project-tech mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;