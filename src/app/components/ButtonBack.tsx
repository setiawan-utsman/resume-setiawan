import React from "react";
import LogoIcon from "../assets/icons/LogoIcon";
import { useNavigate } from "react-router-dom";
interface IButtonBack {
  className?: string;
  path?: string;
  title1?: any;
  title2?: any;
}

export default function ButtonBack({
  path = "/",
  title1,
  title2,
}: IButtonBack) {
  const navigate = useNavigate();
  return (
    <div
      className="relative group perspective-[1000px] cursor-pointer"
      onClick={() => navigate(path)}
    >
      <span className="absolute max-w-fit max-h-fit inset-0 top-8 left-20 z-10 p-0.5 border-1 border-cyan-400 bg-cyan-50 text-cyan-600 skew-y-3 dark:bg-cyan-400 dark:text-cyan-900 tracking-wider transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:translate-y-1/2 group-hover:[transform:rotateX(180deg)] rounded-lg">
        {title1}
      </span>
      <span className="rounded-lg shadow-cyan-600 shadow-lg absolute w-fit px-3 h-10 inset-0 top-8 left-20 z-10 bg-[#323237] text-white flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] opacity-0 [transform:translateY(-50%)_rotateX(90deg)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-x-0">
        {title2}
      </span>
    </div>
  );
}
