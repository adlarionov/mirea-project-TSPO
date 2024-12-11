import React from "react";
import { micra } from "../../utils/font";
import classNames from "classnames";

const LogoTitle: React.FC<{ size?: number; fontSize?: number }> = ({
  size = 32,
  fontSize,
}) => {
  return (
    <h1
      className={classNames(micra.className, `text-[${size}px]`)}
      style={{ fontSize }}
    >
      SHOP.CO
    </h1>
  );
};

export default LogoTitle;
