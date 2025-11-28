import React from "react";
import { assets } from "../assets/assets";

interface LogoProps {
  textColor?: string; // optional prop for color
}

const Logo: React.FC<LogoProps> = ({ textColor = "text-gray-800" }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={assets.logo}
        alt="Arenas Group Logo"
        className="w-10 h-10 object-contain"
      />
      <div className="leading-tight">
        <h1 className={`font-bold ${textColor} text-sm leading-none`}>
          ARENAS GROUP
        </h1>
        <h1 className={`font-bold ${textColor} text-sm leading-none`}>
          OF SCHOOLS
        </h1>
      </div>
    </div>
  );
};

export default Logo;
