import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const [expanded, setExpanded] = useState(false); // 👈 controla el estado del menú

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="custom-navbar"
      expanded={expanded} // 👈 conecta el estado con el Navbar
      onToggle={(isExpanded) => setExpanded(isExpanded)} // actualiza estado al abrir/cerrar
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3"
          onClick={() => setExpanded(false)} // 👈 cierra el menú al ir a inicio
        >
          SpaceTI
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setExpanded(false)} // 👈 cierra al hacer clic
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Acerca de
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Proyectos
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/posts"
              className={location.pathname === '/posts' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Posts
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/gallery"
              className={location.pathname === '/gallery' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Galería
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Contacto
            </Nav.Link>

            {/* ✅ Carrito con contador */}
            <Nav.Link
              as={Link}
              to="/cart"
              className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
              onClick={() => setExpanded(false)} // 👈 también aquí
            >
              🛒 Carrito
              {totalItems > 0 && (
                <Badge bg="danger" className="cart-badge">
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
