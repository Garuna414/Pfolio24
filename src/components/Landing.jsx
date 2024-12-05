import React from "react";
import topRightArrow from "../assets/topRightArrow.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import resume from "../assets/resume.pdf";
import { motion } from "motion/react";

export default function Landing() {
  const stack = ["C++", "PYTHON", "REACT", "EXPRESS", "TAILWIND"];
  return (
    <div
      className="w-screen border-y-black flex flex-col items-center h-screen justify-center text-xl px-5 gap-3"
      id="Top"
    >
      <p className="font-body">Hello! This is</p>
      <motion.div
        className="flex flex-col gap-1 items-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      >
        <p className="text-red-600 font-medium md:text-5xl text-3xl font-heading">
          ANURAG NALKAR
        </p>
      </motion.div>
      <p className="md:text-lg text-base font-body">Specialised in</p>
      <div className="mb-10 flex flex-col items-center gap-2 w-full">
        <ul className="flex flex-row sm:gap-3 gap-2 font-heading flex-wrap justify-around min-w-fit">
          {stack.map((tech, key) => (
            <motion.li
              key={key}
              className="border border-black px-3 py-1 rounded-3xl md:text-lg text-base mb-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: key * 0.5, ease: "easeInOut" },
              }}
              viewport={{ margin: "-50px" }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="md:mb-8 mb-12">
        <button className="hover:bg-red-600 bg-white px-5 py-2 hover:text-white rounded-3xl hover:shadow-md border border-black hover:shadow-slate-400 hover:scale-110 transition-all ease-in-out duration-400 font-heading">
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
