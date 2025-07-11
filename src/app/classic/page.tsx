import ClassicAnswer from "@/components/ClassicAnswer";
import React from "react";

const page = () => {
  return (
    <div>
      Classic
      <ClassicAnswer
        character={"/spider-man.jpg"}
        gender={"Male"}
        genderColor={"#5a9a30"}
        role={"Duelist"}
        roleColor={"#5a9a30"}
        alignment={"Hero"}
        alignmentColor={"#5a9a30"}
        species={"Human"}
        speciesColor={"#5a9a30"}
        release={"2024"}
        releaseColor={"#5a9a30"}
      />
    </div>
  );
};

export default page;
