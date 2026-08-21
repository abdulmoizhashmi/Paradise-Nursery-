import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { useNavigate } from 'react-router-dom';

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="cart-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Total Cart Amount: ${totalAmount}</h2>
      <div className="cart-items" style={{ width: '100%', maxWidth: '600px', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777', padding: '20px 0' }}>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item-row" style={{ display: 'flex', gap: '20px', padding: '15px 0', borderBottom: '1px solid #eee' }}>
              <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '6px' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{item.name}</h3>
                  <div style={{ color: '#444', fontWeight: 'bold' }}>${item.price}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))} 
                    style={{ width: '30px', height: '30px', border: '1px solid #ccc', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))} 
                    style={{ width: '30px', height: '30px', border: '1px solid #ccc', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', margin: '8px 0' }}>Total: ${item.price * item.quantity}</div>
                  <button 
                    onClick={() => dispatch(removeItem(item.id))} 
                    style={{ background: '#f44336', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' }}>
        <button 
          className="checkout-button" 
          onClick={() => navigate('/products')}
          style={{ background: '#4caf50', color: 'white', border: 'none', padding: '14px', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Continue Shopping
        </button>
        <button 
          className="checkout-button" 
          onClick={() => alert('Coming Soon!')}
          style={{ background: '#4caf50', color: 'white', border: 'none', padding: '14px', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Checkout
        </button>
      </div>
    </main>
  );
}
