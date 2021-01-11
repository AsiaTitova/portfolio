import React from "react";

import {Skype, VK, Github, Telegram} from "../../assets/Sprite";

import "./Socials.scss";

const Socials = () => {
  return (
    <React.Fragment>
      <h3 className="socials__title">Social Profiles</h3>
      <ul className="socials__list">
        <li className="socials__item">
          <Telegram/>
        </li>
        <li className="socials__item">
          <Skype/>
        </li>
        <li className="socials__item">
          <VK/>
        </li>
        <li className="socials__item">
          <Github/>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Socials;
