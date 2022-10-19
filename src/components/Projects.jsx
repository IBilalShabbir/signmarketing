import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperimg1 } from "../assets";

export function Projects() {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  function changeSlidesPerView() {
    if (window.innerWidth < 650) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 900) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div className="design__and__construction__section">
      <div className="design__and__construction__section__container">
        <div className="design__and__construction__section___heading">
          Projects
        </div>
        <div className="design__and__construction__section___text__container">
          <div className="design__and__construction__section__container__heading__left">
            We Provide Architectural design and Construction
          </div>
          <div className="design__and__construction__section__container__heading__right">
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different.
          </div>
        </div>
      </div>
      <div className="swiper__content__sec">
        <Swiper
          style={{
            paddingBottom: "6em",
          }}
          modules={[Pagination, Navigation]}
          pagination={true}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
            </div>
          </SwiperSlide>

          <div className="swiper__button__handles">
            <button ref={prevRef}>
              <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.31741 8.35555L10.1455 3.09416L10.1455 3.0941C10.4031 2.8133 10.5389 2.44163 10.5257 2.06118C10.5126 1.68073 10.3513 1.31935 10.0749 1.05706C9.79822 0.794493 9.42854 0.652834 9.04685 0.666063C8.66515 0.679293 8.30618 0.846206 8.04832 1.1273L0.886779 8.93409C0.886646 8.93424 0.886516 8.93438 0.886383 8.93452C0.758689 9.07348 0.659626 9.23623 0.594449 9.41328C0.529213 9.59048 0.499099 9.77879 0.505639 9.9675C0.512179 10.1562 0.555259 10.342 0.632607 10.5142C0.709877 10.6863 0.819956 10.8418 0.956952 10.9716L5.31741 8.35555ZM5.31741 8.35555L26.0118 7.6383C26.3931 7.62509 26.7625 7.76663 27.039 8.02898C27.3152 8.29106 27.4763 8.65214 27.4894 9.03227C27.5026 9.4124 27.3669 9.78377 27.1095 10.0643C26.8519 10.3452 26.4932 10.512 26.1118 10.5252L5.41747 11.2424L10.5982 16.1569L10.5983 16.157C10.8747 16.4193 11.0359 16.7807 11.0491 17.1611C11.0623 17.5416 10.9265 17.9132 10.6689 18.194C10.411 18.4751 10.052 18.642 9.67033 18.6553C9.28864 18.6685 8.91897 18.5268 8.64226 18.2643L0.957413 10.972L5.31741 8.35555Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
            </button>
            <button ref={nextRef}>
              <svg
                width="28"
                height="19"
                viewBox="0 0 28 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  fill="currentColor"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  stroke-opacity="0.2"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  stroke-opacity="0.2"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  stroke-opacity="0.2"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  stroke-opacity="0.2"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
