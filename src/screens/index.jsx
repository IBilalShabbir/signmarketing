import React from "react";
import About from "../components/About";
import Benefit from "../components/Benefit";
import { Projects } from "../components/Projects";
import RegionSec from "../components/RegionSec";
import YourChoiceSec from "../components/YourChoiceSec";

export default function index() {
  return (
    <>
      <About />
      <Projects />
      <Benefit />
      <YourChoiceSec />
      <RegionSec />
    </>
  );
}
