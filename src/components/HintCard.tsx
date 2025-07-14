import React, { FC, ReactNode } from "react";

interface HintCardProps {
  children: ReactNode;
}

const HintCard: FC<HintCardProps> = ({ children }) => {
  return (
    <div className="hintShape w-[378px] h-[100px] bg-[var(--background-color)] flex items-center justify-center">
      <p className="text-xl italic px-8 text-center">{children}</p>
    </div>
  );
};

export default HintCard;
