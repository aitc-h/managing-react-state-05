import { useEffect, useState } from 'react';

export default function useCart() {
  // Creating state for cart
  // Tries to load the cart from localStorage
  // If failed, default to []
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) ?? [];
    } catch {
      console.error('The cart could not be parsed into JSON.');
      return [];
    }
  });

  // When the cart changes, persist it to localStorage
  useEffect(() => {
    console.log('Cart: ', { cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add a new item to the cart
  // If the item already exists, increment the quantity
  // Else, add it to the cart
  function addToCart(id, sku) {
    setCart((items) => {
      const itemInCart = items.find((i) => i.sku === sku);
      if (itemInCart) {
        // Return new array with the matching item replaced
        return items.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Return new array with the new item appended
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  // Sets the quantity of an item that already exists in the cart
  // If the new quantity is < 1, remove it from the cart
  function updateQuantity(sku, quantity) {
    setCart((items) =>
      items
        .map((item) => (item.sku === sku ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  return { cart, addToCart, updateQuantity };
}
