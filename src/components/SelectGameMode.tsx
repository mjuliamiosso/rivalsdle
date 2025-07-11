import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface SelectGameModeProps {
  background: string;
  link: string;
  icon: string;
  mode: string;
  description: string;
}

const SelectGameMode: FC<SelectGameModeProps> = ({
  background,
  link,
  icon,
  mode,
  description,
}) => {
  return (
    <Link
      className="flex flex-row-reverse items-center modeShape w-[350px] justify-between px-10 py-2 cursor-pointer lg:flex-col lg:py-10 lg:px-0 lg:w-[260px] lg:justify-start lg:gap-5 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
      href={link}
    >
      {/* Icon */}
      <div className="relative w-[55px] h-[55px] lg:w-[180px] lg:h-[170px]">
        <Image layout="fill" src={icon} alt="icon" className="object-contain" />
      </div>

      {/* Text */}
      <div className="lg:text-center">
        <p className="text-xl uppercase font-bold lg:text-2xl lg:-ml-3.5">
          {mode}
        </p>
        <p className="hidden lg:block lg:uppercase lg:w-[200px] lg:-ml-4 leading-tight">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SelectGameMode;
