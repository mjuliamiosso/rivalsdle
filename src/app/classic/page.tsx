import ClassicAnswer from "@/components/ClassicAnswer";
import React from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ModeNav from "@/components/ModeNav";
import Link from "next/link";

const answers = [
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },

  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  {
    character: "/spider-man.jpg",
    gender: "Male",
    genderColor: "#5a9a30",
    role: "Duelist",
    roleColor: "#5a9a30",
    alignment: "Hero",
    alignmentColor: "#5a9a30",
    species: "Human",
    speciesColor: "#5a9a30",
    release: "2024",
    releaseColor: "#5a9a30",
  },
  
];

const page = () => {
  return (
    <section className="modesBackground">
      <div className="container mx-auto py-20 px-5 flex flex-col gap-6 items-center min-h-screen">
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
          Follow the Trail. Uncover the hero... or the villain
        </p>
        {/* Search Bar */}
        <SearchBar />
        {/* Game */}
        <div className="flex flex-col gap-5">
          {/* Info */}
          <div className="flex flex-col gap-1">
            {/* Table */}
            <div className="flex items-center text-sm font-medium">
              {/* Character */}
              <p className="classicShape w-[89.5px] flex items-center justify-center italic">
                Character
              </p>
              {/* Gender */}
              <p className="classicShape w-[89.5px] flex items-center justify-center italic">
                Gender
              </p>
              {/* Role */}
              <p className="classicShape w-[89.5px] flex items-center justify-center italic">
                Role
              </p>
              {/* Alignment */}
              <p className="classicShape w-[89.5px] flex items-center justify-center italic">
                Alignment
              </p>
              {/* Species */}
              <p className="classicShape w-[89.5px] flex items-center justify-center italic">
                Species
              </p>
              {/* Release */}
              <p className="classicShape w-[89.5px] flex items-center justify-center italic">
                Release
              </p>
            </div>
            {/* Line */}
            <div className="relative">
              <span className="square -right-5 -top-[5px]"></span>
              <hr />
              <span className="square -left-5 -top-[5px]"></span>
            </div>
          </div>

          {/* Guesses */}
          <div className="flex flex-col gap-3">
            {answers.map((answer, index) => (
              <ClassicAnswer
                key={index}
                character={answer.character}
                gender={answer.gender}
                genderColor={answer.genderColor}
                role={answer.role}
                roleColor={answer.roleColor}
                alignment={answer.alignment}
                alignmentColor={answer.alignmentColor}
                species={answer.species}
                speciesColor={answer.speciesColor}
                release={answer.release}
                releaseColor={answer.releaseColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
