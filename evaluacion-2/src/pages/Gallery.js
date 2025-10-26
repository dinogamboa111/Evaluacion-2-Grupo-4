import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  const galleryItems = [
    {
      image: "https://www.scnsoft.com/blog-pictures/software-development-outsourcing/plan-your-project-with-your-software-development-methodology.png",
      title: "Planificación de proyecto"
    },
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtIe6IrGFAvwWOjCr0PCqlzgL-uExGqHgPNry6Zd-8YgWwXkDWas4FfUn9MRYLNeCgnNDRkzE-UPm60jWdOM04z9kp6u7HsPs9DSsDBQYCGnMUqxABtppsJf-07SJ7fktALOdmLy0_ZscZ/s1600/7+T%25C3%25A9cnicas+de+levantamiento+de+requerimientos+-+Tormenta+de+ideas.jpg",
      title: "Análisis de requerimientos"
    },
    {
      image: "https://www.varadero.es/wp-content/uploads/2020/03/servcios-it-desarrollo-software.png",
      title: "Diseño del Software"
    },
    {
      image: "https://img.freepik.com/vector-premium/desarrollo-software-lenguaje-programacion-codificacion_284092-33.jpg",
      title: "Proceso de Codificación"
    },
    {
      image: "https://www.indium.tech/wp-content/uploads/2021/04/115-7-Reasons-Why-Software-Testing-is-Important.jpg",
      title: "Testing & QA"
    },
    {
      image: "https://zibtek-ghost-blog.sfo3.cdn.digitaloceanspaces.com/2021/09/Software-Deployment-Process.jpg",
      title: "Proceso de Despliegue CI/CD"
    },
    {
      image: "https://arsoftlabs.com/media/servicios/softwaremant.jpg",
      title: "Proceso de Mantenimiento"
    }
  ];

  return (
    <section className="gallery py-5">
      <Container>
        <h2 className="section-title text-center mb-5 mt-5">Ciclo de vida de un proyecto</h2>
      
        
        <Row>
          {galleryItems.map((item, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="card-overlay">
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;