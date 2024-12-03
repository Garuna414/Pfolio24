import React from "react";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

export default function ProjectsCard({ data }) {
  return (
    <div className="lg:w-1/3 md:w-1/2 md:min-w-[30vw] min-w-[80vw] h-auto border border-black rounded-3xl flex flex-col p-2">
      <div className="h-auto w-full">
        <img
          src={data.image}
          alt="Blockchain_Website"
          className="rounded-3xl w-auto m-auto"
        />
      </div>
      <div className="flex flex-col gap-5 py-5 px-2">
        <p className="font-mono text-red-600">{data.title}</p>
        <p className="font-serif text-justify">{data.content}</p>
        <div>
          <p className="font-mono text-red-600 mb-2">TECH STACK</p>
          <ul className="flex flex-row flex-wrap gap-2">
            {data.stack
              ? data.stack.map((tech, key) => (
                  <li
                    key={key}
                    className="rounded-3xl px-2 py-1 font-mono border border-black text-sm md:text-base"
                  >
                    {tech}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="flex flex-row gap-5 w-full">
          <a
            href={data.url}
            className="min-w-10 min-h-10 bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-300 group p-2 gap-2"
          >
            <img src={github} alt="Icon" />
            <p className="font-mono text-black">SOURCE CODE</p>
          </a>
          <Link
            to={`/projects/${data.extension}`}
            className="min-w-10 min-h-10 bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-300 group py-2 px-3 gap-2"
          >
            <p className="font-mono text-black">READ MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
