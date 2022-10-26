import React, { useEffect, useState } from "react";
import { aboutbg } from "../assets";
import Aboutcard from "./Aboutcard";

export default function About() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % 3);
    }, 2000);
  }, [index]);

  return (
    <>
      <section className="about__us__section" id="about__section">
        <div className="about__us__section__container">
          <img src={aboutbg} alt="" />
          <div className="about__us__container__overlay">
            <div className="about__us__container__overlay__left">
              <div className="about__us__overlay__left__heading">About Us</div>
              <div className="about__us__overlay__left__text">
                Dream Home is a gated community with a great location. Located
                downtown, you’re within walking distance of Parks, and the best
                shopping, dining and entertainment Getting around is a breeze,
                with easy access to freeways, buses and trolleys. . Laundry is
                available on premises.Dream Home is a gated community with a
                great location. Located downtown, you’re within walking distance
                of Parks, and the best shopping, dining and entertainment
                Getting around is a breeze, with easy access to freeways, buses
                and trolleys. Laundry is available on premises.
              </div>
              <div className="about__us__overlay__left__buttons">
                <button className="about__us__overlay__left__buttons__contact">
                  Contact Us
                </button>
                <button className="about__us__overlay__left__buttons__see__more">
                  See More
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5435 2.259L11.5435 2.25904L14.6529 5.36741L1.59008 5.36741C1.33968 5.36741 1.09954 5.46688 0.92248 5.64394C0.74542 5.821 0.645949 6.06114 0.645949 6.31154C0.645949 6.56194 0.745421 6.80209 0.92248 6.97915C1.09954 7.15621 1.33968 7.25568 1.59008 7.25568L14.6529 7.25568L11.5435 10.364L11.5435 10.3641C11.3663 10.5413 11.2667 10.7816 11.2667 11.0322C11.2667 11.2828 11.3663 11.5231 11.5435 11.7003C11.7207 11.8775 11.961 11.9771 12.2116 11.9771C12.4622 11.9771 12.7025 11.8775 12.8797 11.7003L17.6001 6.97999C17.6002 6.97992 17.6002 6.97985 17.6003 6.97977C17.6881 6.89212 17.7578 6.78801 17.8054 6.6734C17.853 6.5587 17.8775 6.43573 17.8775 6.31154C17.8775 6.18736 17.853 6.06439 17.8054 5.94969C17.7578 5.83508 17.6881 5.73097 17.6003 5.64331C17.6002 5.64324 17.6002 5.64317 17.6001 5.6431L12.8797 0.922738C12.7025 0.745538 12.4622 0.645989 12.2116 0.645989C11.961 0.645989 11.7207 0.745538 11.5435 0.922738C11.3663 1.09994 11.2667 1.34027 11.2667 1.59087C11.2667 1.84147 11.3663 2.0818 11.5435 2.259Z"
                      fill="currentColor"
                      stroke-width="0.708101"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="about__us__container__overlay__right">
              <Aboutcard
                active={index === 0}
                heading="500+"
                subheading="Projects"
                text="Over 500 lexury villas for“Home Away From Home” experience"
              />
              <Aboutcard
                active={index === 1}
                heading="40+"
                subheading="Locations"
                text="luxury villas and private holiday homes, from all across"
              />
              <Aboutcard
                active={index === 2}
                heading="24/7"
                subheading="Projects"
                text="24/7 Help service for all customers to guide and support"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
