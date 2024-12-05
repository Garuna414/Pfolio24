import React from "react";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

export default function ProjectsCard({ data }) {
  return (
    <div className="lg:w-1/3 md:w-1/2 lg:min-w-[30vw] md:min-w-[40vw] min-w-[87vw] h-auto border border-black rounded-3xl flex flex-col p-2">
      <div className="h-auto w-full">
        <img
          src={data.image}
          alt="Blockchain_Website"
          className="rounded-3xl w-auto m-auto"
        />
      </div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col gap-2">
          <p className="font-heading text-red-600">{data.title}</p>
          <p className="font-body text-justify">{data.content}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-heading text-red-600 mb-2">TECH STACK</p>
          <ul className="flex flex-row flex-wrap gap-2">
            {data.stack
              ? data.stack.map((tech, key) => (
                  <li
                    key={key}
                    className="rounded-3xl px-2 py-1 font-heading border border-black lg:text-base md:text-sm text-xs"
                  >
                    {tech}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="flex flex-row gap-3 md:gap-5 w-full">
          <a
            href={data.url}
            className="min-w-10 min-h-10 bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-200 group p-2 md:gap-2 gap-1"
          >
            <img src={github} alt="Icon" className="" />
            <p className="font-heading text-black md:text-sm text-xs text-center">
              SOURCE CODE
            </p>
          </a>
          <Link
            to={`/projects/${data.extension}`}
            className="min-w-10 min-h-10 bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-200 group py-2 px-3 gap-2 text-center"
          >
            <p className="font-heading text-black md:text-sm text-xs">
              READ MORE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
