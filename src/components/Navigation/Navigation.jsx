import React from "react";
import { Link } from 'react-router-dom';

import "./Navigation.scss";

const Navigation = () => {
  return (
    <ul className="page-header__navigation navigation">
      <li className="navigation__item">
        <Link className="navigation__link navigation__link--active">home</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link">about</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link">skills</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link">resumes</Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link">contact</Link>
      </li>
    </ul>
  );
};

export default Navigation;
