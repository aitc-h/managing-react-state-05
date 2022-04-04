import React from 'react';
import './App.css';
import useCart from './hooks/useCart';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Detail from './Detail';
import Cart from './Cart';
import Checkout from './Checkout';

export default function App() {
  const { addToCart, cart, updateQuantity, emptyCart } = useCart();
  const numItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="content">
        <Header numItemsInCart={numItemsInCart} />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} updateQuantity={updateQuantity} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} emptyCart={emptyCart} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
