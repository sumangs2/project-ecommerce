import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div>
          <header>
            <Link to="/">Ecommerce</Link>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:slug" element={<ProductScreen />} exact />
            </Routes>
          </main>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
