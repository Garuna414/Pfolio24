import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const sections = [
    "Top",
    "About Me",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];
  const [Toggle, setToggle] = useState(false);
  function toggleMenu() {
    setToggle(!Toggle);
  }
  return (
    <div className="w-screen border-b-black h-auto fixed top-0 left-0 flex flex-col z-50 flex-wrap md:bg-white">
      <div className="w-full flex md:flex-row flex-col md:justify-between text-lg items-left ">
        <div className="md:flex-none py-3 px-5 flex flex-row justify-between bg-white">
          <div className="my-auto font-heading">
            <RouterLink to="/">ANURAG NALKAR</RouterLink>
          </div>
          <div
            className="md:hidden hover:font-bold hover:bg-slate-400 p-2 cursor-pointer rounded-md"
            onClick={toggleMenu}
          >
            +
          </div>
        </div>
        <div
          // initial={{ y: -100, opacity: 0 }}
          // animate={{
          //   y: 0,
          //   opacity: 1,
          //   transition: { duration: 0.3, ease: "easeIn" },
          // }}
        >
          <ul
            className={`${
              Toggle ? "visible" : "hidden"
            } md:flex md:flex-row flex-col items-left md:gap-1 gap-2 z-5 bg-white pb-3 px-5 md:pt-3`}
          >
            {sections.map((section, index) => (
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-60}
                duration={300}
                key={index}
                className="active:bg-slate-400 rounded-md h-fit"
              >
                <li
                  className="py-1 px-2 cursor-pointer font-mono hover:bg-slate-200 active:bg-slate-200 rounded-md transition-all ease-in-out duration-400 "
                  onClick={toggleMenu}
                >
                  {section}
                </li>
              </Link>
            ))}
          </ul>
          <div
            className={`${
              Toggle ? "visible" : "hidden"
            } opacity-50 h-auto min-h-screen w-screen bg-black md:hidden left-0`}
            onClick={toggleMenu}
          ></div>
        </div>
      </div>
    </div>
  );
}