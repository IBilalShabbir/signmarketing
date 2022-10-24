import React from "react";
import { contactform } from "../assets";

export default function ContactUs() {
  return (
    <div className="contact__sec">
      <div className="contact__sec__container__bg"></div>
      <div className="contact__sec__container">
        <div
          className="contact__sec__container__left"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="contact__sec__container__left__form">
            <div className="contact__sec__container__left__heading">
              Contact Us
            </div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Your Message Here..."
            ></textarea>
            <div className="contact__sec__container__left__btn__container">
              <button className="contact__sec__container__left__btn">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="contact__sec__container__right">
          <img src={contactform} alt="" />
        </div>
      </div>
    </div>
  );
}
