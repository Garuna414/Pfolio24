import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const sections = ["Top", "About Me", "Projects", "Skills", "Contact"];
  const [Toggle, setToggle] = useState(0);
  function toggleMenu() {
    setToggle(!Toggle);
  }
  return (
    <div className="w-screen bg-slate-100 border-b-black py-3 px-5 h-auto fixed top-0 left-0 flex flex-col z-50 flex-wrap">
      <div className="w-full flex md:flex-row flex-col md:justify-between text-lg items-left">
        <div className="md:flex-none flex flex-row justify-between">
          <div className="my-auto font-mono">ANURAG NALKAR</div>
          <div
            className="md:hidden hover:font-bold hover:bg-slate-400 p-2 cursor-pointer rounded-md"
            onClick={toggleMenu}
          >
            +
          </div>
        </div>
        <div>
          <ul
            className={`${
              Toggle ? "visible" : "hidden"
            } md:flex md:flex-row flex-col items-left md:gap-0 gap-2 z-5`}
          >
            {sections.map((section, index) => (
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}

                className="hover:bg-slate-400 hover:text-red-600 hover:font-semibold active:bg-slate-400 active:text-red-600 active:font-semibold rounded-md h-fit"
              >
                <li
                  key={index}
                  className="py-2 px-3 cursor-pointer font-mono hover:bg-slate-400 hover:text-red-600 hover:font-semibold active:bg-slate-400 active:text-red-600 rounded-md"
                  onClick={toggleMenu}
                >
                  {section}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`opacity-50 h-[60vh] w-screen bg-black ${
          Toggle ? "visible" : "hidden"
        } top-[46vh] absolute md:hidden left-0`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}
