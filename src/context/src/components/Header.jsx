import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Leaf
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();
  const location = useLocation();

  const isProductsPage =
    location.pathname === "/products";

  const isCartPage =
    location.pathname === "/cart";

  return (
    <header className="site-header">
      <div className="header-inner">

        <Link to="/" className="brand">
          <div className="brand-icon">
            <Leaf size={25} />
          </div>

          <div className="brand-text">
            <h1>Paradise Nursery</h1>
            <span>Where Green Meets Serenity</span>
          </div>
        </Link>

        <nav className="main-navigation">

          {!isProductsPage && (
            <Link to="/products">
              Plants
            </Link>
          )}

          {!isCartPage && (
            <Link to="/cart">
              Cart
            </Link>
          )}

          <Link
            to="/cart"
            className="cart-button"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={28} />

            <span className="cart-count">
              {totalItems}
            </span>
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Header;