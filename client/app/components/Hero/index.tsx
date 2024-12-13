"use client";

import Image from "next/image";
import React from "react";
import Star from "@/utils/icons/star.svg";

import classes from "./styles.module.scss";
import classNames from "classnames";

import { micra } from "@/utils/font";
import { Button } from "@/ui/button";
import HeroCard from "./components/HeroCard";

export default function Hero() {
  return (
    <div className={`flex items-center justify-between`}>
      <div
        className={classNames(
          "relative min-h-[560px] md:min-h-[662px] h-full w-full",
          classes.bgHero
        )}
      >
        <Image
          src={Star}
          alt="star icon"
          className={classNames(
            "absolute left-[80%] sm:left-[59%] md:left-[52%] top-[72%] md:top-[40%] md:w-[5%]"
          )}
        />
        <Image
          src={Star}
          alt="star icon"
          className={classNames(
            "absolute left-[85%] top-[5%] md:top-[10%] w-[11%] md:w-[8%]"
          )}
        />
        <div className="mt-10 ml-4 md:mt-24 md:ml-28">
          <h1
            className={classNames(
              "text-3xl sm:text-[64px] sm:leading-[64px] max-w-[40%] mb-4 sm:mb-8",
              micra.className
            )}
          >
            Одежда для каждого
          </h1>
          <p className="text-sm sm:text-base md:max-w-[40%] opacity-60 mb-4 md:mb-8">
            Просмотрите наш разнообразный ассортимент тщательно созданной
            одежды, призванной подчеркнуть вашу индивидуальность и удовлетворить
            ваше чувство стиля.
          </p>
          <Button className="w-[98%] md:w-fit md:px-16 rounded-full mb-12">
            Купить
          </Button>
          <div className="items-center justify-center sm:justify-normal flex-wrap sm:flex-nowrap flex gap-4 sm:gap-8">
            <HeroCard title="200+" subtitle="Всемирных брендов" />
            <div className="hidden sm:inline w-0.5 bg-black opacity-10 h-14" />
            <HeroCard title="2,000+" subtitle="Высококачественных товаров" />
            <div className="hidden sm:inline w-0.5 bg-black opacity-10 h-14" />
            <HeroCard title="30,000+" subtitle="Довольных покупателей" />
          </div>
        </div>
      </div>
    </div>
  );
}
