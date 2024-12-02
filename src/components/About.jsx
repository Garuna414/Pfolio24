import React from "react";
import pfp from "../assets/pfp.png";
import { motion } from "motion/react";

export default function About() {
  const headings = ["EDUCATION", "EXPERIENCE", "GOAL", "HOBBIES"];
  const content = [
    "I am a final year student, currently pursuing my Bachelors of Engineering in Computer Engineering from University of Mumbai with 8.7 CGPA.",
    "I worked at Meta Craftlab Pvt. Ltd. as a Full Stack Developer Intern from June 2024 - July 2024. I was responsible for development of Craftlabs web app project modules along with other interns, remotely, using SvelteKit and Prisma.",
    "My goal is to become an experienced developer and assume a senior position at a respected organisation, contributing to cutting edge projects and advancing the organisations success.",
    "My hobbies includes photography of the skies. It can be in the form of photos, videos, timelapses and long exposures. I also like to listen to electronic music.",
  ];
  return (
    <div
      className="min-h-screen h-auto border-x-black flex flex-col p-5 md:pr-0 h-min-[100vh]"
      id="About Me"
    >
      <div>
        <p className="lg:text-5xl md:text-4xl text-2xl text-red-600 font-mono">
          ABOUT ME
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col h-full m-auto">
        <div className="md:w-2/3 flex flex-col md:h-full h-auto gap-5 justify-center">
          {headings.map((heading, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: key * 0.5,
                  ease: "easeInOut",
                },
              }}
              viewport={{ amount: "all" }}
            >
              <p className="lg:text-3xl md:text-2xl text-xl text-red-600 font-mono text-center">
                {heading}
              </p>
              <p className="text-justify lg:text-lg sm:text-base text-sm font-serif">
                {content[key]}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="md:w-1/3 w-full flex flex-col md:p-0 p-5">
          <motion.div
            className="md:w-1/2 rounded-full overflow-hidden m-auto min-w-28 md:max-w-60 max-w-40 w-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                ease: "linear",
                delay: 0.5,
              },
            }}
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
