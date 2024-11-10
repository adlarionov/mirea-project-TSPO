"use client";
import React from "react";
// Components
import Image from "next/image";
import Link from "next/link";
// Types
import { Good } from "@/types";
// Utils
import RatingStar from "@/utils/icons/rating-star.svg";
import RatingStarHalf from "@/utils/icons/rating-star-half.svg";
import chooseCurrency from "@/utils/functions/chooseCurrency";
import { Badge } from "@/ui/components/badge";

export default function CatalogListItem({ good }: { good: Good }) {
  const usedCurrency = chooseCurrency(good.currency);
  const parsedPrice = `${
    good.discount ? good.price * (1 - good.discount) : good.price
  }${usedCurrency}`;

  return (
    <Link href={`/catalog/${good.category}/${good.id}`} key={good.id}>
      <Image
        className="h-[300px] w-[294px] rounded-2xl mb-4"
        src={good.image}
        alt={good.title}
      />
      <div className="flex flex-col gap-1">
        <h3>{good.title}</h3>
        <div className="flex gap-1">
          {Array(Math.floor(good.rating)).fill(
            <Image src={RatingStar} alt={RatingStar} />
          )}
          {good.rating % 1 !== 0 ? (
            <Image src={RatingStarHalf} alt={RatingStarHalf} />
          ) : null}
          <p className="ml-1">
            <span className="text-gray-500">{good.rating}</span>/5
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <h4 className="font-bold text-xl">{parsedPrice}</h4>
          {good.discount ? (
            <>
              <h4 className="font-bold line-through text-2xl text-gray-500">
                {good.price}
                {usedCurrency}
              </h4>
              <Badge className="py-1" variant={"destructive"}>
                {good.discount * 100}%
              </Badge>
            </>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
