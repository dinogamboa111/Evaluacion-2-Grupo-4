import React, { useEffect, useState } from 'react';
import { Button, Table, Alert, Spinner, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { getAllProductos } from '../../services/productoService';
import { crearOrden } from '../../services/ordenService';
import ProductCard from '../../components/ProductCard/ProductCard';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        console.log('=== INICIANDO CARGA DE PRODUCTOS ===');
        const data = await getAllProductos();
        console.log('Productos recibidos:', data);
        console.log('Cantidad de productos:', data?.length);
        console.log('Primer producto:', data?.[0]);
        setProductos(data);
        console.log('Estado productos actualizado');
      } catch (err) {
        console.error('ERROR cargando productos:', err);
        console.error('Error completo:', err.response || err.message);
      }
    };
    fetchProductos();
  }, []);

  const subtotal = cartItems.reduce((acc, item) => {
    const producto = productos.find(p => p.id === item.productoId);
    return acc + (producto ? Number(producto.precio) * item.cantidad : 0);
  }, 0);

  const impuesto = subtotal * 0.19;
  const total = subtotal + impuesto;

  const handleCrearOrden = async () => {
    if (cartItems.length === 0) {
      setError('El carrito esta vacio');
      return;
    }
    
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log('Items en carrito:', cartItems);

      const items = cartItems.map(item => {
        if (!item.productoId || !item.cantidad) {
          console.error('Item invalido:', item);
          throw new Error('Item del carrito invalido');
        }
        return {
          productoId: item.productoId,
          cantidad: item.cantidad
        };
      });

      const ordenRequest = {
        items: items,
        infoPago: {
          metodo: 'tarjeta',
          cardHolder: 'Usuario Frontend',
          cardNumber: '**** **** **** 1234'
        }
      };

      console.log('Enviando orden:', ordenRequest);

      const responseData = await crearOrden(ordenRequest);
      
      console.log('Orden creada:', responseData);
      
      clearCart();
      setSuccess(true);
      
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error('Error completo:', err);
      console.error('Response data:', err.response?.data);
      
      let errorMessage = 'Error al crear la orden';
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.validationErrors) {
        const errors = err.response.data.validationErrors;
        errorMessage = Object.values(errors).join(', ');
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  console.log('RENDER - Productos en estado:', productos);
  console.log('RENDER - Cantidad:', productos.length);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Productos disponibles</h2>

      {productos.length === 0 ? (
        <Alert variant="warning">
          Cargando productos...
        </Alert>
      ) : (
        <Row className="g-4">
          {productos.map(producto => (
            <Col 
              key={producto.id} 
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex"
            >
              <ProductCard product={producto} />
            </Col>
          ))}
        </Row>
      )}

      <h2 className="mt-5 mb-4">Carrito de Compras</h2>
      
      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess(false)}>
          Orden creada exitosamente! Tu compra ha sido procesada.
        </Alert>
      )}
      
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {cartItems.length === 0 ? (
        <Alert variant="info">
          Tu carrito esta vacio. Agrega productos para comenzar.
        </Alert>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => {
                const producto = productos.find(p => p.id === item.productoId);
                if (!producto) {
                  console.warn('Producto no encontrado:', item.productoId);
                  return null;
                }
                
                const itemSubtotal = Number(producto.precio) * item.cantidad;
                
                return (
                  <tr key={item.productoId}>
                    <td>
                      <strong>{producto.nombre}</strong>
                    </td>
                    <td>${Number(producto.precio).toLocaleString('es-CL')}</td>
                    <td>
                      <span className="badge bg-primary">{item.cantidad}</span>
                    </td>
                    <td>
                      <strong>${itemSubtotal.toLocaleString('es-CL')}</strong>
                    </td>
                    <td>
                      <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => removeFromCart(item.productoId)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="text-end bg-light p-3 rounded">
            <p className="mb-1 text-muted">
              <strong>Subtotal:</strong> ${subtotal.toLocaleString('es-CL')}
            </p>
            <p className="mb-1 text-muted">
              <strong>Impuesto (19%):</strong> ${impuesto.toLocaleString('es-CL')}
            </p>
            <h4 className="text-success mt-2">
              <strong>Total a Pagar:</strong> ${total.toLocaleString('es-CL')}
            </h4>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button 
              variant="outline-secondary" 
              onClick={clearCart}
              disabled={loading}
            >
              Vaciar carrito
            </Button>
            <Button 
              variant="success" 
              onClick={handleCrearOrden} 
              disabled={loading}
              size="lg"
            >
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" /> Procesando...
                </>
              ) : (
                'Confirmar compra'
              )}
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;