import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperimg1, swiperimg2 } from "../assets";

export function Projects() {
  const [hover, setHover] = useState(true);
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
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg2} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg2} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg2} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg1} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__img">
              <img src={swiperimg2} alt="swiperimg1" />
              {hover ? (
                <div className="swiper__img__overlay">
                  <div className="swiper__img__overlay__content">
                    <div className="swiper__img__overlay__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__content__subheading">
                      Location Here
                    </div>
                    <div className="swiper__img__overlay__content__bottom">
                      <div className="swiper__img__overlay__content__bottom__btn">
                        <button>Contact</button>
                      </div>
                      <div className="swiper__img__overlay__content__bottom__svg">
                        <svg
                          width="26"
                          height="27"
                          viewBox="0 0 26 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_153)">
                            <g filter="url(#filter0_f_158_153)">
                              <ellipse
                                cx="12.9297"
                                cy="23.8829"
                                rx="6.29295"
                                ry="1.72351"
                                fill="black"
                                fill-opacity="0.6"
                              />
                            </g>
                            <path
                              d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_158_153"
                              x="2.63672"
                              y="18.1594"
                              width="20.5859"
                              height="11.447"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="2"
                                result="effect1_foregroundBlur_158_153"
                              />
                            </filter>
                            <clipPath id="clip0_158_153">
                              <rect width="26" height="27" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_158_131)">
                            <path
                              d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z"
                              fill="#0F0F0E"
                            />
                            <path
                              d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                              stroke="#1CAA66"
                              stroke-width="2"
                            />
                            <path
                              d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                              fill="#1CAA66"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_158_131">
                              <rect width="23" height="23" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="swiper__img__overlay__content__hover">
                  <div className="swiper__img__overlay__content__hover__content">
                    <div className="swiper__img__overlay__hover__content__heading">
                      Name Here
                    </div>
                    <div className="swiper__img__overlay__hover__content__subheading">
                      Location here
                    </div>
                    <button className="swiper__img__overlay__hover__content__button">
                      Contact
                    </button>
                    <div className="swiper__img__overlay__hover__content__button__svg">
                      <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_153)">
                          <g filter="url(#filter0_f_158_153)">
                            <ellipse
                              cx="12.9297"
                              cy="23.8829"
                              rx="6.29295"
                              ry="1.72351"
                              fill="black"
                              fill-opacity="0.6"
                            />
                          </g>
                          <path
                            d="M11.7093 0.486889C9.879 0.810604 8.4228 1.58752 7.14472 2.91475C5.65735 4.4547 4.85577 6.36462 4.73999 8.62599C4.65092 10.3324 5.18531 12.3302 6.40549 14.8413C7.452 16.9917 8.78796 19.119 10.6004 21.5283C11.5534 22.7954 12.3995 23.8313 12.5955 23.9654C12.8048 24.1134 13.1966 24.1134 13.4059 23.9654C13.7088 23.7573 15.5747 21.3618 16.6301 19.8404C19.0125 16.3905 20.6112 13.1256 21.0788 10.7394C21.2436 9.90235 21.297 9.2873 21.2614 8.62599C21.1456 6.36462 20.344 4.4547 18.8567 2.91475C17.5563 1.55977 16.0378 0.768984 14.1763 0.468391C13.5529 0.366653 12.3283 0.375902 11.7093 0.486889ZM14.1363 4.85241C15.0269 5.12988 15.7439 5.64782 16.2961 6.41549C17.2313 7.71034 17.3827 9.36591 16.6969 10.8273C16.2872 11.7013 15.637 12.3811 14.8042 12.8112C14.261 13.0933 13.8112 13.2089 13.1566 13.2366C12.7335 13.2551 12.5331 13.2412 12.1991 13.1672C9.83001 12.6585 8.3649 10.1567 9.04179 7.77509C9.47821 6.24438 10.6494 5.12988 12.2036 4.76454C12.6712 4.65355 13.6375 4.6998 14.1363 4.85241Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_158_153"
                            x="2.63672"
                            y="18.1594"
                            width="20.5859"
                            height="11.447"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="2"
                              result="effect1_foregroundBlur_158_153"
                            />
                          </filter>
                          <clipPath id="clip0_158_153">
                            <rect width="26" height="27" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_158_137)">
                          <path
                            d="M11.5 22.2812C17.4543 22.2812 22.2812 17.4543 22.2812 11.5C22.2812 5.54568 17.4543 0.71875 11.5 0.71875C5.54568 0.71875 0.71875 5.54568 0.71875 11.5C0.71875 17.4543 5.54568 22.2812 11.5 22.2812Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            d="M8.36409 10.5477C9.12307 12.0316 10.3302 13.2387 11.8141 13.9977L12.9641 12.8477C13.0326 12.779 13.1188 12.7309 13.2132 12.7087C13.3075 12.6864 13.4062 12.691 13.4981 12.7219C14.1012 12.92 14.7321 13.0207 15.3669 13.0202C15.5057 13.0205 15.6388 13.0759 15.737 13.174C15.8351 13.2722 15.8905 13.4053 15.8908 13.5441V15.3719C15.8905 15.5108 15.8351 15.6438 15.737 15.742C15.6388 15.8402 15.5057 15.8955 15.3669 15.8959C13.0063 15.8951 10.7427 14.9567 9.07401 13.2871C7.40531 11.6174 6.46818 9.35329 6.46875 6.99272C6.46913 6.85387 6.52446 6.72082 6.62264 6.62264C6.72082 6.52445 6.85387 6.46913 6.99272 6.46875H8.82553C8.96438 6.46913 9.09743 6.52445 9.19561 6.62264C9.2938 6.72082 9.34912 6.85387 9.3495 6.99272C9.34857 7.62756 9.44927 8.25846 9.64778 8.86147C9.67743 8.95388 9.6809 9.0527 9.65781 9.14696C9.63472 9.24122 9.58597 9.32725 9.51697 9.3955L8.36409 10.5477Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_158_137">
                            <rect width="23" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
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
                  strokeOpacity="0.2"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  strokeOpacity="0.2"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  strokeOpacity="0.2"
                />
                <path
                  d="M22.6353 10.9443L17.6279 16.0353L17.6278 16.0354C17.3607 16.3071 17.212 16.6738 17.212 17.0545C17.212 17.4352 17.3607 17.8019 17.6278 18.0736C17.8953 18.3456 18.2598 18.5 18.6417 18.5C19.0237 18.5 19.3882 18.3456 19.6556 18.0736L27.0833 10.5196C27.2159 10.385 27.3207 10.2257 27.392 10.0508C27.4634 9.87597 27.5 9.68882 27.5 9.5C27.5 9.31118 27.4634 9.12403 27.392 8.94919C27.3207 8.77433 27.2159 8.61496 27.0833 8.48042L19.6556 0.926374C19.3882 0.654379 19.0237 0.5 18.6417 0.5C18.2598 0.5 17.8953 0.654379 17.6278 0.926374C17.3607 1.19808 17.212 1.56483 17.212 1.9455C17.212 2.32618 17.3607 2.69293 17.6278 2.96464L17.6279 2.96469L22.6353 8.05569L1.92851 8.05569C1.5469 8.05569 1.18266 8.20994 0.915431 8.48171C0.648489 8.7532 0.5 9.11964 0.5 9.5C0.5 9.88036 0.64849 10.2468 0.915431 10.5183C1.18265 10.7901 1.5469 10.9443 1.92851 10.9443H22.6353Z"
                  stroke="currentColor"
                  strokeOpacity="0.2"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
