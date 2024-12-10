import React from "react";
import pfp from "../assets/pfp.png";
import { motion } from "motion/react";

export default function About() {
  const headings = ["Education",  "Goal", "Hobbies"];
  const content = [
    "I am a final year student, currently pursuing my Bachelors of Engineering in Computer Engineering from University of Mumbai with 8.7 CGPA.",
    "My goal is to become an experienced developer and assume a senior position at a respected organisation, contributing to cutting edge projects and advancing the organisations success.",
    "My hobbies includes photography of the skies. It can be in the form of photos, videos, timelapses and long exposures. I also like to listen to electronic music.",
  ];
  return (
    <div
      className="flex flex-col p-5 h-[calc(100vh-60px)]"
      id="About Me"
    >
      <div>
        <p className="lg:text-4xl md:text-3xl text-2xl text-red-600 font-heading">
          ABOUT ME
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col h-full m-auto">
        <div className="md:w-2/3 flex flex-col md:h-full h-auto md:gap-5 gap-3 justify-center">
          {headings.map((heading, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: key * 0.5,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <p className="lg:text-2xl md:text-xl text-xl text-red-600 font-heading text-center">
                {heading}
              </p>
              <p className="text-justify lg:text-lg sm:text-base text-sm font-body">
                {content[key]}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="md:w-1/3 w-full flex flex-col md:p-0 p-5">
          <motion.div
            className="md:w-1/2 rounded-full overflow-hidden m-auto min-w-28 md:max-w-60 max-w-40 w-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "linear",
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <img
              src={pfp}
              alt="Profile_Picture"
              className="m-auto rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
