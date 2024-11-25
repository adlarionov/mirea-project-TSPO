"use client";
import React from "react";
// Components
import RatingStar from "@/utils/icons/rating-star.svg";
import Image from "next/image";
import Verified from "@/utils/icons/verified.svg";
// Styles
import classNames from "classnames";
import classes from "./style.module.css";

export default function Comment({
  username,
  comment,
}: {
  username: string;
  comment: string;
}) {
  const rating = 5;

  Array(rating).map((star, idx) => console.log(star, idx));

  return (
    <div className="border border-gray-200 rounded-2xl px-8 pt-6 pb-12 mb-20">
      <div className="flex gap-1 mb-4">
        {Array(rating)
          .fill(0)
          .map((_, idx) => (
            <Image key={idx} src={RatingStar} alt={RatingStar} />
          ))}
      </div>
      <div className="flex gap-1 mb-3">
        <h3 className="font-bold text-xl">{username}</h3>
        <Image src={Verified} alt={"verification"} />
      </div>
      <p className={classNames("h-[100px]", classes.comment)}>{comment}</p>
    </div>
  );
}
