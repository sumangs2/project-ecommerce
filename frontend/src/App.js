import React from "react";
import data from "./data.js";
import Product from "./components/product.js";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Ecommerce
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product} />
          //product={product} = props
        ))}
      </main>
      <footer className="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
