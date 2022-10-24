import React from "react";
import { mos1, mos2, mos3, mos4, mos5, mos6 } from "../assets";

import RegionCard from "./RegionCard";

export default function RegionSec() {
  return (
    <div className="region__sec">
      <div className="region__sec__con">
        <div className="design__and__construction__section__container">
          <div
            className="design__and__construction__section___heading"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            Region
          </div>
          <div className="design__and__construction__section___text__container">
            <div
              className="design__and__construction__section__container__heading__left"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              We Provide Architectural design and Construction
            </div>
            <div
              className="design__and__construction__section__container__heading__right"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different.
            </div>
          </div>
          <div className="region__sec">
            <div
              className="region__sec__content"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <RegionCard
                img={<img src={mos1} alt="mos1" />}
                city="Islamabad"
              />
              <RegionCard
                img={<img src={mos2} alt="mos1" />}
                city="Southern punjab"
              />
              <RegionCard img={<img src={mos3} alt="mos1" />} city="Sindh" />
              <RegionCard img={<img src={mos4} alt="mos1" />} city="Kp" />
              <RegionCard
                img={<img src={mos5} alt="mos1" />}
                city="Central Punjab"
              />
              <RegionCard
                img={<img src={mos6} alt="mos1" />}
                city="Balochistan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
