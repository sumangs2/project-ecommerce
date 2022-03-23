import React from "react";
import data from "../data.js";
import Product from "../components/product.js";
export default function HomeScreen() {
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
        //product={product} is needed to access product.js component
      ))}
    </div>
  );
}
