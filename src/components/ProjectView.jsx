import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../data/projectData";
import github from "../assets/github.png";

export default function ProjectView() {
  const { name } = useParams();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     setData(projectData.name);
  //   }, [name]);
  //   console.log(data.title);
  const [data, setData] = useState([]);
  const [fEnd, setFEnd] = useState([]);
  const [bEnd, setBEnd] = useState([]);
  const [other, setOther] = useState([]);
  useEffect(() => {
    setData(projectData[name]);
    setFEnd(
      projectData[name].detailStack
        ? projectData[name].detailStack["frontEnd"]
        : null
    );
    setBEnd(
      projectData[name].detailStack
        ? projectData[name].detailStack["backEnd"]
        : null
    );
    setOther(
      projectData[name].detailStack
        ? projectData[name].detailStack["otherTools"]
        : null
    );
  }, [name]);

  return (
    <div className="p-5 w-full h-auto min-h-screen flex flex-col gap-5">
      <div>
        <Link
          to="/home"
          className="px-3 py-2 rounded-3xl border border-black hover:scale-105 hover:bg-red-600 hover:shadow-md hover:shadow-black hover:text-white font-mono transition-all ease-in-out duration-300"
        >
          &lt;--
        </Link>
      </div>
      <div className="h-full w-full p-5 flex flex-col gap-7">
        <div className="items-center">
          <img
            src={data.image}
            alt="Project_Image"
            className="rounded-3xl lg:max-w-[70vw] m-auto"
          />
        </div>
        <div>
          <p className="font-mono text-red-600 lg:text-xl md:text-base">
            {data.title}
          </p>
        </div>
        <div>
          <p className="text-justify font-serif">
            {data.detailInfo ? data.detailInfo : "No data"}
          </p>
        </div>
        <div>
          <p className="font-mono text-red-600 lg:text-xl md:text-base">
            TECH STACK
          </p>
          <div className="px-5">
            <div>
              <p className="font-mono text-red-600 lg:text-xl md:text-base">
                FRONT END
              </p>
              <ul className="pl-5 list-disc text-justify">
                {fEnd
                  ? fEnd.map((tech, index) => <li key={index}>{tech}</li>)
                  : "Stack to be added"}
              </ul>
            </div>
            <div>
              <p className="font-mono text-red-600 lg:text-xl md:text-base">
                BACK END
              </p>
              <ul className="pl-5 list-disc text-justify">
                {bEnd
                  ? bEnd.map((tech, index) => <li key={index}>{tech}</li>)
                  : "Stack to be added"}
              </ul>
            </div>
            <div>
              <p className="font-mono text-red-600 lg:text-xl md:text-base">
                OTHER TOOLS
              </p>
              <ul className="pl-5 list-disc text-justify">
                {other
                  ? other.map((tech, index) => <li key={index}>{tech}</li>)
                  : "Stack to be added"}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-full">
          <a
            href={data.url}
            className="min-w-10 min-h-10 bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-300 group p-2 gap-2"
          >
            <img src={github} alt="Icon" />
            <p className="font-mono text-black">SOURCE CODE</p>
          </a>
        </div>
      </div>
    </div>
  );
}
