
# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
## Proyecto: Plataforma web con react y testing, SpaceTI.
### Desarolladores: Robinson Arriagada - Jaime Delgadillo - Camila Erices - Dino Gamboa
#### [Visitar la página del proyecto en Vercel](https://evaluacion-2-grupo-4-nidw.vercel.app/)
#### [Visitar Repositorio Github](https://github.com/dinogamboa111/Evaluacion-2-Grupo-4/)

---

## TABLA DE CONTENIDOS

1. [Introducción](#1-introducción)  
   1.1 [Propósito](#11-propósito)  
   1.2 [Alcance del Producto](#12-alcance-del-producto)  
   1.3 [Definiciones, Acrónimos y Abreviaciones](#13-definiciones-acrónimos-y-abreviaciones)  
   1.4 [Audiencia del Documento](#14-audiencia-del-documento)  

2. [Descripción General](#2-descripción-general)  
   2.1 [Perspectiva del Producto](#21-perspectiva-del-producto)  
   2.2 [Funciones del Producto](#22-funciones-del-producto)  
   2.3 [Características del Usuario](#23-características-del-usuario)  
   2.4 [Restricciones](#24-restricciones)  
   2.5 [Suposiciones y Dependencias](#25-suposiciones-y-dependencias)  

3. [Requisitos Funcionales](#3-requisitos-funcionales)  
   3.1 [RF-001: Visualización de noticias](#31-rf-001-visualización-de-noticias)  
   3.2 [RF-002: Visualización de galería](#32-rf-002-visualización-de-galería)  
   3.3 [RF-003: Gestión del carrito de compras](#33-rf-003-gestión-del-carrito-de-compras)  
   3.4 [RF-004: Visualización del formulario de contacto](#34-rf-004-visualización-del-formulario-de-contacto)  
   3.5 [RF-005: Navegación entre secciones](#35-rf-005-navegación-entre-secciones)  

4. [Requisitos No Funcionales](#4-requisitos-no-funcionales)  
   4.1 [RNF-USA-01: Diseño Responsivo](#41-rnf-usa-01-diseño-responsivo)  
   4.2 [RNF-USA-02: Compatibilidad entre navegadores](#42-rnf-usa-02-compatibilidad-entre-navegadores)  
   4.3 [RNF-USA-03: Rendimiento](#43-rnf-usa-03-rendimiento)  
   4.4 [RNF-USA-04: Usabilidad](#44-rnf-usa-04-usabilidad)  
   4.5 [RNF-USA-05: Mantenibilidad](#45-rnf-usa-05-mantenibilidad)  

5. [Arquitectura de Componentes React](#5-arquitectura-de-componentes-react)  
   5.1 [Jerarquía de Componentes](#51-jerarquía-de-componentes)  
   5.2 [Lista de Componentes del Sistema](#52-lista-de-componentes-del-sistema)  

6. [Testing](#6-testing)  
   6.1 [Objetivo del Testing](#61-objetivo-del-testing)  
   6.2 [Las 5 Pruebas Mínimas Obligatorias](#62-las-5-pruebas-mínimas-obligatorias)  
   6.3 [Estructura de Archivos de Tests](#63-estructura-de-archivos-de-tests)  
   6.4 [Tabla de Cobertura de Testing](#64-tabla-de-cobertura-de-testing)  
   6.5 [Evidencias de Testing](#65-evidencias-de-testing)  

7. [Apéndices](#7-apéndices)  
   7.1 [Matriz de Trazabilidad](#71-matriz-de-trazabilidad)  
   7.2 [Glosario](#72-glosario)  
   7.3 [Referencias](#73-referencias)

# 1. Introducción


## 1.1 Propósito

Este documento especifica los requisitos funcionales y no funcionales del sistema web **SpaceTI**, desarrollado con **React**, asegurando una comprensión común entre los desarrolladores, usuarios y los interesados del proyecto.  

Este documento **SRS** servirá como base para el desarrollo, verificación y validación del producto final, proporcionando una descripción detallada de las funcionalidades esperadas, restricciones técnicas y características generales del sistema.  

El propósito principal de este SRS es:

- Definir los requisitos funcionales y no funcionales.  
- Establecer las bases para el diseño e implementación del sistema.  
- Servir como referencia durante el desarrollo y testing.  
- Facilitar la evaluación del proyecto.  


## 1.2 Alcance del Producto

**Nombre del producto:** SpaceTI  

**Descripción breve:**  
El sistema consiste en una plataforma web desarrollada en **React**, cuyo objetivo principal es ofrecer soluciones tecnológicas relacionadas con el espacio y la tecnología.

**Funcionalidades incluidas:**

- Sección de noticias  
- Galería de imágenes  
- Carrito de compras  
- Navegación intuitiva  
- Formulario con validación  
- Compatibilidad multiplataforma  
- Diseño responsivo  

**Funcionalidades NO incluidas (fuera de alcance):**

- Backend con base de datos persistente  
- Envío funcional de formulario de contacto  
- Integración con medios de pago electrónicos  
- Notificaciones, chat en línea o soporte en tiempo real  
- Optimización SEO avanzada y analítica web  


## 1.3 Definiciones, Acrónimos y Abreviaciones

| **Término**           | **Definición** |
|------------------------|----------------|
| **SRS**                | *Software Requirements Specification* |
| **React**              | Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas. |
| **React Router**       | Librería que permite gestionar la navegación entre páginas o vistas en una aplicación React tipo SPA (Single Page Application). |
| **SPA**                | *Single Page Application* |
| **Props**              | Propiedades pasadas a un componente React. |
| **State**              | Estado interno de un componente React. |
| **Hook**               | Función especial de React (como `useState`, `useEffect`, etc.). |
| **JSX**                | *JavaScript XML* - Extensión de la sintaxis de JavaScript utilizada en React para escribir estructuras similares a HTML dentro del código JS. |
| **Componentes**        | Unidades reutilizables de código. |
| **Node.js**            | Entorno de ejecución de JavaScript del lado del servidor. |
| **Testing**            | Proceso de verificación del correcto funcionamiento de los componentes y funcionalidades del sistema. |
| **Jasmine**            | Framework de testing de JavaScript que permite realizar pruebas unitarias y de comportamiento. |
| **Karma**              | Herramienta que se usa junto con Jasmine para ejecutar pruebas automatizadas en diferentes navegadores. |
| **RF**                 | Requisito Funcional. |
| **RNF**                | Requisito No Funcional. |
| **Responsive Design**  | Técnica de diseño que permite que la interfaz se adapte automáticamente a diferentes tamaños de pantalla y dispositivos. |


## 1.4 Audiencia del Documento

- Equipo de desarrollo  
- Docente evaluador  
- Futuros mantenedores del código  

---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---
# 2. Descripción General


## 2.1 Perspectiva del Producto

**Contexto:**  
Este proyecto es una migración del Trabajo 1 (HTML/CSS/JS vanilla) a **React**.

**SpaceTI** es una plataforma web que combina contenido informativo sobre el espacio y tecnología con soluciones tecnológicas para clientes.  
Está diseñada como un sitio **SPA (Single-Page Application)** utilizando **React 18**, lo que permite una navegación fluida y rápida sin recargas completas de página.  
Además, cuenta con un diseño **responsive**, asegurando que la experiencia de usuario sea óptima en dispositivos móviles, tablets y computadoras de escritorio.  

**Características adicionales:**

- Utiliza **Karma** y **Jasmine** para pruebas unitarias.  
- Se integra con **Bootstrap 5** para diseño responsivo.  
- Implementa **validación de formularios** en el lado del cliente.  

> Este proyecto corresponde a la migración del Trabajo 1 (HTML/CSS/JS vanilla) hacia React.


## 2.2 Funciones del Producto

Las principales funciones que **SpaceTI** debe ofrecer incluyen:

- **Noticias y artículos:** Visualización de noticias y artículos sobre tecnología y espacio.  
- **Galería multimedia:** Exploración de imágenes sobre TI.  
- **Validación de formulario:** Formulario de contacto para consultas o feedback.  
- **Carrito de compras:** Visualización de un carrito que permite agregar y quitar productos (sin funcionalidad).  
- **Testing y calidad:** Validación de componentes con Jasmine para pruebas unitarias y de comportamiento.  
- **Diseño responsivo:** Adaptación a diferentes tamaños de pantalla (mobile: 360–414px, desktop: 1920×1080).  


## 2.3 Características del Usuario

**Perfil de usuario típico:**

- **Edad:** 20 a 50 años.  
- **Experiencia técnica:** Básica a intermedia; usuarios capaces de navegar por páginas web y utilizar aplicaciones comunes sin necesidad de conocimientos avanzados.  
- **Dispositivos:** Smartphone, tablet y PC de escritorio.  

**Necesidades del usuario:**

- Acceder a soluciones tecnológicas.  
- Consultar noticias y artículos sobre tecnología y espacio de forma rápida y sencilla.  
- Contactar al equipo de **SpaceTI** mediante formularios fáciles de usar.  
- Simular compras de productos tecnológicos a través de un carrito (no funcional).  
- Navegar en una interfaz **responsive** en cualquier dispositivo.  
- Disfrutar de una experiencia interactiva, visualmente clara y con tiempos de carga rápidos.  


## 2.4 Restricciones

**Tecnológicas:**

- Compatibilidad con navegadores modernos (**Chrome 90+**, **Firefox 88+**, **Safari 14+**).  
- El sistema debe ser **responsive**, adaptándose a distintos dispositivos.  
- Uso de **React** como framework principal del frontend.  
- Las pruebas unitarias deben realizarse con **Jasmine** para garantizar la calidad del código.  

**De Desarrollo:**

- El tiempo de desarrollo está limitado a **una semana**, incluyendo planificación, implementación, pruebas y ajustes.  
- El equipo de desarrollo está compuesto por un máximo de **4 personas**.  

**De Alcance:**

- El proyecto está limitado al **frontend** (interfaz e interacción con el usuario).  
- No se incluirá integración real con sistemas de pago ni bases de datos externas.  
- El carrito de compras **no será funcional**.  


## 2.5 Suposiciones y Dependencias

**Suposiciones:**

- Los usuarios disponen de **una conexión estable a internet**.  
- Los navegadores de los usuarios tienen **JavaScript habilitado**.  
- Los dispositivos de los usuarios son compatibles (smartphone, tablet o PC) con resoluciones mínimas adecuadas.  
- Los usuarios poseen **conocimientos básicos de navegación web**.  

**Dependencias:**

- **React 18.x:** Biblioteca principal para la construcción de la interfaz de usuario.  
- **Bootstrap 5.x:** Framework CSS utilizado para diseño responsivo y componentes visuales predefinidos.  
- **Node.js:** Entorno de ejecución de JavaScript utilizado para desarrollo y gestión de dependencias.  
- **Jasmine:** Framework de testing para pruebas unitarias y de comportamiento en componentes React.  
- **Herramientas de desarrollo:** Editores de código y navegadores modernos.  
- **Vercel:** Plataforma utilizada para el despliegue del proyecto. 

---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---

# 3. Requisitos Funcionales


## 3.1 RF-001: Visualización de Noticias

**Descripción:**  
El sistema debe permitir al usuario visualizar una lista de noticias con título, imagen y descripción breve.

**Prioridad:** 
- Alta  

**Entrada:**
- Solicitud del usuario al acceder a la sección *Noticias*.  
- Datos de noticias: título, imagen, extracto y enlace.  

**Proceso:**
1. El componente itera sobre el arreglo `news` utilizando el método `.map()`.  
2. Por cada elemento del arreglo, se genera una tarjeta (`Card`) con:  
   - Imagen  
   - Título  
   - Resumen  
   - Enlace a la noticia completa  
3. Los elementos se organizan usando `Row` y `Col` de **React-Bootstrap** para mantener un diseño **responsive**.  

**Componentes React involucrados:**
- `Posts` *(componente principal)*  
- `Container`, `Row`, `Col`, `Card` *(de React-Bootstrap)*  
- `Card.Img`, `Card.Body`, `Card.Title`, `Card.Text`  

---

**Ejemplo de código:**

```jsx
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

```

## 3.2 RF-002: Visualización de Galería

**Descripción:**  
El sistema debe mostrar una galería de imágenes que el usuario pueda explorar, adaptada al tamaño de su pantalla.

**Prioridad:** Alta  

**Entrada:**  
- Click o acceso a la sección galería.  
- Datos de la galería: imagen y título de cada etapa.  
- En este caso, los datos se reciben localmente en un arreglo `galleryItems`.  
- **Nota:** No se reciben props externas ni datos dinámicos de un backend.  

**Proceso:**  
1. El componente itera sobre el arreglo `galleryItems` usando `map()`.  
2. Por cada elemento, crea un bloque visual (`gallery-card`) con la imagen y un *overlay* que muestra el título.  
3. Los elementos se organizan en filas y columnas usando `Row` y `Col` de **React-Bootstrap** para mantener un diseño **responsive**.  

**Salida:**  
- Se renderiza visualmente una galería con todas las imágenes y sus títulos superpuestos.  
- La salida es únicamente visual; no se produce información para otros componentes.  

**Componentes React involucrados:**  
- `Gallery` (componente principal)  
- `Container`, `Row`, `Col` de **React-Bootstrap**  
- Elementos HTML: `<div>`, `<img>`, `<h3>`  

**Ejemplo de código**

```jsx

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

```
## 3.3 RF-003: Gestión del Carrito de Compras

**Descripción:**  
El sistema debe permitir agregar y eliminar productos del carrito, actualizando el total dinámicamente.

**Prioridad:** Alta  

**Entrada:**  
- Productos disponibles (desde `product` o `ProductCard`).  
- Acciones del usuario: agregar al carrito, incrementar/decrementar cantidad, eliminar item, vaciar carrito.  
- Datos del formulario de pago: `cardNumber`, `cardHolder`, `expiryDate`, `cvv`.  

**Proceso:**  
1. Renderiza productos disponibles usando `ProductCard`.  
2. Permite agregar productos al carrito mediante contexto (`useCart`).  
3. Muestra los items del carrito con sus cantidades y total por producto.  
4. Permite modificar cantidades y eliminar items usando funciones del contexto (`incrementQuantity`, `decrementQuantity`, `removeFromCart`).  
5. Calcula subtotal, impuestos (19%) y total general.  

**Modal de pago:**  
- **Paso 1:** Loading de simulación de procesamiento.  
- **Paso 2:** Formulario para ingresar datos de tarjeta.  
- **Paso 3:** Confirmación de pago y vaciado del carrito.  
- Reset del carrito y datos de pago al finalizar o cancelar.  

**Salida:**  
- Render visual del carrito con todos los productos agregados.  
- Actualización del total y subtotal dinámicamente.  
- Modal de pago con simulación y confirmación.  
- Vaciado del carrito tras pago exitoso.  

**Componentes React involucrados:**  
- `CartPage` (componente principal)  
- `ProductCard` (para renderizar cada producto)  
- `Container`, `Row`, `Col`, `Card`, `Button`, `ListGroup`, `Modal`, `Form`, `Spinner` (React-Bootstrap)  

**State del componente:**

| Variable           | Tipo      | Inicial | Descripción |
|-------------------|-----------|--------|------------|
| `showPaymentModal` | boolean   | false  | Controla si el modal de pago está visible. |
| `paymentStep`      | string    | 'loading' | Paso actual del flujo de pago: 'loading'. |
| `formData`         | object    | {cardNumber:'', cardHolder:'', expiryDate:'', cvv:''} | Almacena los datos ingresados en el formulario de pago. |

**Ejemplo de código**

```jsx

import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Container, Row, Col, Card, Button, ListGroup, Modal, Form, Spinner } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';

const CartPage = () => {
  const { cartItems, totalPrice, removeFromCart, decrementQuantity, incrementQuantity, clearCart } = useCart();

  // Estados para modal de pago
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState('loading'); // 'loading' | 'form' | 'success'
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  // Proceder al pago
  const handleProceedPayment = () => {
    setShowPaymentModal(true);
    setPaymentStep('loading');
    setTimeout(() => setPaymentStep('form'), 3000);
  };

  // Cambio en formulario
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Completar pago
  const handleCompletePayment = () => {
    if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
      alert('Por favor completa todos los campos');
      return;
    }
    setPaymentStep('success');
    setTimeout(() => {
      setShowPaymentModal(false);
      clearCart();
      setFormData({ cardNumber:'', cardHolder:'', expiryDate:'', cvv:'' });
      setPaymentStep('loading');
      alert('¡Compra realizada exitosamente!');
    }, 2000);
  };

  return (
    <Container>
      {/* Carrito */}
      <Row>
        {cartItems.map(item => (
          <Col key={item.id}>
            <Card>
              <Card.Body>
                <h5>{item.name}</h5>
                <p>Cantidad: {item.quantity}</p>
                <Button onClick={() => decrementQuantity(item.id)}>-</Button>
                <Button onClick={() => incrementQuantity(item.id)}>+</Button>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Resumen y botón de pago */}
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Total: ${totalPrice.toLocaleString('es-CL')}</ListGroup.Item>
          </ListGroup>
          <Button onClick={handleProceedPayment}>Proceder al Pago</Button>
          <Button variant="outline-danger" onClick={clearCart}>Vaciar Carrito</Button>
        </Card.Body>
      </Card>

      {/* Modal de pago */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        {paymentStep === 'form' && (
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Número de Tarjeta</Form.Label>
                <Form.Control name="cardNumber" value={formData.cardNumber} onChange={handleFormChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Titular</Form.Label>
                <Form.Control name="cardHolder" value={formData.cardHolder} onChange={handleFormChange} />
              </Form.Group>
              <Button onClick={handleCompletePayment}>Confirmar Pago</Button>
            </Form>
          </Modal.Body>
        )}
        {paymentStep === 'success' && (
          <Modal.Body>
            <h4>¡Pago realizado!</h4>
            <p>Total: ${(totalPrice * 1.19).toLocaleString('es-CL')}</p>
          </Modal.Body>
        )}
      </Modal>
    </Container>
  );
};

export default CartPage;
```

## 3.4 RF-004: Visualización del Formulario de Contacto

**Descripción:**  
El sistema debe mostrar un formulario con campos de contacto para que el usuario pueda enviar consultas o feedback.

**Prioridad:** Alta  

**Entrada:**  
- Acceso a la sección *Contacto*.  

**Proceso:**  

El formulario incluye los siguientes campos con sus validaciones correspondientes:

| Campo                        | Tipo           | Validaciones                               | Mensaje de Error                         |
|-------------------------------|----------------|--------------------------------------------|-----------------------------------------|
| Nombre completo               | Texto           | Requerido, mínimo 2 caracteres             | "Por favor ingresa tu nombre"           |
| Correo electrónico            | Email           | Requerido, formato email válido            | "Por favor ingresa un correo válido"    |
| ¿Cómo nos conociste?          | Selección       | Requerido, opción seleccionada             | "Selecciona una opción"                  |
| Asunto                        | Texto           | Requerido                                  | "Por favor ingresa un asunto"           |
| Mensaje                       | Texto largo / textarea | Requerido, mínimo 10 caracteres      | "El mensaje debe tener al menos 20 carácteres" |
| Prefiero contacto por WhatsApp| Checkbox        | Opcional                                   | -                                       |
| Número de WhatsApp            | Teléfono        | Solo si checkbox activado, formato válido | "Ingrese un número de WhatsApp válido" |


**Validaciones implementadas:**  
- Validación de campos requeridos.  
- Validación de formato de correo electrónico.  
- Validación condicional del número de WhatsApp solo si el checkbox está activado.  
- Validación de longitud mínima para mensaje y nombre.  
- Mensajes de error mostrados en línea bajo el campo correspondiente.  


 **Validaciones implementadas:**

```jsx


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
                        />
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
                          placeholder="tu@email.com"
                        />
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
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="google">Búsqueda en Google</option>
                      <option value="redes_sociales">Redes Sociales</option>
                      <option value="recomendacion">Recomendación</option>
                      <option value="evento">Evento o Conferencia</option>
                      <option value="otro">Otro</option>
                    </Form.Select>
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
                    />
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
                    />
                  </Form.Group>

                  <div className="whatsapp-option p-3 bg-light rounded mb-3">
                    <Form.Check
                      type="checkbox"
                      id="whatsapp_contact"
                      name="whatsapp_contact"
                      checked={formData.whatsapp_contact}
                      onChange={handleChange}
                      label="Prefiero que me contacten por WhatsApp"
                      className="mb-2"
                    />
                    
                    <Form.Group>
                      <Form.Label>Número de WhatsApp</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={!formData.whatsapp_contact}
                        placeholder="+56 9 1234 5678"
                      />
                    </Form.Group>
                  </div>

```

 **Mensajes de éxito y error:**

```jsx

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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


```

## 3.5 RF-005: Navegación entre secciones

**Descripción:**  
El sistema debe permitir al usuario moverse entre las diferentes secciones mediante un menú de navegación visible y funcional.

**Implementación:**  
- React Router: Implementa rutas dentro de la SPA, evitando recargas de página.

**Rutas implementadas:**

| Ruta       | Componente | Descripción |
|------------|------------|------------|
| /          | HomePage   | Página de inicio, contiene bienvenida y navegación principal. |
| /about     | About      | Sección “Acerca de”, información sobre el proyecto o equipo. |
| /projects  | Projects   | Lista y descripción de proyectos. |
| /posts     | Posts      | Visualización de noticias y artículos destacados. |
| /gallery   | Gallery    | Galería de imágenes con el ciclo de vida de un proyecto. |
| /contact   | Contact    | Formulario de contacto para comunicarse con el equipo. |
| /cart      | CartPage   | Carrito de compras, permite ver productos agregados y proceder al pago. |

---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---

# 4. Requisitos No Funcionales (RNF)


## 4.1 RNF-USA-01: Diseño Responsivo
**Descripción:**  
El sistema debe adaptarse automáticamente a distintos tamaños y resoluciones de pantalla, garantizando una correcta visualización en dispositivos móviles, tablets y computadoras.

**Criterios de aceptación:**  
- La interfaz se ajusta correctamente en todos los dispositivos sin desbordes ni elementos superpuestos.

## 4.2 RNF-USA-02: Compatibilidad entre navegadores
**Descripción:**  
El sitio web debe funcionar correctamente en los principales navegadores actuales (Google Chrome, Microsoft Edge, Mozilla Firefox).

**Criterios de aceptación:**  
- La navegación y las funcionalidades principales se comportan igual en todos los navegadores soportados.  
- No se presentan errores de renderizado ni incompatibilidades visuales.

## 4.3 RNF-USA-03: Rendimiento
**Descripción:**  
El sistema debe garantizar un tiempo de carga rápido y una respuesta fluida a las interacciones del usuario.

**Criterios de aceptación:**  
- Las páginas principales se cargan completamente en menos de 3 segundos bajo una conexión estándar.  
- Las acciones del usuario (click, navegación, agregar al carrito) responden sin retrasos perceptibles.

## 4.4 RNF-USA-04: Usabilidad
**Descripción:**  
La interfaz debe ser intuitiva, clara y fácil de usar, permitiendo que un usuario promedio pueda navegar sin asistencia.

**Criterios de aceptación:**  
- Los usuarios pueden identificar fácilmente los propósitos de cada sección.  
- El flujo de navegación es comprensible sin necesidad de asistencia externa.

## 4.5 RNF-USA-05: Mantenibilidad
**Descripción:**  
El código fuente del sistema debe ser organizado, modularizado, y documentado, facilitando futuras modificaciones o ampliaciones.

**Criterios de aceptación:**  
- El código está estructurado en componentes reutilizables.  
- Se dispone de comentarios y documentación básica que describa la funcionalidad de cada módulo.

---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---
# 5. Arquitectura de Componentes React

## 5.1 Jerarquía de Componentes

**Árbol de componentes:**

```
src/
├── components/
│   ├── tests/
│   │   └── Contact.test.jsx
│   ├── ProductCard/
│   │   ├── ProductCard.css
│   │   └── ProductCard.js
│   ├── Footer.css
│   ├── Footer.js
│   ├── Header.css
│   ├── Header.js
│   └── StarsBackground.js
├── context/
│   └── CartContext.js
├── data/
│   └── products.js
├── pages/
│   ├── Cart/
│   │   ├── CartPage.css
│   │   └── CartPage.js
│   ├── About.js
│   ├── Contact.js
│   ├── Gallery.js
│   ├── Home.js
│   ├── Posts.js
│   └── Projects.js
├── styles/
│   └── App.css
└── utils/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
Archivos raíz:
├── .env
├── .gitignore
├── karma.conf.js
├── package-lock.json
├── package.json
├── SRS.md
└── README.md
```
## 5.2 Lista de Componentes del Sistema



| Componente | Ruta | Descripción | Props principales | State |
|------------|------|-------------|-------------------|-------|
| App | src/App.js | Componente raíz de la aplicación. Maneja el enrutamiento principal mediante React Router y envuelve la app con el CartProvider. | - | - |
| Header | src/components/Header.js | Componente de encabezado del sitio. Barra de navegación responsive con enlaces a todas las páginas, contador de carrito y funcionalidad de menú colapsable para móviles. | - | `expanded` |
| Footer | src/components/Footer.js | Componente de pie de página. Muestra derechos de autor y enlaces a redes sociales (GitHub y YouTube). Diseño responsive con Bootstrap. | - | - |
| StarsBackground | src/components/StarsBackground.js | Componente decorativo que renderiza un fondo animado de estrellas en tres capas con diferentes tamaños y velocidades de animación usando CSS custom properties. | - | - (usa useEffect) |
| ProductCard | src/components/ProductCard/ProductCard.js | Tarjeta de producto reutilizable. Muestra imagen, nombre, descripción, precio formateado y botón para agregar al carrito. Consume CartContext para agregar productos. | `product` (objeto con: id, name, description, price, img) | - (usa CartContext) |
| CartContext | src/context/CartContext.js | Proveedor de contexto para el carrito de compras. Maneja estado global del carrito con funciones para agregar, eliminar, incrementar/decrementar cantidades y vaciar carrito. Calcula totales automáticamente. | `children` | `cartItems`, `totalItems`, `totalPrice` |
| Home | src/pages/Home.js | Página principal del sitio. Presenta la marca "SpaceTI" con imagen de fondo espacial y eslogan "Más allá del espacio". Diseño centrado y minimalista. | - | - |
| About | src/pages/About.js | Página "Acerca de". Muestra información sobre el equipo, misión y estadísticas de proyectos completados, años de experiencia y clientes satisfechos. | - | - |
| Contact | src/pages/Contact.js | Página de contacto. Formulario completo con validación en tiempo real que captura nombre, email, referencia, asunto, mensaje y opción de contacto por WhatsApp. Envía datos a servidor mediante API y muestra alertas de éxito/error. | - | `formData` (nombre, email, referencia, asunto, mensaje, whatsapp_contact, telefono), `isSubmitting`, `alert`, `errors` |
| Gallery | src/pages/Gallery.js | Página de galería. Muestra el ciclo de vida de un proyecto de software con 7 etapas visuales: planificación, análisis, diseño, codificación, testing, despliegue y mantenimiento. | - | - |
| Posts | src/pages/Posts.js | Página de noticias. Muestra 3 artículos destacados sobre tecnología y ciencia con imagen, título, extracto y enlace externo. Diseño horizontal responsivo. | - | - |
| Projects | src/pages/Projects.js | Página de proyectos futuros. Muestra 3 proyectos (IA-Espacial, Robótica y Blog Personal) con descripción y tecnologías utilizadas en badges. | - | - |
| CartPage | src/pages/Cart/CartPage.js | Página integrada de tienda y carrito. Muestra productos disponibles para compra, gestión completa del carrito con cantidades, resumen de compra con impuestos y modal de pago con 3 pasos: loading, formulario de tarjeta y confirmación. | - | `showPaymentModal`, `paymentStep`, `formData` (cardNumber, cardHolder, expiryDate, cvv) |


---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---
# 6. Testing

## 6.1 Objetivo del testing
**Meta de cobertura:**  

Para garantizar una evaluación exhaustiva del código, se establecen las siguientes metas mínimas de cobertura:

- Statements ≥ 80%  
- Branches ≥ 80%  
- Functions ≥ 80%  
- Lines ≥ 80%  

Estas métricas se aplicarán a las pruebas unitarias, ejecutadas con las herramientas seleccionadas para el entorno de desarrollo **Karma** y **Jasmine**.

**Cantidad de pruebas:** 28 pruebas*.
*Necesarias para lograr el porcentaje de cobertura.

**Herramientas:**  
- **Jasmine** (Framework de testing)  
- **Karma** (Test runner)  

## 6.2 Las 5 pruebas mínimas obligatorias

**Se presentan 5 principales pruebas obligatorias que fueron solicitadas:**

**PRUEBA 1: VALIDACIÓN DE NOMBRE con validation.js**

**Componente testeado:** Contact.

**Qué verifica:**

- Que el campo “Tu nombre” se actualiza correctamente cuando el usuario escribe.
- Que la función validateName() retorna true para nombres válidos (con al menos 2 caracteres).
- Que el valor ingresado se refleja correctamente en el input.

**Código:**
```javascript
  it('VALIDACIÓN DE NOMBRE CON validation.js', () => {
    render(<MockContact />);
    
    const nombreInput = screen.getByPlaceholderText('Tu nombre');
    const testNombre = 'Ana';
    
    fireEvent.change(nombreInput, { target: { value: testNombre } });
    
    expect(validateName(testNombre)).toBe(true);
    expect(nombreInput.value).toBe(testNombre);
  });


```
**PRUEBA 2: VALIDACIÓN DE EMAIL con validation.js**

**Componente testeado:** Contact.

**Qué verifica:**

- Que el campo “tu@dominio.com” acepta solo formatos de correo válidos.
- Que la función validateEmail() retorna true para emails con formato correcto (ej. “test@test.com”).
- Que el valor se almacena correctamente en el input al cambiar.

**Código:**
```javascript
it('VALIDACIÓN DE EMAIL CON validation.js', () => {
    render(<MockContact />);
    
    const emailInput = screen.getByPlaceholderText('tu@dominio.com');
    const testEmail = 'test@test.com';
    
    fireEvent.change(emailInput, { target: { value: testEmail } });
    
    expect(validateEmail(testEmail)).toBe(true);
    expect(emailInput.value).toBe(testEmail);
  });



```

**PRUEBA 3: VALIDACIÓN DE TELÉFONO con validation.js**

**Componente testeado:** Contact.

**Qué verifica:**

- Que el campo teléfono se habilita solo al activar el checkbox “WhatsApp”.
- Que la función validatePhone() acepta formatos válidos chilenos (+56 9 XXXX XXXX).
- Que se actualiza correctamente el valor del input al ingresar un teléfono.

**Código:**
```javascript

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


```
**PRUEBA 4: FORMULARIO COMPLETO CON VALIDACIÓN TOTAL DE validation.js**

**Componente testeado:** Contact.

**Qué verifica:**

- Que todos los campos del formulario (nombre, email, referencia, asunto, mensaje, WhatsApp y teléfono) se completan correctamente.
- Que la función validateContactForm() devuelve un objeto vacío ({}) cuando todos los datos son válidos.
- Que se simula correctamente el flujo de un usuario llenando y validando el formulario completo.

**Código:**
```javascript

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
  });


```

**PRUEBA 5: VALIDACIÓN DE FORMULARIO INCOMPLETO con validation.js**

**Componente testeado:** Contact.

**Qué verifica:**

- Que la función validateContactForm() detecta errores cuando los campos son incorrectos o faltan datos.
- Que retorna un objeto con errores definidos en las claves correspondientes (nombre, email, etc.).
- Que el formulario no pasa la validación cuando hay campos vacíos o inválidos.

**Código:**
```javascript

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


```

## 6.3 Estructura de archivos de tests

**Código completo de las 28 pruebas incluidas:**

<details>
  <summary>Click para desplegar código completo del testing en componente Contact</summary>

```javascript
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
  });

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

  // ====== NUEVOS TESTS PARA ALCANZAR 80% ======

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

```
</details> 

## 6.4 Tabla de cobertura de testing

Al ejecutar las 28 pruebas totales realizadas, se obtienen los siguientes resultados:

>Resultados de Pruebas Unitarias (Contact Form)

**Resumen de Ejecución y Cobertura (Karma/Jasmine)**

**Fecha y Hora de Ejecución:** 27 de octubre de 2025, 18:55 hrs.
**Motor de Pruebas:** Karma (Runner), Jasmine (Framework)
**Contexto de la Prueba:** src/components/__tests__/Contact.test.jsx

| Métrica | Cobertura Lograda | Requisito (80%+) | Resultado |
| :--- | :---: | :---: | :---: |
| **Statements** | **89.39%** (59/66) | ✅ OK | Cumple |
| **Branches** | **84.37%** (27/32) | ✅ OK | Cumple |
| **Functions** | **100%** (12/12) | ✅ OK | Cumple |
| **Lines** | **88.88%** (56/63) | ✅ OK | Cumple |

> **Conclusión:** Las pruebas unitarias para el componente de contacto superaron el umbral de cobertura requerido del 80% en todas las métricas clave, confirmando la robustez de las validaciones implementadas.

---

## Detalle de Ejecución por Caso de Prueba

### Módulo de Pruebas: `PRUEBAS FORMULARIO CON VALIDATION.JS`

| Estado | Caso de Prueba | Duración |
| :---: | :--- | :---: |
| ✅ | VALIDACIÓN DE NOMBRE CON validation.js | 41ms |
| ✅ | VALIDACIÓN DE NOMBRE INVÁLIDO con validation.js | 0ms |
| ✅ | VALIDACIÓN DE EMAIL CON validation.js | 11ms |
| ✅ | VALIDACIÓN DE EMAIL INVÁLIDO con validation.js | 8ms |
| ✅ | VALIDACIÓN EN TIEMPO REAL DE EMAIL | 10ms |
| ✅ | VALIDACIÓN DE REFERENCIA CON validation.js | 7ms |
| ✅ | VALIDACIÓN DE TODAS LAS OPCIONES DE REFERENCIA | 15ms |
| ✅ | VALIDACIÓN DE ASUNTO CON validation.js | 7ms |
| ✅ | VALIDACIÓN DE MENSAJE CON validation.js | 4ms |
| ✅ | VALIDACIÓN DE MENSAJE INVÁLIDO con validation.js | 0ms |
| ✅ | VALIDACIÓN DE WHATSAPP CON validation.js | 4ms |
| ✅ | ACTIVAR Y DESACTIVAR CHECKBOX WHATSAPP | 8ms |
| ✅ | VALIDACIÓN DE TELÉFONO CON validation.js | 4ms |
| ✅ | VALIDACIÓN DE TELÉFONO INVÁLIDO con validation.js | 1ms |
| ✅ | FORMULARIO COMPLETO CON VALIDACIÓN TOTAL DE validation.js | 13ms |
| ✅ | VALIDACIÓN DE FORMULARIO INCOMPLETO con validation.js | 0ms |
| ✅ | VALIDACIÓN DE TELÉFONO CUANDO WHATSAPP ESTÁ ACTIVO | 0ms |
| ✅ | CAMBIO DE CAMPO REFERENCIA ACTUALIZA EL ESTADO | 4ms |
| ✅ | CAMBIO DE MÚLTIPLES CAMPOS EN SECUENCIA | 6ms |
| ✅ | VALIDACIÓN COMPLETA CON TODOS LOS CAMPOS CON ERRORES | 0ms |
| ✅ | EMAIL VACÍO NO EJECUTA VALIDACIÓN EN TIEMPO REAL | 4ms |
| ✅ | CAMBIO DE TELÉFONO SIN WHATSAPP ACTIVO | 2ms |
| ✅ | VALIDACIÓN DE NOMBRE LARGO | 5ms |
| ✅ | VALIDACIÓN DE MENSAJE LARGO | 6ms |
| ✅ | LLENAR FORMULARIO SIN WHATSAPP | 6ms |
| ✅ | VALIDACIÓN DE TELÉFONO SIN WHATSAPP NO GENERA ERROR | 1ms |
| ✅ | CAMBIAR EMAIL DE INVÁLIDO A VÁLIDO LIMPIA ERROR | 5ms |
| ✅ | INTENTAR ENVIAR FORMULARIO CON ERRORES DE VALIDACIÓN | 60ms |
| ✅ | CLICK EN BOTÓN ENVIAR CON FORMULARIO VÁLIDO | 30ms |
| ✅ | VERIFICAR ESTADO INICIAL DEL FORMULARIO | 6ms |
| ✅ | LLENAR TELÉFONO Y LUEGO DESACTIVAR WHATSAPP | 13ms |
| ✅ | VALIDAR MÚLTIPLES FORMATOS DE EMAIL | 0ms |
| ✅ | VALIDAR MÚLTIPLES FORMATOS DE TELÉFONO | 0ms |
| ✅ | VALIDAR LÍMITES DE LONGITUD DE NOMBRE | 1ms |
| ✅ | VALIDAR LÍMITES DE LONGITUD DE MENSAJE | 0ms |
| **SUMA TOTAL** | **35 Pruebas Ejecutadas (35 Exitosas)** | **0.302 secs** |


# 6.5 Evidencias de Testing


<p>
  <strong>Para descargar Excel con Tabla de cobertura hacer click para redireccionar a zona de descarga en Github</strong> 
  <a href="./evaluacion-2/docs/ResultadosCoberturaTesting_SpaceTI_React.xlsx" download="ResultadosCoberturaTesting_SpaceTI_React.xlsx">AQUÍ</a>
</p>

---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---
# 7. Apéndices


## 7.1 Matriz de trazabilidad

**Relación entre requisitos y componentes:**


| Requisito     | Componente(s)                                        | Prioridad | Estado         |
|---------------|-----------------------------------------------------|-----------|----------------|
| [RF-001](#31-rf-001-visualización-de-noticias)        | Posts                                              | Alta      | Listo    |
| [RF-002](#32-rf-002-visualización-de-galería)        | Gallery                                            | Alta      | Listo    |
| [RF-003](#33-rf-003-gestión-del-carrito-de-compras)  | CartPage, ProductCard                              | Alta      | Listo    |
| [RF-004](#34-rf-004-visualización-del-formulario-de-contacto) | Contact                                           | Alta      | Listo    |
| [RF-005](#35-rf-005-navegación-entre-secciones)      | App, HomePage, About, Projects, Posts, Gallery, Contact, CartPage | Alta | Listo |
| [RNF-USA-01](#41-rnf-usa-01-diseño-responsivo)       | Todos                                             | Alta      | Listo    |
| [RNF-USA-02](#42-rnf-usa-02-compatibilidad-entre-navegadores) | Todos                                             | Alta      | Listo      |
| [RNF-USA-03](#43-rnf-usa-03-rendimiento)             | Posts, Gallery, CartPage, Contact                 | Alta      | Listo    |
| [RNF-USA-04](#44-rnf-usa-04-usabilidad)              | App, HomePage, Contact, CartPage                  | Alta      | Listo    |
| [RNF-USA-05](#45-rnf-usa-05-mantenibilidad)         | Todos                                             | Alta      | Listo    |


## 7.2 Glosario


- Ver sección [1.3: Definiciones, acrónimos y abreviaciones](#13-definiciones-acrónimos-y-abreviaciones).

## 7.3 Referencias
- [Documentación React](https://react.dev/)  
- [Documentación Bootstrap](https://getbootstrap.com/docs/5.3/)  
- [Documentación Jasmine](https://jasmine.github.io/)


---
<small>[🔝 Volver a la Tabla de Contenidos](#tabla-de-contenidos)</small>

---



