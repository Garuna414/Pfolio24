import React from "react";

export default function About() {
  const headings = ["EDUCATION", "EXPERIENCE", "GOAL", "HOBBIES"];
  const content = [
    "I am a final year student, currently pursuing my Bachelors of Engineering in Computer Engineering from University of Mumbai with 8.7 CGPA.",
    "I worked at Meta Craftlab Pvt. Ltd. as a Full Stack Developer Intern from June 2024 - July 2024. I was responsible for development of the organisations web app project modules along with other interns, remotely, using SvelteKit and Prisma.",
    "My goal is to become an experienced developer and assume a senior position at a respected organisation, contributing to cutting edge projects and advancing the organisations success.",
    "My hobbies includes photography of the skies. It can be in the form of photos, videos, timelapses and long exposures. I also like to listen to electronic music.",
  ];
  return (
    <div className="min-h-screen h-screen border-x-black flex flex-col p-5">
      <div>
        <p className="md:text-5xl text-3xl text-red-600 font-mono">
          ABOUT ME
        </p>
      </div>
      <div className="md:w-2/3 flex md:flex-row flex-col h-full">
        <div className="flex flex-col md:h-full h-auto md:justify-around md:gap-0 gap-3">
          {headings.map((heading, key) => (
            <div key={key}>
              <p className="md:text-3xl text-xl text-red-600 font-mono">
                {heading}
              </p>
              <p className="text-justify md:text-lg font-serif">{content[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
