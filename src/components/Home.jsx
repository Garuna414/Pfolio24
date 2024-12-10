import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Exp from "./Exp";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home for Anurags portfolio website."/>
        <link rel="canonical" href="/"/>
      </Helmet>
      <div>
        <Navbar />
      </div>
      <div className="mt-[60px]">
        <div>
          <Landing />
        </div>
        <div>
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
