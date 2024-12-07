import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import skills from "../data/skills";

export default function Skills() {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    setSkill(Object.values(skills));
  }, []);

  return (
    <div
      className="p-5 flex flex-col md:h-screen h-auto md:min-h-[calc(100dvh-68px)] md:gap-0 gap-5"
      id="Skills"
    >
      <p className="lg:text-4xl md:text-3xl text-2xl text-red-600 font-heading">
        SKILLS
      </p>
      <div className="h-full md:justify-center flex flex-col md:gap-5 gap-3">
        {skill.map((field, index) => (
          <div className="flex flex-col gap-2 mb-5" key={index}>
            <p className="lg:text-2xl md:text-xl text-xl text-red-600 font-heading">
              {field.stack}
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
                {field.names.map((tech, key) => (
                  <li
                    key={key}
                    className="rounded-3xl px-2 py-1 font-body border border-black text-sm md:text-base flex items-center gap-2"
                  >
                    <img src={field.logos[key]} alt="" className="max-w-7" />
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
