import SelectGameMode from "@/components/SelectGameMode";

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
    <div className="container mx-auto px-5">
      Homepage
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
  );
}
