import React from "react";

export default function MapSecEntry({ svg, heading, text }) {
  return (
    <div className="cities__sec__container__entry">
      {svg}
      <div
        className="cities__sec__container__entry__data
          "
      >
        <div className="cities__sec__container__entry__data__heading">
          {heading}
        </div>
        <div className="cities__sec__container__entry__data__text">{text}</div>
      </div>
    </div>
  );
}
