import React from "react";
import blockchainWebsite from "../assets/blockchainWebsite.png";
import weather from "../assets/weather.png";
import game2 from "../assets/game2.png"

export default function Projects() {
  const titles = ["BLOCKCHAIN BASED AUCTION WEBSITE", "WEATHER MONITORING WEBSITE", "2D SURVIVAL RACING GAME"];
  const images = [blockchainWebsite, weather, game2];
  const content = [
    "Developed an auction website to provide a secure platform for people to host and participate in auctions.",
    "React based responsive website providing current and upcoming weather of city entered by user using GeoDB and OpenWeather APIs.",
    "Unity based 2D survival car racing game with four unique levels with unique vehicles. "
  ];
  const stack = [["REACT", "EXPRESS", "SQL", "SOLIDITY"],["REACT", "APIs"], ["C#", "UNITY 2D"]];
  return (
    <div className="p-5 flex flex-col gap-5 h-screen w-full" id="Projects">
      <div>
        <p className="lg:text-5xl md:text-4xl text-2xl text-red-600 font-mono w-full">PROJECTS</p>
      </div>
      <div className="flex flex-row h-full gap-5 overflow-x-scroll flex-nowrap w-full">
        {titles.map((title, index) => (
          <div className="lg:w-1/3 md:w-1/2 h-auto max-h-screen border border-black rounded-3xl flex flex-col p-2" key={index}>
            <div className="h-auto w-full">
              <img
                src={images[index]}
                alt="Blockchain_Website"
                className="rounded-3xl lg:max-w-[30vw] md:w-auto m-auto max-w-30vw"
              />
            </div>
            <div className="flex flex-col gap-5 py-5 px-2">
              <p className="font-mono text-red-600">{title}</p>
              <p className="font-serif text-justify">{content[index]}</p>
              <div>
                <p className="font-mono text-red-600 mb-2">TECH STACK</p>
                <ul className="flex flex-row flex-wrap gap-2">
                  {stack[index].map((tech, key) => (
                    <li
                      key={key}
                      className="rounded-3xl px-2 py-1 font-mono border border-black text-sm md:text-base"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
