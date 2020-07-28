import React from "react";
import { Link } from "react-router-dom";

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">Logo</Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/shop">CONTACT</Link>
        <Link className="option" to="/signin">SIGN IN</Link>
      </div>
    </div>
  );
};

export default Header;
