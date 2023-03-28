import React from "react";
import headerLogo from "../../images/header-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-s">
          <img src={headerLogo} alt="kaplan" />
        </div>
      </header>
    </div>
  );
};

export default Header;