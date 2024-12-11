import React from "react";
import { micra } from "@/utils/font";
import classNames from "classnames";
import { Good } from "@/types/product";
import CatalogListItem from "./components/CatalogListItem";
import { Button } from "@/ui/button";

export default function CatalogPreview({
  title,
  goods,
  isSeparated = false,
}: {
  title: string;
  goods: Good[];
  isSeparated?: boolean;
}) {
  return (
    <div className="mt-10 sm:mt-16 px-12 sm:px-24">
      <h1
        className={classNames(
          micra.className,
          "mb-4 sm:mb-14 sm:text-center text-2xl sm:text-[32px]"
        )}
      >
        {title}
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-9">
        {goods.map((good) => (
          <CatalogListItem good={good} key={good.id} />
        ))}
      </div>
      <div className="flex justify-center mb-16">
        <Button className="w-full sm:w-fit sm:px-8 py-6 rounded-full">
          Посмотреть все
        </Button>
      </div>
      {isSeparated ? <hr className="h-0.5 w-full bg-gray-100" /> : null}
    </div>
  );
}
