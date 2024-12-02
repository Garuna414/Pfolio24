import React from "react";
import { motion } from "motion/react";

export default function () {
  const fields = ["LANGUAGES", "FRAMEWORKS & LIBRARIES", "DATABASES", "OTHER"];
  const techs = [
    ["C++", "PYTHON", "JAVASCRIPT", "HTML", "CSS"],
    ["REACT JS", "EXPRESS JS", "FRAMER MOTION", "TAILWIND CSS"],
    ["SQL", "MONGO DB"],
    ["GIT", "GITHUB", "VS CODE"],
  ];
  return (
    <div className="p-5 flex flex-col h-screen" id="Skills">
      <p className="lg:text-5xl md:text-4xl text-2xl text-red-600 font-mono">
        SKILLS
      </p>
      <div className="h-full justify-center flex flex-col">
        {fields.map((field, index) => (
          <div className="flex flex-col gap-2 mb-5" key={index}>
            <p className="lg:text-3xl md:text-2xl text-xl text-red-600 font-mono">
              {field}
            </p>
            <div>
              <motion.ul
                className="flex flex-row gap-3 flex-wrap"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: index * 0.5,
                    ease: "linear",
                    delay: 0.5,
                  },
                }}
              >
                {techs[index].map((tech, key) => (
                  <li
                    key={key}
                    className="rounded-3xl px-2 py-1 font-mono border border-black text-sm md:text-base"
                  >
                    {tech}
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
