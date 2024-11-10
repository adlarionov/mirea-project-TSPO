import React from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import Link from "next/link";

export default function DressStyleCard({
  img,
  title,
  href,
  isWideCard = false,
}: {
  img: StaticImageData;
  title: string;
  href: string;
  isWideCard?: boolean;
}) {
  return (
    <div
      className={classNames("relative h-[290px]", {
        "grid-cols-subgrid col-span-2": isWideCard,
      })}
    >
      <Link href={href}>
        <h1 className={"absolute left-9 top-6 font-bold text-2xl"}>{title}</h1>
        <Image
          className="object-cover h-full rounded-2xl"
          src={img}
          alt={"dress style"}
        />
      </Link>
    </div>
  );
}
