import React from "react";
import { Fade } from "react-reveal";
import BenefitCardsEntry from "./BenefitCardsEntry";

export default function Benefit() {
  return (
    <section className="benefit__section" id="products__section">
      <div className="benefit__section__bg">
        <div className="benefit__section__container">
          <Fade right distance="200px" duration="1500">
            <div
              className="benefit__section__container__heading"
              data-aos-easing="ease-in-out"
            >
              Benefit
            </div>
          </Fade>
          <Fade left distance="200px" duration="1500">
            <div
              className="benefit__section__container__sub__heading"
              data-aos-easing="ease-in-out"
            >
              We Provide Architectural design
            </div>
          </Fade>
          <Fade right distance="200px" duration="1500">
            <div
              className="benefit__section__container__sub__text"
              data-aos-easing="ease-in-out"
            >
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different.
            </div>
          </Fade>
          <Fade bottom distance="200px" duration="1500">
            <div
              className="benefit__section__container__cards"
              data-aos-easing="ease-in-out"
            >
              <BenefitCardsEntry
                svg={
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7008 5.16258H18.4056V4.06507C18.4056 3.16711 18.094 2.41049 17.4707 1.79522C16.8475 1.17995 16.0811 0.872314 15.1715 0.872314H10.8258C9.91622 0.872314 9.14982 1.17995 8.5266 1.79522C7.90337 2.41049 7.59176 3.16711 7.59176 4.06507V5.16258H3.29654C2.38697 5.16258 1.62057 5.4619 0.99734 6.06054C0.374114 6.65919 0.0625 7.42412 0.0625 8.35534V12.5957C0.0625 13.2941 0.416223 13.6433 1.12367 13.6433V22.174C1.12367 22.7394 1.34264 23.2382 1.78059 23.6706C2.21853 24.1029 2.72385 24.3191 3.29654 24.3191H22.7008C23.2735 24.3191 23.7788 24.1029 24.2168 23.6706C24.6547 23.2382 24.8737 22.7394 24.8737 22.174V13.6433C25.5811 13.6433 25.9348 13.2941 25.9348 12.5957V8.35534C25.9348 7.42412 25.6232 6.65919 25 6.06054C24.3768 5.4619 23.6104 5.16258 22.7008 5.16258ZM9.76463 4.06507C9.76463 3.76575 9.86569 3.51632 10.0678 3.31677C10.2699 3.11722 10.5226 3.01745 10.8258 3.01745H15.1715C15.4747 3.01745 15.7274 3.11722 15.9295 3.31677C16.1316 3.51632 16.2327 3.76575 16.2327 4.06507V5.16258H9.76463V4.06507ZM3.29654 22.174V13.6433H9.76463V16.8361C9.76463 17.4347 9.97518 17.9419 10.3963 18.3576C10.8174 18.7734 11.3311 18.9812 11.9375 18.9812H14.0598C14.6662 18.9812 15.18 18.7734 15.6011 18.3576C16.0222 17.9419 16.2327 17.4347 16.2327 16.8361V13.6433H22.7008V22.174H3.29654ZM11.9375 16.8361V13.6433H14.0598V16.8361H11.9375ZM23.762 11.5481H2.23537V8.35534C2.23537 7.62366 2.5891 7.25783 3.29654 7.25783H22.7008C23.4082 7.25783 23.762 7.62366 23.762 8.35534V11.5481Z"
                      fill="white"
                    />
                  </svg>
                }
                heading="Experienced"
                text="​More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because our
            work is different."
              />
              <BenefitCardsEntry
                svg={
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7008 5.16258H18.4056V4.06507C18.4056 3.16711 18.094 2.41049 17.4707 1.79522C16.8475 1.17995 16.0811 0.872314 15.1715 0.872314H10.8258C9.91622 0.872314 9.14982 1.17995 8.5266 1.79522C7.90337 2.41049 7.59176 3.16711 7.59176 4.06507V5.16258H3.29654C2.38697 5.16258 1.62057 5.4619 0.99734 6.06054C0.374114 6.65919 0.0625 7.42412 0.0625 8.35534V12.5957C0.0625 13.2941 0.416223 13.6433 1.12367 13.6433V22.174C1.12367 22.7394 1.34264 23.2382 1.78059 23.6706C2.21853 24.1029 2.72385 24.3191 3.29654 24.3191H22.7008C23.2735 24.3191 23.7788 24.1029 24.2168 23.6706C24.6547 23.2382 24.8737 22.7394 24.8737 22.174V13.6433C25.5811 13.6433 25.9348 13.2941 25.9348 12.5957V8.35534C25.9348 7.42412 25.6232 6.65919 25 6.06054C24.3768 5.4619 23.6104 5.16258 22.7008 5.16258ZM9.76463 4.06507C9.76463 3.76575 9.86569 3.51632 10.0678 3.31677C10.2699 3.11722 10.5226 3.01745 10.8258 3.01745H15.1715C15.4747 3.01745 15.7274 3.11722 15.9295 3.31677C16.1316 3.51632 16.2327 3.76575 16.2327 4.06507V5.16258H9.76463V4.06507ZM3.29654 22.174V13.6433H9.76463V16.8361C9.76463 17.4347 9.97518 17.9419 10.3963 18.3576C10.8174 18.7734 11.3311 18.9812 11.9375 18.9812H14.0598C14.6662 18.9812 15.18 18.7734 15.6011 18.3576C16.0222 17.9419 16.2327 17.4347 16.2327 16.8361V13.6433H22.7008V22.174H3.29654ZM11.9375 16.8361V13.6433H14.0598V16.8361H11.9375ZM23.762 11.5481H2.23537V8.35534C2.23537 7.62366 2.5891 7.25783 3.29654 7.25783H22.7008C23.4082 7.25783 23.762 7.62366 23.762 8.35534V11.5481Z"
                      fill="white"
                    />
                  </svg>
                }
                heading="Experienced"
                text="​More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because our
            work is different."
              />
              <BenefitCardsEntry
                svg={
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7008 5.16258H18.4056V4.06507C18.4056 3.16711 18.094 2.41049 17.4707 1.79522C16.8475 1.17995 16.0811 0.872314 15.1715 0.872314H10.8258C9.91622 0.872314 9.14982 1.17995 8.5266 1.79522C7.90337 2.41049 7.59176 3.16711 7.59176 4.06507V5.16258H3.29654C2.38697 5.16258 1.62057 5.4619 0.99734 6.06054C0.374114 6.65919 0.0625 7.42412 0.0625 8.35534V12.5957C0.0625 13.2941 0.416223 13.6433 1.12367 13.6433V22.174C1.12367 22.7394 1.34264 23.2382 1.78059 23.6706C2.21853 24.1029 2.72385 24.3191 3.29654 24.3191H22.7008C23.2735 24.3191 23.7788 24.1029 24.2168 23.6706C24.6547 23.2382 24.8737 22.7394 24.8737 22.174V13.6433C25.5811 13.6433 25.9348 13.2941 25.9348 12.5957V8.35534C25.9348 7.42412 25.6232 6.65919 25 6.06054C24.3768 5.4619 23.6104 5.16258 22.7008 5.16258ZM9.76463 4.06507C9.76463 3.76575 9.86569 3.51632 10.0678 3.31677C10.2699 3.11722 10.5226 3.01745 10.8258 3.01745H15.1715C15.4747 3.01745 15.7274 3.11722 15.9295 3.31677C16.1316 3.51632 16.2327 3.76575 16.2327 4.06507V5.16258H9.76463V4.06507ZM3.29654 22.174V13.6433H9.76463V16.8361C9.76463 17.4347 9.97518 17.9419 10.3963 18.3576C10.8174 18.7734 11.3311 18.9812 11.9375 18.9812H14.0598C14.6662 18.9812 15.18 18.7734 15.6011 18.3576C16.0222 17.9419 16.2327 17.4347 16.2327 16.8361V13.6433H22.7008V22.174H3.29654ZM11.9375 16.8361V13.6433H14.0598V16.8361H11.9375ZM23.762 11.5481H2.23537V8.35534C2.23537 7.62366 2.5891 7.25783 3.29654 7.25783H22.7008C23.4082 7.25783 23.762 7.62366 23.762 8.35534V11.5481Z"
                      fill="white"
                    />
                  </svg>
                }
                heading="Experienced"
                text="​More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because our
            work is different."
              />
              <BenefitCardsEntry
                svg={
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7008 5.16258H18.4056V4.06507C18.4056 3.16711 18.094 2.41049 17.4707 1.79522C16.8475 1.17995 16.0811 0.872314 15.1715 0.872314H10.8258C9.91622 0.872314 9.14982 1.17995 8.5266 1.79522C7.90337 2.41049 7.59176 3.16711 7.59176 4.06507V5.16258H3.29654C2.38697 5.16258 1.62057 5.4619 0.99734 6.06054C0.374114 6.65919 0.0625 7.42412 0.0625 8.35534V12.5957C0.0625 13.2941 0.416223 13.6433 1.12367 13.6433V22.174C1.12367 22.7394 1.34264 23.2382 1.78059 23.6706C2.21853 24.1029 2.72385 24.3191 3.29654 24.3191H22.7008C23.2735 24.3191 23.7788 24.1029 24.2168 23.6706C24.6547 23.2382 24.8737 22.7394 24.8737 22.174V13.6433C25.5811 13.6433 25.9348 13.2941 25.9348 12.5957V8.35534C25.9348 7.42412 25.6232 6.65919 25 6.06054C24.3768 5.4619 23.6104 5.16258 22.7008 5.16258ZM9.76463 4.06507C9.76463 3.76575 9.86569 3.51632 10.0678 3.31677C10.2699 3.11722 10.5226 3.01745 10.8258 3.01745H15.1715C15.4747 3.01745 15.7274 3.11722 15.9295 3.31677C16.1316 3.51632 16.2327 3.76575 16.2327 4.06507V5.16258H9.76463V4.06507ZM3.29654 22.174V13.6433H9.76463V16.8361C9.76463 17.4347 9.97518 17.9419 10.3963 18.3576C10.8174 18.7734 11.3311 18.9812 11.9375 18.9812H14.0598C14.6662 18.9812 15.18 18.7734 15.6011 18.3576C16.0222 17.9419 16.2327 17.4347 16.2327 16.8361V13.6433H22.7008V22.174H3.29654ZM11.9375 16.8361V13.6433H14.0598V16.8361H11.9375ZM23.762 11.5481H2.23537V8.35534C2.23537 7.62366 2.5891 7.25783 3.29654 7.25783H22.7008C23.4082 7.25783 23.762 7.62366 23.762 8.35534V11.5481Z"
                      fill="white"
                    />
                  </svg>
                }
                heading="Experienced"
                text="​More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because our
            work is different."
              />
            </div>
          </Fade>
          <Fade bottom distance="200px" duration="1500">
            <div className="benefit__section__container__cards__button">
              <button className="benefit__section__container__cards__button__contact">
                Contact Us
              </button>
              <button className="benefit__section__container__cards__button__more">
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
          </Fade>
        </div>
      </div>
    </section>
  );
}
