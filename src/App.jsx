import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

export default function App() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-page">
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <div className="landing-overlay"></div>
            <div className="landing-content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="landing-divider"></div>
              <AboutUs />
              <button className="get-started-button" onClick={() => navigate('/products')}>
                Get Started
              </button>
            </div>
          </div>
        } />
        
        <Route path="/*" element={
          <>
            <header className="site-header">
              <div className="header-inner">
                <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                  <div className="brand-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M17,8C8,10 5.9,16.17 5.1,18C6.9,17.2 13,15.1 14.8,6.2C11.5,8.8 8.8,12.7 8,14C8.8,11.5 12.7,8.8 17,8M19,2A2,2 0 0,1 21,4C21,4.78 20.56,5.45 19.92,5.77C18.88,11.23 15.34,16.32 10.6,18.86L10.7,19A2,2 0 0,1 9,21C7.89,21 7,20.1 7,19C7,18.66 7.09,18.35 7.24,18.08C5.66,18.42 4.19,19 3,20L2,19C3.74,17.15 6,15.7 7.7,15C7.9,13.7 8.6,11.5 9.7,9.3C7.9,10.6 6.3,12.5 5,14L4,13C6.3,10.4 9.5,8 13.5,6.6C12,7.3 10.7,8.2 9.7,9.3C11.6,6.9 14.5,4.7 18.2,3.3C18.4,2.5 19.1,2 19,2Z" />
                    </svg>
                  </div>
                  <div className="brand-text">
                    <h1>Paradise Nursery</h1>
                    <span>Where Green Meets Serenity</span>
                  </div>
                </div>
                
                <div className="plants-nav-title" onClick={() => navigate('/products')} style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}>
                  Plants
                </div>

                <div className="main-navigation">
                  <button className="cart-button" onClick={() => navigate('/cart')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                      <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22A2,2 0 0,1 15,20A2,2 0 0,1 17,18M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22A2,2 0 0,1 5,20A2,2 0 0,1 7,18M7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7A2,2 0 0,1 5,15C5,14.65 5.07,14.31 5.24,14L1.3,5H21L17.97,11.5C17.65,12.2 16.97,12.67 16.2,12.67H9.21L8.1,10.63L11,10.62L17.2,10.63L20,5.63L21,5.63M20,4H5.21L4.27,2H1V4H3L6.6,12.22L5.25,14.68C5.08,15 5,15.5 5,16A2,2 0 0,0 7,18H19V16H7.42A0.25,0.25 0 0,1 7.17,15.75L7.2,15.63" />
                    </svg>
                    <span className="cart-count">{totalCount}</span>
                  </button>
                </div>
              </div>
            </header>
            
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartItem />} />
            </Routes>
          </>
        } />
      </Routes>
    </div>
  );
}
