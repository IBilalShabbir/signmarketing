import React from "react";
import About from "../components/About";
import Benefit from "../components/Benefit";
import Citiessec from "../components/Citiessec";
import ContactUs from "../components/ContactUs";
import { Projects } from "../components/Projects";
import RegionSec from "../components/RegionSec";
import YourChoiceSec from "../components/YourChoiceSec";
import AOS from "aos";
import { banner, homebottom, svg1 } from "../assets";

export default function index() {
  AOS.init();
  return (
    <>
      <HomeSection />
      <About />
      <Projects />
      <Benefit />
      <YourChoiceSec />
      <RegionSec />
      <ContactUs />
      <Citiessec />
    </>
  );
}

function HomeSection() {
  return (
    <div className="home__section">
      <div className="home__section__content">
        <div className="home__section__content__top">
          <div className="home__section__content__top__left">
            <svg
              width="206"
              height="71"
              viewBox="0 0 206 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M205.883 8.64993C166.803 2.9523 75.7935 4.06278 24.3955 54.0857C-39.8519 116.614 32.6345 -32.1596 205.883 8.64993Z"
                fill="#ED1B24"
                stroke="#ED1B24"
              />
            </svg>
            <div className="home__section__content__top__left__heading">
              We Provide Architectural design and Construction
            </div>
          </div>
          <div className="home__section__content__top__right">
            <img src={banner} alt="" />
            <div className="home__section__content__top__right__top">
              <div className="home__section__content__top__right__info">
                ​More than 100 building and housing projects that we have built.
                The building owner chose us over other contractors in Jakarta,
                because our work is different.
              </div>
              <a
                href="#about"
                className="home__section__content__top__right__link"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
        <div className="home__section__content__bottom">
          <div className="home__section__content__bottom__left">
            <img src={homebottom} alt="" />
            <div className="home__section__content__bottom__left__overlay">
              <button className="home__section__content__bottom__left__overlay__btn">
                <div className="home__section__content__bottom__left__overlay__btn__img">
                  <svg
                    width="33"
                    height="30"
                    viewBox="0 0 33 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.4453 5.60423H23.1328V4.24679C23.1328 3.13615 22.7474 2.20033 21.9766 1.43934C21.2057 0.678348 20.2578 0.297852 19.1328 0.297852H13.7578C12.6328 0.297852 11.6849 0.678348 10.9141 1.43934C10.1432 2.20033 9.75781 3.13615 9.75781 4.24679V5.60423H4.44531C3.32031 5.60423 2.3724 5.97445 1.60156 6.71487C0.830729 7.4553 0.445312 8.4014 0.445312 9.55317V14.7979C0.445312 15.6617 0.882812 16.0936 1.75781 16.0936V26.6447C1.75781 27.344 2.02865 27.961 2.57031 28.4957C3.11198 29.0305 3.73698 29.2979 4.44531 29.2979H28.4453C29.1536 29.2979 29.7786 29.0305 30.3203 28.4957C30.862 27.961 31.1328 27.344 31.1328 26.6447V16.0936C32.0078 16.0936 32.4453 15.6617 32.4453 14.7979V9.55317C32.4453 8.4014 32.0599 7.4553 31.2891 6.71487C30.5182 5.97445 29.5703 5.60423 28.4453 5.60423ZM12.4453 4.24679C12.4453 3.87657 12.5703 3.56806 12.8203 3.32126C13.0703 3.07445 13.3828 2.95104 13.7578 2.95104H19.1328C19.5078 2.95104 19.8203 3.07445 20.0703 3.32126C20.3203 3.56806 20.4453 3.87657 20.4453 4.24679V5.60423H12.4453V4.24679ZM4.44531 26.6447V16.0936H12.4453V20.0425C12.4453 20.783 12.7057 21.4103 13.2266 21.9244C13.7474 22.4386 14.3828 22.6957 15.1328 22.6957H17.7578C18.5078 22.6957 19.1432 22.4386 19.6641 21.9244C20.1849 21.4103 20.4453 20.783 20.4453 20.0425V16.0936H28.4453V26.6447H4.44531ZM15.1328 20.0425V16.0936H17.7578V20.0425H15.1328ZM29.7578 13.5021H3.13281V9.55317C3.13281 8.64821 3.57031 8.19572 4.44531 8.19572H28.4453C29.3203 8.19572 29.7578 8.64821 29.7578 9.55317V13.5021Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Market my project!
              </button>
              <button className="home__section__content__bottom__left__overlay__btn">
                <div className="home__section__content__bottom__left__overlay__btn__img">
                  <svg
                    width="33"
                    height="30"
                    viewBox="0 0 33 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.4453 5.60423H23.1328V4.24679C23.1328 3.13615 22.7474 2.20033 21.9766 1.43934C21.2057 0.678348 20.2578 0.297852 19.1328 0.297852H13.7578C12.6328 0.297852 11.6849 0.678348 10.9141 1.43934C10.1432 2.20033 9.75781 3.13615 9.75781 4.24679V5.60423H4.44531C3.32031 5.60423 2.3724 5.97445 1.60156 6.71487C0.830729 7.4553 0.445312 8.4014 0.445312 9.55317V14.7979C0.445312 15.6617 0.882812 16.0936 1.75781 16.0936V26.6447C1.75781 27.344 2.02865 27.961 2.57031 28.4957C3.11198 29.0305 3.73698 29.2979 4.44531 29.2979H28.4453C29.1536 29.2979 29.7786 29.0305 30.3203 28.4957C30.862 27.961 31.1328 27.344 31.1328 26.6447V16.0936C32.0078 16.0936 32.4453 15.6617 32.4453 14.7979V9.55317C32.4453 8.4014 32.0599 7.4553 31.2891 6.71487C30.5182 5.97445 29.5703 5.60423 28.4453 5.60423ZM12.4453 4.24679C12.4453 3.87657 12.5703 3.56806 12.8203 3.32126C13.0703 3.07445 13.3828 2.95104 13.7578 2.95104H19.1328C19.5078 2.95104 19.8203 3.07445 20.0703 3.32126C20.3203 3.56806 20.4453 3.87657 20.4453 4.24679V5.60423H12.4453V4.24679ZM4.44531 26.6447V16.0936H12.4453V20.0425C12.4453 20.783 12.7057 21.4103 13.2266 21.9244C13.7474 22.4386 14.3828 22.6957 15.1328 22.6957H17.7578C18.5078 22.6957 19.1432 22.4386 19.6641 21.9244C20.1849 21.4103 20.4453 20.783 20.4453 20.0425V16.0936H28.4453V26.6447H4.44531ZM15.1328 20.0425V16.0936H17.7578V20.0425H15.1328ZM29.7578 13.5021H3.13281V9.55317C3.13281 8.64821 3.57031 8.19572 4.44531 8.19572H28.4453C29.3203 8.19572 29.7578 8.64821 29.7578 9.55317V13.5021Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Market my project!
              </button>
            </div>
          </div>
          <div className="home__section__content__bottom__right">
            <div className="home__section__content__bottom__right__entry">
              <div className="home__section__content__bottom__right__entry__heading">
                500+
              </div>
              <div className="home__section__content__bottom__right__entry__subheading">
                Projects
              </div>
            </div>
            <div className="home__section__content__bottom__right__entry">
              <div className="home__section__content__bottom__right__entry__heading">
                40+
              </div>
              <div className="home__section__content__bottom__right__entry__subheading">
                Location
              </div>
            </div>
          </div>
        </div>
        <div className="home__section__content__bottom__slider">
          <img src={svg1} alt="" />
          <img src={svg1} alt="" />
          <img src={svg1} alt="" />
          <img src={svg1} alt="" />
          <img src={svg1} alt="" />
        </div>
      </div>
    </div>
  );
}
