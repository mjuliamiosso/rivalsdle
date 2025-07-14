import Link from "next/link";
import Image from "next/image";
import React from "react";

const ModeNav = () => {
  return (
    <div className="flex">
      {/* Classic */}
      <Link
        className="flex items-center justify-center modeShape bg-[url('/classic-bg.png')] bg-cover bg-center w-[61.94px] h-[50.3px] "
        href={"/classic"}
      >
        <div className="relative w-[39.78px] h-[39.78px]">
          <Image
            layout="fill"
            src="/classic.png"
            alt="icon"
            className="object-contain"
          />
        </div>
      </Link>
      {/* Quote */}
      <Link
        className="flex items-center justify-center modeShape bg-[url('/quote-bg.png')] bg-cover bg-center w-[61.94px] h-[50.3px] "
        href={"/quote"}
      >
        <div className="relative w-[39.78px] h-[39.78px]">
          <Image
            layout="fill"
            src="/quote.png"
            alt="icon"
            className="object-contain"
          />
        </div>
      </Link>
      {/* Skills */}
      <Link
        className="flex items-center justify-center modeShape bg-[url('/skills-bg.png')] bg-cover bg-center w-[61.94px] h-[50.3px] "
        href={"/skills"}
      >
        <div className="relative w-[39.78px] h-[39.78px] -ml-1.5">
          <Image
            layout="fill"
            src="/skills.png"
            alt="icon"
            className="object-contain"
          />
        </div>
      </Link>
      {/* Emoji */}
      <Link
        className="flex items-center justify-center modeShape bg-[url('/emoji-bg.png')] bg-cover bg-center w-[61.94px] h-[50.3px] "
        href={"/emoji"}
      >
        <div className="relative w-[39.78px] h-[39.78px]">
          <Image
            layout="fill"
            src="/emoji.png"
            alt="icon"
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default ModeNav;
