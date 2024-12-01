import React from "react";
import topRightArrow from "../assets/topRightArrow.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import resume from "../assets/resume.pdf";

export default function Landing() {
  const stack = ["C++", "PYTHON", "REACT", "EXPRESS", "TAILWIND"];
  return (
    <div className="w-screen border-y-black flex flex-col items-center h-screen justify-center text-xl px-5" id="Top">
      <div className="flex flex-col gap-1 mb-3 items-center">
        <p className="font-mono">Hello! This is</p>
        <p className="text-red-600 font-medium md:text-5xl text-3xl">
          ANURAG NALKAR
        </p>
      </div>
      <div className="mb-10 flex flex-col items-center gap-2 w-full">
        <p className="md:text-lg text-base font-mono">Specialised in</p>
        <ul className="flex flex-row sm:gap-3 gap-2 font-mono flex-wrap justify-around min-w-fit">
          {stack.map((tech, key) => (
            <li
              key={key}
              className="border border-black px-3 py-1 rounded-3xl md:text-lg text-base mb-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:mb-8 mb-12">
        <button className="hover:bg-red-600 bg-white px-5 py-2 hover:text-white rounded-3xl hover:shadow-md border border-black hover:shadow-slate-400 transition-all ease-in-out duration-400 font-mono">
          <a
            href={resume}
            download="AnuragResume.pdf"
            className="flex flex-row"
          >
            RESUME
            <img
              src={topRightArrow}
              alt="arrowImg"
              className="scale-75 my-auto"
            />
          </a>
        </button>
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
  );
}
