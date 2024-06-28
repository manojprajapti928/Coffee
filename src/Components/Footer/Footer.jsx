import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a coffee shop committed to providing the best coffee experience. Our mission is to serve high-quality coffee and create a cozy atmosphere for our customers.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <strong>Address:</strong> 123 Coffee St, Coffee City, Indore 12345<br />
            <strong>Phone:</strong> (+91) 9752329928<br />
            <strong>Email:</strong> info@coffee.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Coffee | All Rights Reserved
      </div>
    </footer>
  );
}
