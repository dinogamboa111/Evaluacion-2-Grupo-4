import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ NUEVO
import './Header.css'; // ✅ NUEVO

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCart(); // ✅ NUEVO: Obtener contador de items

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          SpaceTI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              Acerca de
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Proyectos
            </Nav.Link>
            <Nav.Link as={Link} to="/posts" className={location.pathname === '/posts' ? 'active' : ''}>
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
              Galería
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contacto
            </Nav.Link>
            
            {/* ✅ NUEVO: Botón de carrito con contador */}
            <Nav.Link 
              as={Link} 
              to="/cart" 
              className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
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