import React from "react";
import About from "../components/About";
import Benefit from "../components/Benefit";
import Citiessec from "../components/Citiessec";
import ContactUs from "../components/ContactUs";
import { Projects } from "../components/Projects";
import RegionSec from "../components/RegionSec";
import YourChoiceSec from "../components/YourChoiceSec";
import { HomeSection } from "../components/HomeSection";

export default function index() {
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
