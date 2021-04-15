import React from "react";

function Header() {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div>
        <div className="search">
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-basket"></i>
        </div>
      </div>
    </nav>
  );
}

export default Header;
