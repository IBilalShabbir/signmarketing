import React from "react";

export default function RegionCard({ img, city }) {
  return (
    <div className="region__sec__content__container__card">
      <div className="region__sec__content__container__card__content">
        {img}
      </div>
      <div className="region__sec__content__container__card__content__text">
        {city}
      </div>
    </div>
  );
}
