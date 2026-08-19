import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag
} from "lucide-react";

import Header from "../components/Header";
import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalCost
  } = useCart();

  return (
    <div className="app-page">

      <Header />

      <main className="cart-page">

        <div className="cart-heading">

          <p className="section-eyebrow">
            YOUR SELECTION
          </p>

          <h2>
            Shopping Cart
          </h2>

          <p>
            Review your plants before checkout.
          </p>

        </div>

        {cart.length === 0 ? (

          <section className="empty-cart">

            <div className="empty-cart-icon">
              <ShoppingBag size={55} />
            </div>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Looks like you haven't added any
              beautiful plants yet.
            </p>

            <Link
              to="/products"
              className="continue-button"
            >
              Browse Plants
            </Link>

          </section>

        ) : (

          <div className="cart-layout">

            <section className="cart-items">

              {cart.map((item) => {

                const itemTotal =
                  item.price * item.quantity;

                return (
                  <article
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-details">

                      <span className="cart-category">
                        {item.category}
                      </span>

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ${item.price} each
                      </p>

                    </div>

                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        aria-label={`Decrease ${item.name}`}
                      >
                        <Minus size={17} />
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        aria-label={`Increase ${item.name}`}
                      >
                        <Plus size={17} />
                      </button>

                    </div>

                    <div className="cart-item-total">
                      ${itemTotal.toFixed(2)}
                    </div>

                    <button
                      className="delete-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      aria-label={`Delete ${item.name}`}
                    >
                      <Trash2 size={19} />
                    </button>

                  </article>
                );
              })}

            </section>

            <aside className="cart-summary">

              <h3>
                Order Summary
              </h3>

              <div className="summary-row">
                <span>
                  Plants
                </span>

                <span>
                  {totalItems}
                </span>
              </div>

              <div className="summary-row">
                <span>
                  Subtotal
                </span>

                <span>
                  ${totalCost.toFixed(2)}
                </span>
              </div>

              <div className="summary-row">
                <span>
                  Delivery
                </span>

                <span className="free">
                  FREE
                </span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>
                  Total
                </span>

                <strong>
                  ${totalCost.toFixed(2)}
                </strong>
              </div>

              <button
                className="checkout-button"
                onClick={() =>
                  alert(
                    "Thank you for shopping with Paradise Nursery!"
                  )
                }
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="continue-shopping"
              >
                <ArrowLeft size={17} />
                Continue Shopping
              </Link>

            </aside>

          </div>
        )}

      </main>

    </div>
  );
}

export default CartPage;