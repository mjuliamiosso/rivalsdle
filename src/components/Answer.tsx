import React, { FC } from "react";
import Image from "next/image";

interface AnswerProps {
  character: string;
  name: string;
  nameBackground: string;
}

const Answer: FC<AnswerProps> = ({ character, name, nameBackground }) => {
  return (
    <div className="flex">
      {/* Image */}
      <div className="answerIcon -mt-1 relative inset-[2px] w-[81px] h-[73px] bg-no-repeat bg-cover bg-center">
        <Image
          layout="fill"
          src={character}
          alt="icon"
          className="object-cover"
        />
      </div>
      <p
        style={{ backgroundColor: `${nameBackground}` }}
        className="answerName flex items-center justify-center text-sm italic text-center w-[167px] h-[73px] ml-0.5 -mt-0.5 pl-1 pr-4 font-medium"
      >
        {name}
      </p>
    </div>
  );
};

export default Answer;
