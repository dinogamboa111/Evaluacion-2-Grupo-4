import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="product-card h-100">
      {/* Si hay imagen, mostrarla */}
      {product.img && (
        <Card.Img 
          variant="top" 
          src={product.img} 
          className="product-image"
          alt={product.name}
        />
      )}

      <Card.Body className="d-flex flex-column">
        {/* Nombre del producto */}
        <Card.Title className="product-title">
          {product.name}
        </Card.Title>

        {/* Descripción */}
        <Card.Text className="product-description flex-grow-1">
          {product.description}
        </Card.Text>

        {/* Precio */}
        <Card.Text className="product-price">
          ${product.price.toLocaleString('es-CL')}
        </Card.Text>

        {/* Botón */}
        <Button 
          variant="primary" 
          className="btn-custom mt-auto" 
          onClick={() => addToCart(product)}
        >
          Añadir al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;