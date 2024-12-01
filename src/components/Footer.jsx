import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";

export default function Footer() {
  return (
    <div className="Contact">
      <div className="px-5">
        <p className="lg:text-5xl md:text-4xl text-2xl text-red-600 font-mono">CONTACT</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 p-5">
        <div className="px-4 py-2 border border-black rounded-3xl">
          <p className="md:text-2xl text-xl font-mono">Contact Me</p>
        </div>
        <div className="flex flex-row gap-4">
          <button className="px-3 py-1 scale-125 hover:scale-150 transition-all ease-in-out duration-400">
            <a href="https://www.linkedin.com/in/anuragnalkar/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </button>
          <button className="px-3 py-1 scale-125 hover:scale-150 transition-all ease-in-out duration-400">
            <a href="https://github.com/Garuna414">
              <img src={github} alt="GitHub" />
            </a>
          </button>
          <button className="px-3 py-1 scale-125 hover:scale-150 transition-all ease-in-out duration-400">
            <a href="mailto:anuragnalkar414@gmail.com">
              <img src={mail} alt="LinkedIn" />
            </a>
          </button>
        </div>
      </div>
      <div className="min-h-20 h-auto bg-slate-300 flex flex-col md:flex-row justify-center items-center md:gap-5 gap-2 font-mono py-5">
        <p className="md:translate-x-4">ANURAG NALKAR</p>
        <p className="md:translate-x-4">X</p>
        <p className="md:translate-x-4">PORTFOLIO WEBSITE</p>
      </div>
    </div>
  );
}
