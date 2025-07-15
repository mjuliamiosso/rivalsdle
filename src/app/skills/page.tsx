import HintCard from "@/components/HintCard";
import ModeNav from "@/components/ModeNav";
import SearchBar from "@/components/SearchBar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Answer from "@/components/Answer";

const answers = [
  {
    character: "/spider-man.jpg",
    name: "Spider-Man",
    nameBackground: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    name: "Spider-Man",
    nameBackground: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    name: "Spider-Man",
    nameBackground: "#5a9a30",
  },
];

const page = () => {
  return (
    <section className="modesBackground">
      <div className="container mx-auto pt-20 px-5 flex flex-col gap-6 items-center min-h-screen">
        {/* Logo + Nav */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            className="relative w-[350px] h-[100px] lg:w-[500px] lg:h-[130px]"
            href={"/"}
          >
            <Image
              layout="fill"
              src={"/logo-white.png"}
              alt="logo"
              className="object-contain"
            ></Image>
          </Link>
          {/* Nav */}
          <ModeNav />
        </div>

        {/* Text */}
        <p className="text-xl font-bold italic uppercase text-center">
          Every power leaves a mark. Who does it belong to?
        </p>

        {/* Hint Balloon */}
        <HintCard>teste</HintCard>

        {/* Search Bar */}
        <SearchBar />
        {/* Game */}

        {/* Line */}
        <div className="relative w-[350px]">
          <span className="square -right-5 -top-[5px]"></span>
          <hr />
          <span className="square -left-5 -top-[5px]"></span>
        </div>

        {/* Guesses */}
        <div className="flex flex-col gap-3">
          {answers.map((answers, index) => (
            <Answer
              key={index}
              character={answers.character}
              name={answers.name}
              nameBackground={answers.nameBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
