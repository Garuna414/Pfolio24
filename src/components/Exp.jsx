import React, { useEffect, useState } from "react";
import expData from "../data/expData";
import { motion } from "motion/react";

export default function Exp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Object.values(expData));
  }, []);
  return (
    <div
      className="p-5 flex flex-col gap-10 h-[calc(100dvh-68px)]"
      id="Experience"
    >
      <div>
        <p className="lg:text-4xl md:text-3xl text-2xl text-red-600 font-heading">
          EXPERIENCE
        </p>
      </div>
      <ul className="flex flex-col gap-5 items-center justify-center h-full">
        {data.map((exp, key) => (
          <motion.li
            className="p-5 border border-black rounded-3xl flex md:flex-row flex-col md:gap-5 gap-3 w-full md:w-fit"
            key={key}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeIn" },
            }}
            viewport={{ once: true }}
          >
            <div className="w-auto md:max-w-[100px] max-w-[75px] flex flex-col items-center justify-center md:h-full my-auto">
              <img src={exp.logo} alt="Logo" className="rounded-md m-auto" />
            </div>
            <div className="w-auto flex flex-col gap-3">
              <div className="flex md:flex-row flex-col justify-between text-sm md:text-lg md:gap-0 gap-3 font-heading">
                <div className="md:w-[59%] flex flex-col">
                  <div>
                    <p className="text-lg md:text-2xl">{exp.role}</p>
                  </div>
                  <div>
                    <p>{exp.name}</p>
                  </div>
                </div>
                <div className="md:w-[39%] flex flex-col">
                  <div>
                    <p>{exp.date}</p>
                  </div>
                  <div>
                    <p>{exp.place}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm md:text-lg font-body text-justify">
                  {exp.info}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
