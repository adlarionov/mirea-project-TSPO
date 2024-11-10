import React from "react";
// Images
import Casual from "@/utils/images/dress-styles/casual.png";
import Party from "@/utils/images/dress-styles/party.png";
import Gym from "@/utils/images/dress-styles/gym.png";
import Formal from "@/utils/images/dress-styles/formal.png";

import { micra } from "@/utils/font";
import classNames from "classnames";
import DressStyleCard from "./components/DressStyleCard";

export default function DressStyles() {
  return (
    <div className="mx-24 px-16 py-20 bg-gray-100 rounded-2xl mb-20">
      <h1
        className={classNames(micra.className, "text-[32px] text-center mb-16")}
      >
        Найди свой стиль
      </h1>
      <div className="grid gap-5 grid-cols-3">
        <DressStyleCard
          href={"/catalog?style=casual"}
          img={Casual}
          title="Кэжуал"
        />
        <DressStyleCard
          href={"/catalog?style=party"}
          img={Party}
          title="Вечерний"
          isWideCard={true}
        />
        <DressStyleCard
          href={"/catalog?style=formal"}
          img={Formal}
          title="Формальный"
          isWideCard={true}
        />
        <DressStyleCard
          href={"/catalog?style=gym"}
          img={Gym}
          title="Спортивный"
        />
      </div>
    </div>
  );
}
