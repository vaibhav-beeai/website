import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="top-left">
            <h1>Welcome to BEEAI</h1>
          </div>
          <div className="bottom-left">
            <Link to="/Updates">
              <button>What's New</button>
            </Link>
          </div>
          <img src="/images/1.jpg" alt="Image Below Navbar" />
        </div>
      </div>

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
          <div className="image-text-3">
            Breathe Easy: Elevate Air Quality Management Here
          </div>
        </Link>
        <Link to="/ipage4" className="image-with-text">
          <img src="./images/6.jpg" alt="Image 2" className="smallimage2" />
          <div className="image-text-4">Dig Deep: Unearth Soil Quality</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
