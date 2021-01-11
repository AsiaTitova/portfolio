import React from "react";

import Socials from "../Soсials/Socials";
import {Name, Phone, Calendar, Email} from "../../assets/Sprite";

import "./About.scss";

const About = () => {
  return (
    <React.Fragment>
      <section className="page-main__about about">
        <div className="about__container">
          <h2 className="about__title">About me</h2>
          <div className="about__wrap">
            <div className="about__photo">
              <img className="about__img" src="/img/photo.jpg" width="250" height="auto"></img>
              <p className="about__post">frontend developer</p>
            </div>
            <div className="about__info">
              <ul className="about__list">
                <li className="about__item">
                  <div className="about__svg">
                    <Name/>
                  </div>
                  <div className="about__wrapper">
                    <h3 className="about__subtitle">Name</h3>
                    <p className="about__content">Anastasia Titova</p>
                  </div>
                </li>
                <li className="about__item">
                  <div className="about__svg">
                    <Email/>
                  </div>
                  <div className="about__wrapper">
                    <h3 className="about__subtitle">Email</h3>
                    <p className="about__content">Kutsanastasia@yandex.ru</p>
                  </div>
                </li>
                <li className="about__item">
                  <div className="about__svg">
                    <Phone/>
                  </div>
                  <div className="about__wrapper">
                    <h3 className="about__subtitle">Phone</h3>
                    <p className="about__content">8 (963) 196 8358</p>
                  </div>
                </li>
                <li className="about__item">
                  <div className="about__svg">
                    <Calendar/>
                  </div>
                  <div className="about__wrapper">
                    <h3 className="about__subtitle">Date of Birthday</h3>
                    <p className="about__content">31/07/1994</p>
                  </div>
                </li>
              </ul>
              <Socials/>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
