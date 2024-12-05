import React from "react";
import Navbar from "./Navbar";
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
        <Navbar />
      </div>
      <div className="mt-[60px]">
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
    </div>
  );
}
