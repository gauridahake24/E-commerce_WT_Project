import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section-p1">
          <div className="col">
              <img className="logo" src="./images/logo-bg.png" alt='logo' />
              <h4>Contact:</h4>
              <p><strong> Address: </strong>Gananjay Society Kothrud Pune 411038</p>
              <p><strong> Phone: </strong> (+91) 12345 67890</p>
              <p><strong> Working Hours: </strong>9:00AM to 10PM</p>
              <div class="follow">
                  <h4>Follow Us:</h4>
                  <div class="icon">
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-instagram"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-youtube"></i>
                  </div>
                  <h4>Author: Gauri Dahake</h4>
              </div>
          </div>
          <div class="col">
              <h4> About</h4>
                <Link to="/">Delivery Information</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Contact Us</Link>
          </div>
          <div class="col">
              <Link to="/">Sign In</Link>
                <Link to="/">View Cart</Link>
                <Link to="/">My Wishlist</Link>
                <Link to="/">Track My Order</Link>
                <Link to="/">Help</Link>
          </div>
      </footer>
    </>
  )
}

export default Footer