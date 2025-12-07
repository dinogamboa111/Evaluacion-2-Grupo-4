import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="product-card h-100 shadow-sm">
      {product.imagenUrl && (
        <Card.Img 
          variant="top" 
          src={product.imagenUrl} 
          className="product-image" 
          alt={product.nombre}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200?text=Sin+Imagen';
          }}
        />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate-2">
          {product.nombre}
        </Card.Title>

        {product.categoria && (
          <Badge bg="secondary" className="mb-2 align-self-start">
            {product.categoria}
          </Badge>
        )}

        <Card.Text className="flex-grow-1 text-muted small">
          {product.descripcion}
        </Card.Text>

        <div className="mt-auto">
          <Card.Text className="mb-2">
            <strong className="product-price">
              ${Number(product.precio).toLocaleString('es-CL')}
            </strong>
          </Card.Text>
          
          <Card.Text className="product-stock mb-3">
            {product.stock > 0 ? (
              <span>
                Stock: {product.stock} disponibles
              </span>
            ) : (
              <span className="text-danger">Sin stock</span>
            )}
          </Card.Text>

          <Button 
            variant={product.stock > 0 ? "primary" : "secondary"}
            disabled={product.stock === 0}
            onClick={() => addToCart(product)}
            className="w-100"
          >
            {product.stock === 0 ? 'Sin stock' : 'Añadir al carrito'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;