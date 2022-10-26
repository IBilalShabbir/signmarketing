import React from "react";
import { contactform } from "../assets";

export default function ContactUs() {
  return (
    <section className="contact__sec">
      <div className="contact__sec__container__bg"></div>
      <div className="contact__sec__container">
        <div
          className="contact__sec__container__left"
          data-aos-easing="ease-in-out"
        >
          <div className="contact__sec__container__left__form">
            <div className="contact__sec__container__left__heading">
              Contact Us
            </div>
            <div className="contact__sec__container__left__heading__field">
              <input type="text" placeholder="Name..." />
              <div className="contact__sec__container__left__heading__field__error">
                Please fill the input
              </div>
            </div>
            <div className="contact__sec__container__left__heading__field">
              <input type="email" placeholder="Email..." />
              <div className="contact__sec__container__left__heading__field__error">
                Please fill the input
              </div>
            </div>

            <div className="contact__sec__container__left__heading__field__textarea">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Your Message Here..."
              />
              <div className="contact__sec__container__left__heading__field__textarea__error">
                Please fill the input
              </div>
            </div>
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
    </section>
  );
}
