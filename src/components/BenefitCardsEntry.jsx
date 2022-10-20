import React from "react";

export default function BenefitCardsEntry({ svg, heading, text }) {
  return (
    <div className="benefit__section__container__cards__entry">
      <div className="benefit__section__container__cards__entry__svg">
        {svg}
      </div>
      <div className="benefit__section__container__cards__entry__data">
        <div className="benefit__section__container__cards__entry__data__heading">
          {heading}
        </div>
        <div className="benefit__section__container__cards__entry__data__text">
          {text}
        </div>
      </div>
    </div>
  );
}
