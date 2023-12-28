/////////////////////////

// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Update from "./Update";
import ImageSlider from "./ImageSlider"; // Adjust the path based on your project structure
import NavDrop from "./NavDrop";
import Home from "./Home";
import NavDropProduct from "./NavDropProduct"
// import DomainsInsight from "./DomainsInsight";

// const pages = [
//   { path: "/products", text: "Products", details: "Explore our product offerings.", id: "product-link" },
//   { path: "/about", text: "About", details: "Learn more about our company.", id: "about-link" },
//   { path: "/contact", text: "Contact Us", details: "Get in touch with us.", id: "contact-link" }
// ];
const productsData = [
  { heading: "server 1", products: ["product 1", "product 2","product 3", "product 4", "product 3", "product 4"] },
  // { heading: "server 2", products: ["product 3", "product 4", "product 3", "product 4"] },


  
];
const DomainData = [
  { heading: "Industries", products: ["Artificial Intelligence", "Water", "Air", "Medical", "Industrial", "Photonics"],title:"Industries" },
  { heading: "Learn & Explore", products: ["BeeAI Blogs", "InnoInsights Blog"] },
];
const ServiceData = [
  { heading: "Capabilities", products: ["Education Services", "Software Development Services", "Hardware R&D", "Consultancy Corner", "CloudCommand Center"],title:"BeeAI Services" },
  // { heading: "server 6", products: ["product 11", "product 12"] },
];
const SupportData = [
  { heading: "Security & Support", products: ["IoT Security", "HardwareFortify", "CloudShield Center"] },
  // { heading: "server 8", products: ["product 15", "product 16"] },
];


const Navbar = () => {
  const [showImages, setShowImages] = useState(true);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showDomainDropdown, setShowDomainDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const handleNavbarClick = () => {
    setShowImages(false);
    // Close the products dropdown when a navbar link is clicked
    setShowProductsDropdown(false);
    setShowDomainDropdown(false);
    setShowServiceDropdown(false);
    setShowSupportDropdown(false);
  };

  const handleProductsMouseEnter = () => {
    // Show the products dropdown on mouse enter
    setShowProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    // Hide the products dropdown on mouse leave
    setShowProductsDropdown(false);
  };

  //////

  const handleDomainMouseEnter = () => {
    // Show the products dropdown on mouse enter
    setShowDomainDropdown(true);
  };

  const handleDomainMouseLeave = () => {
    // Hide the products dropdown on mouse leave
    setShowDomainDropdown(false);
  };
  //////

  const handleServiceMouseEnter = () => {
    // Show the products dropdown on mouse enter
    setShowServiceDropdown(true);
  };

  const handleServiceMouseLeave = () => {
    // Hide the products dropdown on mouse leave
    setShowServiceDropdown(false);
  };
  //////

  const handleSupportMouseEnter = () => {
    // Show the products dropdown on mouse enter
    setShowSupportDropdown(true);
  };

  const handleSupportMouseLeave = () => {
    // Hide the products dropdown on mouse leave
    setShowSupportDropdown(false);
  };

  const splitData=(data)=>{
    let result = [];
    let temp = [];
    for(let i=0;i<data.length+1;i++){
      if(temp.length==3){
        result.push(temp);
        temp = [data[i]];
      }else {
        temp.push(data[i])
      }
    };
}
  //////

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "white" }}>
        <div className="logo"></div>
        <div className="logo">
          <Link to="/" onClick={() => setShowImages(true)}>
            <img src="./images/company-logo.png" alt="Company Logo" />
          </Link>
        </div>
        <div className="nav-links">
          {/* Products link with complex dropdown */}
          <div
            className="nav-link products-dropdown-container"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <div>
              Products
              {showProductsDropdown && <NavDropProduct data={productsData} />}
            </div>
          </div>
          <div
            className="nav-link domain-dropdown-container"
            onMouseEnter={handleDomainMouseEnter}
            onMouseLeave={handleDomainMouseLeave}
          >
            <div>
              Domain&Insights
              {showDomainDropdown && <NavDrop data={DomainData} />}
            </div>
          </div>
          <div
              className="nav-link domain-dropdown-container"
              onMouseEnter={handleServiceMouseEnter}
              onMouseLeave={handleServiceMouseLeave}
            >
              <div>
                Service
                {showServiceDropdown && <NavDrop data={ServiceData} />}
              </div>
            </div>
            <div
            className="nav-link domain-dropdown-container"
            onMouseEnter={handleSupportMouseEnter}
            onMouseLeave={handleSupportMouseLeave}
          >
            <div>
            Tech Sentry & Support Hub
              {showSupportDropdown && <NavDrop data={SupportData} />}
            </div>
          </div>
        </div>
      </nav>
      <div className="background">
        <div className="image-container">
          
          {showImages && <Home />}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//////////////
