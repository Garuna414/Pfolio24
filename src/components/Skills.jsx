import React from "react";
import { motion } from "motion/react";

export default function Skills() {
  const fields = ["LANGUAGES", "FRAMEWORKS & LIBRARIES", "DATABASES", "OTHER"];
  const techs = [
    ["C++", "PYTHON", "JAVASCRIPT", "HTML", "CSS"],
    ["REACT JS", "EXPRESS JS", "FRAMER MOTION", "TAILWIND CSS"],
    ["SQL", "MONGO DB"],
    ["GIT", "GITHUB", "VS CODE", "THUNDER CLIENT"],
  ];
  return (
    <div
      className="p-5 flex flex-col md:h-screen h-auto md:min-h-[calc(100dvh-68px)] md:gap-0 gap-5"
      id="Skills"
    >
      <p className="lg:text-4xl md:text-3xl text-2xl text-red-600 font-heading">
        SKILLS
      </p>
      <div className="h-full md:justify-center flex flex-col md:gap-5 gap-3">
        {fields.map((field, index) => (
          <div className="flex flex-col gap-2 mb-5" key={index}>
            <p className="lg:text-2xl md:text-xl text-xl text-red-600 font-heading">
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
                viewport={{ once: true }}
              >
                {techs[index].map((tech, key) => (
                  <li
                    key={key}
                    className="rounded-3xl px-2 py-1 font-body border border-black text-sm md:text-base"
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
