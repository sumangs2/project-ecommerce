import React, { useEffect, useState } from "react";
import axios from "axios";
//removed import data from data.js since we now use fetchData
//to get it on the backend server
import Product from "../components/product.js";
import LoadingBox from "../components/loadingbox.js";
import MessageBox from "../components/messagebox.js";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
            //product={product} is needed to access product.js component
          ))}
        </div>
      )}
    </div>
  );
}
