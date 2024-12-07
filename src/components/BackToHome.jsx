import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className="bg-white h-[60px] p-3 flex flex-row">
      <Link
        to="/home"
        className="px-3 rounded-3xl border border-black hover:scale-105 hover:bg-slate-100 hover:shadow-sm hover:shadow-black hover:text-white font-heading transition-all ease-in-out duration-100 flex flex-col items-center justify-center"
      >
        <img
          src="https://img.icons8.com/ios-filled/100/long-arrow-left.png"
          alt="Back"
          className="max-w-7"
        />
      </Link>
    </div>
  );
}
