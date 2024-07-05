import logo from './logo.svg';
import './style.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const productsData = [
  { id: 1, title: 'Product 1', price: 100, image: './img/product_1.png' },
  { id: 2, title: 'Product 2', price: 200, image: './img/product_2.png' },
  { id: 3, title: 'Product 2', price: 200, image: './img/product_3.png' },
  { id: 4, title: 'Product 2', price: 200, image: './img/product_4.png' },
  { id: 5, title: 'Product 2', price: 200, image: './img/product_5.png' },
  { id: 6, title: 'Product 2', price: 200, image: './img/product_6.png' },
  { id: 7, title: 'Product 2', price: 200, image: './img/product_7.png' },
  { id: 8, title: 'Product 2', price: 200, image: './img/product_8.png' },
];


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleIncreaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={productsData} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onIncrease={handleIncreaseQuantity} onDecrease={handleDecreaseQuantity} />} />
      </Routes>
    </Router>
  );
};

export default App;
