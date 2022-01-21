import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
function Header() {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review Order</a>
        <a href="/manage">Manage</a>
      </nav>
    </div>
  );
}

export default Header;
