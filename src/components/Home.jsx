import React from "react";
import Landing from "./Landing";
import About from "./About";
import Exp from "./Exp";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Landing />
      </div>
      <div className="mb-auto">
        <About />
      </div>
      <div>
        <Exp />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
