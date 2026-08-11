import { useState } from "react";
import "./App.css";
import hero from "./assets/hero.png";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <div>

      {/* Navbar */}
      <nav>
        <h2>ShopEasy</h2>

        <div className="links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button>Login</button>
        </div>
      </nav>


      {/* Hero */}
      <section className="hero">

        <div className="hero-text">
          <h1>Find products you love</h1>

          <p>
            Discover useful products at amazing prices!
          </p>

          <button>Shop Now</button>
        </div>

        <div className="hero-image">
          <img src={hero} alt="ShopEasy" />
        </div>

      </section>


      {/* Products */}
      <section className="products">

        <h2>Featured Products</h2>

        <div className="cards">

          {/* Product 1 */}
          <div className="card">
            <small>Electronics</small>
            <h3>Product 1</h3>
            <p>$150</p>

            <button onClick={() => setCart(cart + 1)}>
              Buy Now
            </button>
          </div>


          {/* Product 2 */}
          <div className="card">
            <small>Home</small>
            <h3>Product 2</h3>
            <p>$250</p>

            <button onClick={() => setCart(cart + 1)}>
              Buy Now
            </button>
          </div>


          {/* Product 3 */}
          <div className="card">
            <small>Garden</small>
            <h3>Product 3</h3>
            <p>$180</p>

            <button onClick={() => setCart(cart + 1)}>
              Buy Now
            </button>
          </div>


          {/* Product 4 */}
          <div className="card">
            <small>Fashion</small>
            <h3>Product 4</h3>
            <p>$300</p>

            <button onClick={() => setCart(cart + 1)}>
              Buy Now
            </button>
          </div>

        </div>

        <h3 className="cart">
          Cart: {cart}
        </h3>

      </section>

    </div>
  );
}

export default App;