import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Posts = () => {
  const news = [
    {
      title: "Nuevo Megatelescopio en Chile",
      image: "/imagenes/telescopio.png",
      excerpt: "Telescopio Extremadamente Grande o ELT será el nombre en español del nuevo telescopio que se está construyendo en nuestro país, el cual comenzará su funcionamiento en 2028.",
      link: "https://www.bbc.com/mundo/articles/cx29p4p112do"
    },
    {
      title: "Meta ficha Genios de la IA",
      image: "/imagenes/meta.png",
      excerpt: "Meta se adelanta en la carrera de IA, creando Meta Superintelligence Labs (MSL). Incorporando investigadores de elite de empresas rivales como OpenAI, Google y otros.",
      link: "https://forbes.es/empresas/756225/meta-ficha-a-trece-cerebros-de-la-ia-para-su-nueva-division-de-superinteligencia-artificial/"
    },
    {
      title: "China lidera en tecnología",
      image: "/imagenes/china.png",
      excerpt: "Producir en China se decía que sería más barato pero las empresas de EEUU alimentaron a sus potenciales rivales. Si las empresas estadounidenses utilizaban a China para producir barato, China las estaba utilizando de vuelta para apuntalar su desarrollo tecnológico.",
      link: "https://www.bbc.com/mundo/articles/cx29ljx57pgo"
    }
  ];

  return (
    <section className="posts py-5">
      <Container>
        <h2 className="section-title text-center mb-5 mt-5">Noticias</h2>
        
        <Row className="justify-content-center">
          {news.map((item, index) => (
            <Col lg={8} className="mb-4" key={index}>
              <Card className="post-card h-100">
                <Row className="g-0 h-100">
                  <Col md={4}>
                    <div className="post-image-wrapper h-100">
                      <Card.Img 
                        src={item.image} 
                        alt={item.title}
                        className="h-100 post-image"
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="d-flex flex-column h-100">
                      <Card.Title className="text-center mb-3">{item.title}</Card.Title>
                      <Card.Text className="flex-grow-1 justified">
                        {item.excerpt}
                      </Card.Text>
                      <div className="post-link mt-auto">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="read-more"
                        >
                          Lee más sobre esta noticia...
                        </a>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Posts;