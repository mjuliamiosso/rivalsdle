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
    <div className="flex items-center">
      <div className="classicShape relative inset-[2px] w-[89.5px] h-[75px] bg-no-repeat bg-cover bg-center">
        <Image
          layout="fill"
          src={character}
          alt="icon"
          className="object-cover"
        />
      </div>
      <p
        className="classicShape w-[89.5px] h-[75px] flex items-center justify-center"
        style={{ backgroundColor: `${genderColor}` }}
      >
        {gender}
      </p>
      <p
        className="classicShape w-[89.5px] h-[75px] flex items-center justify-center"
        style={{ backgroundColor: `${roleColor}` }}
      >
        {role}
      </p>
      <p
        className="classicShape w-[89.5px] h-[75px] flex items-center justify-center"
        style={{ backgroundColor: `${alignmentColor}` }}
      >
        {alignment}
      </p>
      <p
        className="classicShape w-[89.5px] h-[75px] flex items-center justify-center"
        style={{ backgroundColor: `${speciesColor}` }}
      >
        {species}
      </p>
      <p
        className="classicShape w-[89.5px] h-[75px] flex items-center justify-center"
        style={{ backgroundColor: `${releaseColor}` }}
      >
        {release}
      </p>
    </div>
  );
};

export default ClassicAnswer;
