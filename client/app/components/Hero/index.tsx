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
          "relative min-h-[662px] h-full w-full",
          classes.bgHero
        )}
      >
        <Image
          src={Star}
          alt="star icon"
          className={classNames("absolute left-[52%] top-[40%] w-[5%]")}
        />
        <Image
          src={Star}
          alt="star icon"
          className={classNames("absolute left-[85%] top-[10%] w-[8%]")}
        />
        <div className="mt-24 ml-28">
          <h1
            className={classNames(
              "text-[64px] max-w-[40%] leading-[64px] mb-8",
              micra.className
            )}
          >
            Одежда для каждого
          </h1>
          <p className="max-w-[40%] opacity-60 mb-8">
            Просмотрите наш разнообразный ассортимент тщательно созданной
            одежды, призванной подчеркнуть вашу индивидуальность и удовлетворить
            ваше чувство стиля.
          </p>
          <Button className="px-16 rounded-full mb-12">Купить</Button>
          <div className=" flex gap-8">
            <HeroCard title="200+" subtitle="Всемирных брендов" />
            <div className="w-0.5 bg-black opacity-10 h-14" />
            <HeroCard title="2,000+" subtitle="Высококачественных товаров" />
            <div className="w-0.5 bg-black opacity-10 h-14" />
            <HeroCard title="30,000+" subtitle="Довольных покупателей" />
          </div>
        </div>
      </div>
    </div>
  );
}
