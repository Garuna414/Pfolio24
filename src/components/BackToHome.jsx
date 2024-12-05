import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {
  return (
    <div className="bg-white h-[60px] p-3 flex flex-row">
      <Link
        to="/home"
        className="px-3 py-2 rounded-3xl border border-black hover:scale-105 hover:bg-red-600 hover:shadow-md hover:shadow-black hover:text-white font-heading transition-all ease-in-out duration-300 flex flex-col items-center justify-center"
      >
        <p className="my-auto">&lt;--</p>
      </Link>
    </div>
  );
}
