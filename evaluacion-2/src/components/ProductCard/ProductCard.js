import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="product-card h-100">

      {/* Imagen desde backend */}
      {product.imagenUrl && (
        <Card.Img 
          variant="top" 
          src={product.imagenUrl}
          className="product-image"
          alt={product.nombre}
        />
      )}

      <Card.Body className="d-flex flex-column">

        {/* Nombre */}
        <Card.Title className="product-title">
          {product.nombre}
        </Card.Title>

        {/* Categoría */}
        {product.categoria && (
          <Badge bg="secondary" className="mb-2">
            {product.categoria}
          </Badge>
        )}

        {/* Descripción */}
        <Card.Text className="product-description flex-grow-1">
          {product.descripcion}
        </Card.Text>

        {/* Precio */}
        <Card.Text className="product-price">
          ${Number(product.precio).toLocaleString('es-CL')}
        </Card.Text>

        {/* Stock */}
        <Card.Text className="text-muted">
          Stock disponible: {product.stock}
        </Card.Text>

        {/* Botón */}
        <Button 
          variant="primary"
          className="btn-custom mt-auto"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          {product.stock === 0 ? 'Sin stock' : 'Añadir al carrito'}
        </Button>

      </Card.Body>
    </Card>
  );
};

export default ProductCard;
