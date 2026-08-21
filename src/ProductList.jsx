import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import { plants, categories } from './data/plants';

export default function ProductList() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <main className="products-page">
      {categories.map((categoryName) => {
        const categoryPlants = plants.filter((p) => p.category === categoryName);
        return (
          <section key={categoryName} className="plant-category">
            <div className="category-heading" style={{ justifyContent: 'center' }}>
              <h3 style={{ textDecoration: 'underline', borderBottom: 'none' }}>{categoryName}</h3>
            </div>
            <div className="plants-grid">
              {categoryPlants.map((plant) => {
                const isInCart = cartItems.some((item) => item.id === plant.id);
                return (
                  <div key={plant.id} className="plant-card">
                    <span className="sale-badge">SALE</span>
                    <h4 className="plant-card-title">{plant.name}</h4>
                    <div className="plant-image-wrapper">
                      <img src={plant.image} alt={plant.name} className="plant-image" />
                    </div>
                    <div className="plant-price">${plant.price}</div>
                    <p className="plant-description">{plant.description}</p>
                    <button
                      className="add-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart}
                      style={{
                        backgroundColor: isInCart ? '#777777' : '#4caf50',
                        cursor: isInCart ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {isInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
