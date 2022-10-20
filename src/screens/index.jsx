import React from "react";
import About from "../components/About";
import Benefit from "../components/Benefit";
import { Projects } from "../components/Projects";

export default function index() {
  return (
    <>
      <About />
      <Projects />
      <Benefit />
    </>
  );
}
