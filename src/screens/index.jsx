import React from "react";
import About from "../components/About";
import Benefit from "../components/Benefit";
import { Projects } from "../components/Projects";
import YourChoiceSec from "../components/YourChoiceSec";

export default function index() {
  return (
    <>
      <About />
      <Projects />
      <Benefit />
      <YourChoiceSec />
    </>
  );
}
