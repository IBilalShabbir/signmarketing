import React from "react";
import { citymap } from "../assets";
import MapSecEntry from "./MapSecEntry";

export default function Citiessec() {
  return (
    <section
      className="cities__sec"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="40"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <div className="cities__sec__bg">
        <img src={citymap} alt="" />
        <div className="cities__sec__bg__overlay"></div>
      </div>
      <div className="cities__sec__container">
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="Multan Office"
          text="Office No. 2, 3, 4, Mezzanine Floor, Chenone Tower, Abdal Road, Multan"
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="Karachi Office"
          text="Mezzanine Floor, Topra Plaza, Main University Road, Opp. Urdu Science College Gulshan-e-Iqbal, Karachi."
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="
          Hyderabad Office
          "
          text="Garrison Complex, First Floor, Main Saddar Road, Near Bombay Bakery, Hyderabad, Sindh, Pakistan"
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="
          Islamabad Office
          "
          text="Roshan Center, Jinnah Avenue Islamabad, Punjab"
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="
          Faisalabad Office

          "
          text="Plot 330, D Ground Block B People's Colony No 1, Faisalabad, Punjab
          "
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="
          Lahore Office"
          text="Office No. 106, 1st Floor, Siddiq Trade Center, 72, Main Boulevard Lahore, Punjab"
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="
          Nowshera Office"
          text="Office No. 1, 1st Floor, Amin Tower, Shobra Chowk, Akramabad, Nowshera, Khyber Pakhtunkhwa"
        />
        <MapSecEntry
          svg={
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_158_283)">
                <g filter="url(#filter0_f_158_283)">
                  <ellipse
                    cx="22.3799"
                    cy="40.6895"
                    rx="10.8916"
                    ry="2.93635"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </g>
                <path
                  d="M20.2662 0.829601C17.0984 1.38111 14.5781 2.70475 12.366 4.96595C9.79172 7.58958 8.40437 10.8435 8.20398 14.6962C8.04983 17.6035 8.97473 21.0071 11.0866 25.2853C12.8978 28.9489 15.2101 32.5731 18.347 36.678C19.9964 38.8367 21.4608 40.6016 21.8 40.8301C22.1622 41.0822 22.8405 41.0822 23.2027 40.8301C23.7269 40.4755 26.9563 36.3943 28.783 33.8022C32.9065 27.9247 35.6734 22.3623 36.4827 18.2968C36.7679 16.8708 36.8604 15.8229 36.7987 14.6962C36.5983 10.8435 35.211 7.58958 32.6367 4.96595C30.3861 2.65747 27.7579 1.31021 24.5361 0.798088C23.4571 0.624752 21.3375 0.640511 20.2662 0.829601ZM24.4668 8.26715C26.0083 8.73988 27.2492 9.6223 28.2049 10.9302C29.8235 13.1362 30.0855 15.9568 28.8986 18.4465C28.1895 19.9356 27.0642 21.0938 25.6229 21.8265C24.6826 22.3071 23.9041 22.5041 22.7711 22.5513C22.0389 22.5829 21.6921 22.5592 21.114 22.4332C17.0136 21.5665 14.4779 17.3041 15.6494 13.2465C16.4047 10.6387 18.4318 8.73988 21.1217 8.11745C21.931 7.92837 23.6035 8.00715 24.4668 8.26715Z"
                  fill="#ED1B24"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_158_283"
                  x="7.48828"
                  y="33.7532"
                  width="29.7852"
                  height="13.8727"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_158_283"
                  />
                </filter>
                <clipPath id="clip0_158_283">
                  <rect width="45" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          heading="
          Peshawar Office"
          text="Deans Trade Center, UG-7 & UG-8, Opposite F.C Headquarters, Saddar Peshawar, Khyber Pakhtunkhwa"
        />
      </div>
    </section>
  );
}
