"use client";
import React from "react";
// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ui/components/carousel";
import Comment from "./Comment";
// utils
import { micra } from "@/utils/font";
import classNames from "classnames";
import Autoplay from "embla-carousel-autoplay";

export default function Feedback() {
  return (
    <div className="px-24 mb-20">
      <div className="mb-10">
        <h1 className={classNames(micra.className, "text-[32px]")}>
          Наши довольные покупатели
        </h1>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem key={0} className="basis-1/3">
            <Comment
              key={0}
              comment="«Я поражена качеством и стилем одежды, которую я получила на Shop.co. От повседневной одежды до элегантных платьев — каждая вещь, которую я купила, превзошла все мои ожидания»."
              username="Елена М."
            />
          </CarouselItem>
          <CarouselItem key={1} className="basis-1/3">
            <Comment
              key={1}
              comment="«Раньше найти одежду, которая соответствовала бы моему личному стилю, было непросто, пока я не открыл для себя Shop.co. Диапазон предлагаемых ими вариантов действительно впечатляет, удовлетворяя самые разные вкусы и случаи»."
              username="Алексей К."
            />
          </CarouselItem>
          <CarouselItem key={2} className="basis-1/3">
            <Comment
              key={2}
              comment="«Как человек, который всегда ищет уникальные модные вещи, я очень рад, что наткнулся на Shop.co. Выбор одежды не только разнообразен, но и соответствует последним тенденциям»."
              username="Кирилл Б."
            />
          </CarouselItem>
          <CarouselItem key={3} className="basis-1/3">
            <Comment
              key={3}
              comment="«Раньше найти одежду, которая соответствовала бы моему личному стилю, было непросто, пока я не открыл для себя Shop.co. Диапазон предлагаемых ими вариантов действительно впечатляет, удовлетворяя самые разные вкусы и случаи»."
              username="Джон А."
            />
          </CarouselItem>
          <CarouselItem key={4} className="basis-1/3">
            <Comment
              key={4}
              comment="«Я поражена качеством и стилем одежды, которую я получила на Shop.co. От повседневной одежды до элегантных платьев — каждая вещь, которую я купила, превзошла все мои ожидания»."
              username="Антон Л."
            />
          </CarouselItem>
          <CarouselItem key={5} className="basis-1/3">
            <Comment
              key={5}
              comment="«Как человек, который всегда ищет уникальные модные вещи, я очень рад, что наткнулся на Shop.co. Выбор одежды не только разнообразен, но и соответствует последним тенденциям»."
              username="Юлия Б."
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
