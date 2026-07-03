import React from "react";
import { useState } from "react";
import axios from "axios";

import SearchBox from "./components/SearchBox";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  const [recommendedProducts, setRecommendedProducts] = useState(products);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/recommend", {
        query,
        products,
      });

      const recommendations = response.data.recommendations;

      const result = recommendations
        .map((item) => {
            const product = products.find((p) => p.id === item.id);

            if (!product) return null;

            return {
            ...product,
            reason: item.reason,
            };
        })
        .filter(Boolean);

      setRecommendedProducts(result);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch recommendations.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1> AI Product Recommendation System</h1>

      <SearchBox
        onSearch={handleSearch}
        loading={loading}
      />

      <br />

      {recommendedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          reason={product.reason}
        />
      ))}
    </div>
  );
}

export default App;