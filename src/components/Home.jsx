import React from "react";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Landing />
      <div className="mb-auto">
        <About />
      </div>
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
