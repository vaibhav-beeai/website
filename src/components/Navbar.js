
/////////////////////////

// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Update from "./Update";
import ImageSlider from './ImageSlider'; // Adjust the path based on your project structure

const pages = [
  // { path: "/products", text: "Products", details: "Explore our product offerings.", id: "product-link" },
  { path: "/about", text: "About", details: "Learn more about our company.", id: "about-link" },
  { path: "/contact", text: "Contact Us", details: "Get in touch with us.", id: "contact-link" }
];

const Navbar = () => {
  const [showImages, setShowImages] = useState(true);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const handleNavbarClick = () => {
    setShowImages(false);
    // Close the products dropdown when a navbar link is clicked
    setShowProductsDropdown(false);
  };

  const handleProductsMouseEnter = () => {
    // Show the products dropdown on mouse enter
    setShowProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    // Hide the products dropdown on mouse leave
    setShowProductsDropdown(false);
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: 'white' }}>
        <div className="logo">
          <Link to="/" onClick={() => setShowImages(true)}>
            <img src="./images/company-logo.png" alt="Company Logo" />
          </Link>
        </div>
        <div className="nav-links">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="nav-link"
              data-text={page.text}
              data-details={page.details}
              id={page.id}
              onClick={handleNavbarClick}
            >
              {page.text}
            </Link>
          ))}
          {/* Products link with complex dropdown */}
          <div
            className="nav-link products-dropdown-container"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            Products
            {showProductsDropdown && (
              <div className="products-dropdown link-list">
                <div className="dropdown-section">
                  <h3>Section 1</h3>
                  <ul>
                    <li><Link to="/product1">Product 1</Link></li>
                    <li><Link to="/product2">Product 2</Link></li>
                    {/* Add more products as needed */}
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Section 2</h3>
                  <ul>
                    <li><Link to="/product3">Product 3</Link></li>
                    <li><Link to="/product4">Product 4</Link></li>
                    {/* Add more products as needed */}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="background">
        <div className="image-container">
          <Link to="/Updates" className="update-button">
            <button>What's New</button>
          </Link>
          {showImages && (
            <div>
              <img src="/images/1.jpg" alt="Image Below Navbar" className="img-below-navbar" />
              <div className="image-row">
                <Link to="/ipage1" className="image-with-text">
                  <img src="./images/3.jpg" alt="Image 1" className="smallimage1" />
                  <div className="image-text">Monitor Like A Pro</div>
                </Link>
                <Link to="/ipage2" className="image-with-text">
                  <img src="./images/4.jpg" alt="Image 2" className="largeimage1" />
                  <div className="image-text-2">Unlock Flowmeter Insights</div>
                </Link>
              </div>
              <div className="image-row">
                <Link to="/ipage3" className="image-with-text">
                  <img src="./images/5.png" alt="Image 1" className="largeimage2" />
                  <div className="image-text-3">Breathe Easy: Elevate Air Quality Management Here</div>
                </Link>
                <Link to="/ipage4" className="image-with-text">
                  <img src="./images/6.jpg" alt="Image 2" className="smallimage2" />
                  <div className="image-text-4">Dig Deep: Unearth Soil Quality</div>
                </Link>
              </div>
            </div>
          )}
          <div className="overlay-text">
            <h1>Welcome to BEEAI</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//////////////


