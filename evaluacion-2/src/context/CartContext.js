import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Inicializar desde localStorage si existe
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('spaceti_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error cargando carrito desde localStorage:', error);
      return [];
    }
  });

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    try {
      localStorage.setItem('spaceti_cart', JSON.stringify(cartItems));
      console.log('Carrito guardado en localStorage:', cartItems);
    } catch (error) {
      console.error('Error guardando carrito en localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    console.log('Agregando producto:', product);

    if (!product || !product.id) {
      console.error('Producto invalido:', product);
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.productoId === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.productoId === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            productoId: product.id,
            nombre: product.nombre,
            precio: Number(product.precio),
            cantidad: 1,
            imagenUrl: product.imagenUrl
          }
        ];
      }
    });
  };

  const removeFromCart = (productoId) => {
    console.log('Eliminando producto:', productoId);
    setCartItems(prevItems => prevItems.filter(item => item.productoId !== productoId));
  };

  const incrementQuantity = (productoId) => {
    console.log('Incrementando cantidad:', productoId);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productoId === productoId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productoId) => {
    console.log('Decrementando cantidad:', productoId);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productoId === productoId
          ? { ...item, cantidad: Math.max(1, item.cantidad - 1) }
          : item
      )
    );
  };

  const clearCart = () => {
    console.log('Vaciando carrito completo');
    setCartItems([]);
    localStorage.removeItem('spaceti_cart');
  };

  const totalItems = cartItems.reduce((total, item) => total + item.cantidad, 0);
  const totalPrice = cartItems.reduce((total, item) => {
    const precio = Number(item.precio) || 0;
    const cantidad = Number(item.cantidad) || 0;
    return total + (precio * cantidad);
  }, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};