import Image from "next/image";
import React from "react";
import classes from "./styles.module.scss";

import Ck from "@/utils/icons/brands/ck.svg";
import Versace from "@/utils/icons/brands/versace.svg";
import Gucci from "@/utils/icons/brands/gucci.svg";
import Zara from "@/utils/icons/brands/zara.svg";
import Prada from "@/utils/icons/brands/prada.svg";
import classNames from "classnames";

export default function BrandsLine() {
  return (
    <div className="bg-black overflow-hidden">
      <div
        className={classNames(
          " w-full py-12 px-24 flex gap-28 items-center justify-center",
          classes.rollingContainer
        )}
      >
        <Image src={Versace} alt="brand" />
        <Image src={Zara} alt="brand" />
        <Image src={Gucci} alt="brand" />
        <Image src={Prada} alt="brand" />
        <Image src={Ck} alt="brand" />
      </div>
    </div>
  );
}
