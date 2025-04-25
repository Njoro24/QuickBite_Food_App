// Description: This file contains the CartContext and CartProvider components, which manage the cart state and provide functions to manipulate the cart items. It also includes a notification system to inform users about cart actions.
import { createContext, useState, useContext } from 'react';
import NotificationBanner from '../components/feedback/NotificationBanner';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setNotification({ message: `${item.name} added to cart`, type: 'success' });
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setNotification({ message: 'Item removed from cart', type: 'success' });
    setTimeout(() => setNotification(null), 3000);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === item.id ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
      {notification && (
        <NotificationBanner message={notification.message} type={notification.type} />
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}