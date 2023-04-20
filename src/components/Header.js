import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <section id="header">
      <div>
          <a href="/"><img src="./images/logo-bg.png" alt="logo"/></a>
      </div>
      <div>
          <ul id="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
          </ul>
      </div>
        <div id="mobile">
            <i id="bar" class="fas fa-outdent"></i>
            <Link to="/cart">Cart</Link>
        </div>
    </section>
    </>
  )
}

export default Header