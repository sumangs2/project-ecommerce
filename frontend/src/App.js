import React from "react";
import HomeScreen from "./screens/homescreen.js";
import ProductScreen from "./screens/productscreen.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
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
        <main>
          <Routes>
            <Route path="/product/:id" exact element={<ProductScreen />} />
            <Route path="/" exact element={<HomeScreen />} />
          </Routes>
        </main>
        <footer className="row center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
