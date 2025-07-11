import SelectGameMode from "@/components/SelectGameMode";
import Image from "next/image";

export default function Home() {
  const gameMode = [
    {
      background: "/classic-bg.png",
      icon: "/classic.png",
      mode: "Classic",
      description: "Get hints with each guess.",
      link: "/classic",
    },
    {
      background: "/quote-bg.png",
      icon: "/quote.png",
      mode: "Quote",
      description: "Guess the speaker from a quote.",
      link: "/quote",
    },
    {
      background: "/skills-bg.png",
      icon: "/skills.png",
      mode: "skills",
      description: "Identify the character by their skill icon.",
      link: "/skills",
    },
    {
      background: "/emoji-bg.png",
      icon: "/emoji.png",
      mode: "emoji",
      description: "Decode the emojis to find the character.",
      link: "/emoji",
    },
  ];

  return (
    <div className="marvelBackground">
      <div className="container mx-auto px-5 flex flex-col gap-6 items-center justify-center h-screen ">
        {/* Logo */}
        <div className="relative w-[350px] h-[100px] lg:w-[500px] lg:h-[130px]">
          <Image
            layout="fill"
            src={"/logo-white.png"}
            alt="logo"
            className="object-contain"
          ></Image>
        </div>
        <h1 className="uppercase italic text-center text-xl lg:text-2xl">
          Guess your favorite super hero or villain
        </h1>
        {/* Game Modes */}
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-0">
          {gameMode.map((modeData, index) => (
            <SelectGameMode
              key={index}
              background={modeData.background}
              icon={modeData.icon}
              mode={modeData.mode}
              description={modeData.description}
              link={modeData.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
