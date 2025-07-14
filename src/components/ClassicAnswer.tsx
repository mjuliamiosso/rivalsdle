import React, { FC } from "react";
import Image from "next/image";

interface ClassicAnswerProps {
  character: string;
  gender: string;
  genderColor: string;
  role: string;
  roleColor: string;
  alignment: string;
  alignmentColor: string;
  species: string;
  speciesColor: string;
  release: string;
  releaseColor: string;
}

const ClassicAnswer: FC<ClassicAnswerProps> = ({
  character,
  gender,
  genderColor,
  role,
  roleColor,
  alignment,
  alignmentColor,
  species,
  speciesColor,
  release,
  releaseColor,
}) => {
  return (
    <div className="flex items-center text-sm font-medium">
      {/* Image */}
      <div className="classicShape -mt-1 relative inset-[2px] w-[89.5px] h-[75px] bg-no-repeat bg-cover bg-center">
        <Image
          layout="fill"
          src={character}
          alt="icon"
          className="object-cover"
        />
      </div>
      {/* Gender */}
      <p
        className="classicShape px-2 w-[89.5px] h-[75px] flex items-center justify-center italic"
        style={{ backgroundColor: `${genderColor}` }}
      >
        {gender}
      </p>
      {/* Role */}
      <p
        className="classicShape px-2 text-center w-[89.5px] h-[75px] flex items-center justify-center italic"
        style={{ backgroundColor: `${roleColor}` }}
      >
        {role}
      </p>
      {/* Alignment */}
      <p
        className="classicShape px-2 w-[89.5px] h-[75px] flex items-center justify-center italic"
        style={{ backgroundColor: `${alignmentColor}` }}
      >
        {alignment}
      </p>
      {/* Species */}
      <p
        className="classicShape px-2 w-[89.5px] h-[75px] flex items-center justify-center italic"
        style={{ backgroundColor: `${speciesColor}` }}
      >
        {species}
      </p>
      {/* Release */}
      <p
        className="classicShape px-2 w-[89.5px] h-[75px] flex items-center justify-center italic"
        style={{ backgroundColor: `${releaseColor}` }}
      >
        {release}
      </p>
    </div>
  );
};

export default ClassicAnswer;
