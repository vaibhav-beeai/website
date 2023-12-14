// src/components/Products.js
import React from "react";
import "./Products.css"; // You can create a CSS file for styling

const Products = () => {
  // Sample product data
  const leftProducts = [
    { id: 1, name: "Left Product 1", description: "Description 1", price: "$19.99" },
    { id: 2, name: "Left Product 2", description: "Description 2", price: "$29.99" },
    // Add more left products as needed
  ];

  const rightProducts = [
    { id: 3, name: "Right Product 1", description: "Description 1", price: "$39.99" },
    { id: 4, name: "Right Product 2", description: "Description 2", price: "$49.99" },
    // Add more right products as needed
  ];

  return (
    <div className="products-page">
      <h1>Product Details</h1>
      <div className="dropdown-container">
        <div className="half">
          <h2>Left Heading</h2>
          <ul>
            {leftProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
        </div>
        <div className="half">
          <h2>Right Heading</h2>
          <ul>
            {rightProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
