import { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const CartContext = createContext();

// 2. Crear Hook personalizado
export const useCart = () => useContext(CartContext);

// 3. Crear el Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Si ya existe, incrementamos cantidad
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Si es nuevo, lo agregamos con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar un producto completamente del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Decrementar cantidad (si llega a 0, se elimina automáticamente)
  const decrementQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  };

  // Incrementar cantidad
  const incrementQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Vaciar carrito completamente
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculamos totales
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // 4. Devolvemos el Provider con todos los valores y funciones
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      decrementQuantity,
      incrementQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};