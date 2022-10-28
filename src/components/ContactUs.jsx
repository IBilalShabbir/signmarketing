import React from "react";
import { contactform } from "../assets";
import { Fade } from "react-reveal";

export default function ContactUs() {
  return (
    <section className="contact__sec">
      <div className="contact__sec__container__bg"></div>
      <div className="contact__sec__container">
        <Fade left distance="200px" duration="1500">
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
              </div>
              <div className="contact__sec__container__left__heading__field">
                <input type="email" placeholder="Email..." />
              </div>

              <div className="contact__sec__container__left__heading__field__textarea">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write Your Message Here..."
                />
              </div>
              <div className="contact__sec__container__left__btn__container">
                <button className="contact__sec__container__left__btn">
                  Send
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right distance="200px" duration="1500">
          <div className="contact__sec__container__right">
            <img src={contactform} alt="" />
          </div>
        </Fade>
      </div>
    </section>
  );
}
