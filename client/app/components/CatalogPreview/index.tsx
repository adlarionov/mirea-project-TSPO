import React from "react";
import { micra } from "@/utils/font";
import classNames from "classnames";

export default function CatalogPreview({ title }: { title: string }) {
  return (
    <div className="mt-16">
      <h1 className={classNames(micra.className, "mb-14")}>{title}</h1>
    </div>
  );
}
