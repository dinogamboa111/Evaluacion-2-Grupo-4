import { useState } from 'react'; // useState para modal de pago <----
import { useCart } from '../../context/CartContext';
import { Container, Row, Col, Card, Button, ListGroup, Modal, Form, Spinner } from 'react-bootstrap';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, totalPrice, removeFromCart, decrementQuantity, incrementQuantity, clearCart } = useCart();
  
  // NUEVO: Estados para el modal de pago
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState('loading'); // 'loading' | 'form' | 'success'
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  // NUEVO: Función para proceder al pago
  const handleProceedPayment = () => {
    setShowPaymentModal(true);
    setPaymentStep('loading');
    
    // Simulación de procesamiento (3 segundos)
    setTimeout(() => {
      setPaymentStep('form');
    }, 3000);
  };

  // NUEVO: Función para cambios en el formulario
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // NUEVO: Función para completar pago
  const handleCompletePayment = () => {
    // Validación simple
    if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Simular éxito
    setPaymentStep('success');
    
    // Después de 2 segundos, cerrar modal y limpiar carrito
    setTimeout(() => {
      setShowPaymentModal(false);
      clearCart();
      setFormData({ cardNumber: '', cardHolder: '', expiryDate: '', cvv: '' });
      setPaymentStep('loading');
      alert('¡Compra realizada exitosamente!');
    }, 2000);
  };

  // NUEVO: Función para cancelar
  const handleCancelPayment = () => {
    setShowPaymentModal(false);
    setFormData({ cardNumber: '', cardHolder: '', expiryDate: '', cvv: '' });
    setPaymentStep('loading');
  };

  return (
    <Container className="cart-page">
      {/* ===== SECCIÓN DE PRODUCTOS DISPONIBLES ===== */}
      <section className="products-section mb-5">
        <h1 className="section-title mb-5">Tienda</h1>
        
        <Row xs={1} md={2} lg={4} className="g-4 mb-5">
          {products.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </section>

      {/* SEPARADOR */}
      <hr className="my-5 section-divider" />

      {/*SECCIÓN DEL CARRITO*/}
      <section className="cart-section">
        <h1 className="section-title mb-5">Mi Carrito</h1>

        {/* Si el carrito está vacío */}
        {cartItems.length === 0 ? (
          <div className="cart-empty-content text-center">
            <h3>Tu carrito está vacío</h3>
            <p className="text-muted">Agrega productos desde arriba para empezar</p>
          </div>
        ) : (
          /* Carrito con items */
          <Row className="g-4">
            {/* Columna de items */}
            <Col lg={8}>
              <div className="cart-items-container">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item-card">
                    <Row className="align-items-center g-3">
                      {/* Imagen */}
                      <Col xs={12} sm={3}>
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="cart-item-image"
                        />
                      </Col>

                      {/* Info del producto */}
                      <Col xs={12} sm={5}>
                        <h5 className="cart-item-name">{item.name}</h5>
                        <p className="cart-item-description">{item.description}</p>
                        <p className="cart-item-price">
                          ${item.price.toLocaleString('es-CL')}
                        </p>
                      </Col>

                      {/* Controles de cantidad */}
                      <Col xs={12} sm={4}>
                        <div className="quantity-controls">
                          <Button 
                            variant="outline-light" 
                            size="sm"
                            onClick={() => decrementQuantity(item.id)}
                            className="qty-btn"
                          >
                            −
                          </Button>
                          <span className="qty-display">{item.quantity}</span>
                          <Button 
                            variant="outline-light" 
                            size="sm"
                            onClick={() => incrementQuantity(item.id)}
                            className="qty-btn"
                          >
                            +
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    {/* Fila con total y eliminar */}
                    <Row className="mt-3">
                      <Col className="text-end">
                        <strong className="cart-item-total">
                          Total: ${(item.price * item.quantity).toLocaleString('es-CL')}
                        </strong>
                        <Button 
                          variant="danger" 
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="ms-3"
                        >
                          Eliminar
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </Col>

            {/* Columna de resumen */}
            <Col lg={4}>
              <Card className="cart-summary-card">
                <Card.Body>
                  <Card.Title className="section-title mb-4">Resumen</Card.Title>
                  
                  <ListGroup variant="flush" className="cart-summary-list">
                    {/* Subtotal */}
                    <ListGroup.Item className="cart-summary-item">
                      <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                      <span>${totalPrice.toLocaleString('es-CL')}</span>
                    </ListGroup.Item>

                    {/* Envío */}
                    <ListGroup.Item className="cart-summary-item">
                      <span>Envío</span>
                      <span className="text-success">Gratis</span>
                    </ListGroup.Item>

                    {/* Impuesto */}
                    <ListGroup.Item className="cart-summary-item">
                      <span>Impuesto (19%)</span>
                      <span>${(totalPrice * 0.19).toLocaleString('es-CL')}</span>
                    </ListGroup.Item>

                    {/* Total */}
                    <ListGroup.Item className="cart-summary-total">
                      <strong>Total</strong>
                      <strong>${(totalPrice * 1.19).toLocaleString('es-CL')}</strong>
                    </ListGroup.Item>
                  </ListGroup>

                  {/* Botones */}
                  <Button 
                    variant="success" 
                    className="w-100 mt-4 btn-custom"
                    size="lg"
                    onClick={handleProceedPayment} // ✅ NUEVO: onClick
                  >
                    Proceder al Pago
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    className="w-100 mt-2"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </section>

      {/*MODAL DE PAGO*/}
      <Modal 
        show={showPaymentModal} 
        onHide={handleCancelPayment}
        centered
        backdropClassName="payment-modal-backdrop"
        className="payment-modal"
      >
        {/* PASO 1: LOADING */}
        {paymentStep === 'loading' && (
          <Modal.Body className="payment-loading">
            <div className="text-center">
              <Spinner animation="border" variant="primary" className="mb-3" style={{ width: '60px', height: '60px' }} />
              <h4>Procesando pago...</h4>
              <p className="text-muted">Por favor espera</p>
            </div>
          </Modal.Body>
        )}

        {/* PASO 2: FORMULARIO DE TARJETA */}
        {paymentStep === 'form' && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Ingresa tus datos de pago</Modal.Title>
            </Modal.Header>
            <Modal.Body className="payment-form">
              <Form>
                {/* Número de tarjeta */}
                <Form.Group className="mb-3">
                  <Form.Label>Número de Tarjeta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleFormChange}
                    maxLength="19"
                  />
                </Form.Group>

                {/* Titular */}
                <Form.Group className="mb-3">
                  <Form.Label>Titular de la tarjeta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Juan Pérez"
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                {/* Fecha y CVV */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Fecha de vencimiento</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MM/YY"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleFormChange}
                        maxLength="5"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="123"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleFormChange}
                        maxLength="3"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Info total */}
                <Card className="mb-3 bg-light">
                  <Card.Body>
                    <strong>Monto a pagar:</strong>
                    <h5>${(totalPrice * 1.19).toLocaleString('es-CL')}</h5>
                  </Card.Body>
                </Card>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleCancelPayment}>
                Cancelar
              </Button>
              <Button variant="success" onClick={handleCompletePayment}>
                Confirmar Pago
              </Button>
            </Modal.Footer>
          </>
        )}

        {/* PASO 3: ÉXITO */}
        {paymentStep === 'success' && (
          <Modal.Body className="payment-success text-center">
            <div className="success-icon mb-3" style={{ fontSize: '60px' }}>✅</div>
            <h4>¡Pago realizado!</h4>
            <p className="text-muted">Gracias por tu compra</p>
            <p className="text-success fw-bold">${(totalPrice * 1.19).toLocaleString('es-CL')}</p>
          </Modal.Body>
        )}
      </Modal>
    </Container>
  );
};

export default CartPage;