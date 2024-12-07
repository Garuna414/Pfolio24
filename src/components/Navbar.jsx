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
  let img = [
    "https://img.icons8.com/ios/100/menu--v1.png",
    "https://img.icons8.com/ios/100/delete-sign--v1.png",
  ];
  const [Toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(img[0]);
  function toggleMenu() {
    setToggle(!Toggle);
    if (Toggle) setIcon(img[0]);
    else setIcon(img[1]);
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
            <img src={icon} alt="Menu" className="max-w-5"/>
          </div>
        </div>
        <div>
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
