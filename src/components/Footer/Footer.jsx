import React from "react";
import { Link } from 'react-router-dom';

import "./Footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer">
        <div className="page-footer__container">
          <p className="page-footer__copyright">by <span>Anastasia Titova</span></p>
          <Link className="page-footer__tel" to="+79631968358">8 (963) 196 8358</Link>
          <p className="page-footer__email">Kutsanastasia@yandex.ru</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
