import { useCart } from "../context/CartContext";

function PlantCard({ plant }) {
  const { addToCart, cart } = useCart();

  const cartItem = cart.find(
    (item) => item.id === plant.id
  );

  return (
    <article className="plant-card">

      <div className="sale-badge">
        SALE
      </div>

      <div className="plant-card-title">
        {plant.name}
      </div>

      <div className="plant-image-wrapper">
        <img
          src={plant.image}
          alt={plant.name}
          className="plant-image"
        />
      </div>

      <div className="plant-price">
        ${plant.price}
      </div>

      <p className="plant-description">
        {plant.description}
      </p>

      <button
        className="add-button"
        onClick={() => addToCart(plant)}
      >
        Add to Cart
      </button>

      {cartItem && (
        <span className="added-message">
          {cartItem.quantity} in cart
        </span>
      )}

    </article>
  );
}

export default PlantCard;