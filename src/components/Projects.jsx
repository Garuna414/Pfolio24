import React, { useState, useEffect } from "react";
import projectData from "../data/projectData";
import ProjectsCard from "./ProjectsCard";
import { motion } from "motion/react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(Object.values(projectData));
  }, []);

  return (
    <div
      className="p-5 flex flex-col gap-5 h-auto w-full min-h-[calc(100dvh-68px)]"
      id="Projects"
    >
      <div>
        <p className="lg:text-4xl md:text-3xl text-2xl text-red-600 font-heading w-full">
          PROJECTS
        </p>
      </div>
      <div className="flex flex-row h-full gap-5 overflow-x-visible flex-nowrap w-full overflow-y-hidden snap-x snap-mandatory justify-between pb-5 lg:pb-0">
        {projects.map((project, index) => (
          <motion.div
            className="snap-center w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeIn",
                delay: 0.3,
              },
            }}
            viewport={{ margin: "-10px", once: true }}
            key={index}
          >
            <ProjectsCard data={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
