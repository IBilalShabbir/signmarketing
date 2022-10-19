import React from "react";

export default function Aboutcard({ heading, subheading, text, active }) {
  return (
    <div
      className={
        active
          ? "about__us__container__overlay__right__card about__us__container__overlay__right__card__active"
          : "about__us__container__overlay__right__card"
      }
    >
      <div className="about__us__overlay__right__card__heading">{heading}</div>
      <div className="about__us__overlay__right__card__subheading">
        {subheading}
      </div>
      <div className="about__us__overlay__right__card__text">{text} </div>
    </div>
  );
}
