import React, { useState } from "react";

export default function Navbar() {
  const sections = ["Top", "About Me", "Projects", "Skills", "Contact"];
  const [Toggle, setToggle] = useState(1);
  function toggleMenu() {
    setToggle(!Toggle);
  }
  return (
    <div className="w-screen bg-slate-100 sticky border-b-black py-3 px-5 h-fit">
      <div className="w-full flex md:flex-row flex-col md:justify-between text-lg items-left">
        <div className="md:flex-none flex flex-row justify-between">
          <div className="my-auto">Anurag Nalkar</div>
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
            } md:flex md:flex-row flex-col items-left md:gap-0 gap-2`}
          >
            {sections.map((section, index) => (
              <li
                key={index}
                className="hover:bg-slate-400 hover:text-red-600 hover:font-semibold py-2 px-3 rounded-md cursor-pointer"
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
