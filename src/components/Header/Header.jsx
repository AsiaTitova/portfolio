import React from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import "./Header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <header className="page-header">
        <Logo/>
        <Navigation/>
      </header>
    </React.Fragment>
  );
};

export default Header;
