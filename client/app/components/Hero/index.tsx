import Image from "next/image";
import React from "react";
import Star from "../../utils/icons/star.svg";
import classes from "./styles.module.scss";
import classNames from "classnames";

export default function Hero() {
  return (
    <div className={`flex items-center justify-between`}>
      <div className={classNames("relative h-full w-full", classes.bgHero)}>
        test
        <Image
          src={Star}
          alt="star icon"
          className="absolute left-[52%] top-[40%] w-[5%]"
        />
        <Image
          src={Star}
          alt="star icon"
          className="absolute left-[85%] top-[10%] w-[8%]"
        />
      </div>
    </div>
  );
}
