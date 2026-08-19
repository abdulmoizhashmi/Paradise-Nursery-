import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

function LandingPage() {
  return (
    <main className="landing-page">

      <div className="landing-overlay"></div>

      <section className="landing-content">

        <div className="landing-logo">
          <Leaf size={48} />
        </div>

        <p className="eyebrow">
          WELCOME TO PARADISE
        </p>

        <h1>
          Paradise
          <span>Nursery</span>
        </h1>

        <div className="landing-divider"></div>

        <p className="landing-description">
          Bring the beauty of nature into your home.
          Discover carefully selected houseplants that
          brighten your space, purify your air, and bring
          a little more serenity to everyday life.
        </p>

        <Link
          to="/products"
          className="get-started-button"
        >
          Get Started
          <ArrowRight size={20} />
        </Link>

      </section>

      <div className="landing-decoration decoration-one"></div>
      <div className="landing-decoration decoration-two"></div>

    </main>
  );
}

export default LandingPage;