import React from "react";
import BenefitCardsEntry from "./BenefitCardsEntry";

export default function Benefit() {
  return (
    <div className="benefit__section">
      <div className="benefit__section__container">
        <div className="benefit__section__container__heading">Benefit</div>
        <div className="benefit__section__container__sub__heading">
          We Provide Architectural design
        </div>
        <div className="benefit__section__container__sub__text">
          ​More than 100 building and housing projects that we have built. The
          building owner chose us over other contractors in Jakarta, because our
          work is different.
        </div>
        <div className="benefit__section__container__cards">
          <BenefitCardsEntry />
          <BenefitCardsEntry />
          <BenefitCardsEntry />
          <BenefitCardsEntry />
          <BenefitCardsEntry />
        </div>
      </div>
    </div>
  );
}
