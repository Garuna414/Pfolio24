import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/projectData";
import github from "../assets/github.png";
import BackToHome from "./BackToHome";

export default function ProjectView() {
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  const [fEnd, setFEnd] = useState([]);
  const [bEnd, setBEnd] = useState([]);
  const [other, setOther] = useState([]);
  const [lang, setLang] = useState([]);
  const [eng, setEng] = useState([]);
  useEffect(() => {
    setData(projectData[name]);
    if (projectData[name].detailStack) {
      setFEnd(projectData[name].detailStack["frontEnd"]);
      setBEnd(projectData[name].detailStack["backEnd"]);
      setOther(projectData[name].detailStack["otherTools"]);
      setLang(projectData[name].detailStack["languages"]);
      setEng(projectData[name].detailStack["gameEngine"]);
    }
  }, [name]);

  return (
    <div className="w-full h-auto min-h-screen flex flex-col gap-5">
      <div className="fixed top-0 left-0 w-full">
        <BackToHome />
      </div>
      <div className="h-full w-full px-8 pt-3 pb-5 flex flex-col gap-7 mt-[60px]">
        <div className="items-center">
          <img
            src={data.image}
            alt="Project_Image"
            className="rounded-3xl lg:max-w-[70vw] m-auto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="font-heading text-red-600 lg:text-xl md:text-base">
              {data.title}
            </p>
          </div>
          <div>
            <p className="text-justify font-body">
              {data.detailInfo ? data.detailInfo : "Data yet to be added."}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-heading text-red-600 lg:text-xl md:text-base">
            TECH STACK
          </p>
          <div className="flex flex-col gap-5">
            {fEnd && (
              <div>
                <p className="font-heading text-red-600 lg:text-xl md:text-base">
                  FRONT END
                </p>
                <ul className="pl-5 list-disc text-justify font-body">
                  {fEnd
                    ? fEnd.map((tech, index) => <li key={index}>{tech}</li>)
                    : "Stack to be added"}
                </ul>
              </div>
            )}
            {bEnd && (
              <div>
                <p className="font-heading text-red-600 lg:text-xl md:text-base">
                  BACK END
                </p>
                <ul className="pl-5 list-disc text-justify font-body">
                  {bEnd
                    ? bEnd.map((tech, index) => <li key={index}>{tech}</li>)
                    : "Stack to be added"}
                </ul>
              </div>
            )}
            {other && (
              <div>
                <p className="font-heading text-red-600 lg:text-xl md:text-base">
                  OTHER TOOLS
                </p>
                <ul className="pl-5 list-disc text-justify font-body">
                  {other
                    ? other.map((tech, index) => <li key={index}>{tech}</li>)
                    : "Stack to be added"}
                </ul>
              </div>
            )}
            {lang && (
              <div>
                <p className="font-heading text-red-600 lg:text-xl md:text-base">
                  LANGUAGES
                </p>
                <ul className="pl-5 list-disc text-justify font-body">
                  {lang
                    ? lang.map((tech, index) => <li key={index}>{tech}</li>)
                    : "Stack to be added"}
                </ul>
              </div>
            )}
            {eng && (
              <div>
                <p className="font-heading text-red-600 lg:text-xl md:text-base">
                  LANGUAGES
                </p>
                <ul className="pl-5 list-disc text-justify font-body">
                  {eng
                    ? eng.map((tech, index) => <li key={index}>{tech}</li>)
                    : "Stack to be added"}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-5 w-full">
          <a
            href={data.gitUrl}
            className="bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-300 p-2 gap-2 border border-black"
          >
            <img src={github} alt="Icon" />
            <p className="font-heading text-black md:text-sm text-xs">
              SOURCE CODE
            </p>
          </a>
          {data.url && (
            <a
              href={data.url}
              className="bg-white flex justify-center items-center rounded-3xl hover:scale-105 hover:bg-lime-400 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out duration-300 px-3 py-2 gap-2 border border-black"
            >
              <p className="font-heading text-black md:text-sm text-xs">
                TO PROJECT
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
