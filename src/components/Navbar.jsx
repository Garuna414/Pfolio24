import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const sections = ["Top", "About Me", "Projects", "Skills", "Contact"];
  const [Toggle, setToggle] = useState(false);
  function toggleMenu() {
    setToggle(!Toggle);
  }
  return (
    <div className="w-screen border-b-black h-auto fixed top-0 left-0 flex flex-col z-50 flex-wrap">
      <div className="w-full flex md:flex-row flex-col md:justify-between text-lg items-left">
        <div className="md:flex-none bg-slate-100 py-3 px-5 flex flex-row justify-between">
          <div className="my-auto font-mono">
            <RouterLink to="/">ANURAG NALKAR</RouterLink>
          </div>
          <div
            className="md:hidden hover:font-bold hover:bg-slate-400 p-2 cursor-pointer rounded-md"
            onClick={toggleMenu}
          >
            +
          </div>
        </div>
        {Toggle && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
          >
            <ul className="md:flex md:flex-row flex-col items-left md:gap-1 gap-2 z-5 bg-slate-100 pb-3 px-5 md:pt-3">
              {sections.map((section, index) => (
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  key={index}
                  className="hover:bg-slate-400 hover:text-red-600 hover:font-semibold active:bg-slate-400 active:text-red-600 active:font-semibold rounded-md h-fit"
                >
                  <li
                    className="py-2 px-3 cursor-pointer font-mono hover:bg-red-500 hover:text-white hover:font-semibold active:bg-red-500 active:text-white rounded-md transition-all ease-in-out duration-400"
                    onClick={toggleMenu}
                  >
                    {section}
                  </li>
                </Link>
              ))}
            </ul>
            <div
              className="opacity-50 h-auto min-h-screen w-screen bg-black md:hidden left-0"
              onClick={toggleMenu}
            ></div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
