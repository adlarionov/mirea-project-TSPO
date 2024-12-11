"use client";
import styles from "./styles.module.scss";
import close from "../../utils/icons/close.svg";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function FirstOrderSale() {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className="flex items-center justify-center bg-black text-white py-2 sm:py-0 sm:h-9 w-full px-2 md:px-24">
      <div className="flex items-center justify-center w-full gap-1 flex-col sm:flex-row">
        <p className="text-xs sm:text-sm text-center sm:text-start">
          Зарегистрируйтесь и получите скидку 20% на первый заказ.
        </p>
        <Link href="/register" className="text-xs sm:text-sm underline">
          Зарегистрироваться
        </Link>
      </div>
      <button onClick={() => setIsVisible(false)}>
        <Image
          className={styles.image}
          src={close}
          alt="close icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  ) : null;
}
