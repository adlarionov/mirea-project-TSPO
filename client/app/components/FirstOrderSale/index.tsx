"use client";
import styles from "./styles.module.scss";
import close from "../../utils/icons/close.svg";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function FirstOrderSale() {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Зарегистрируйтесь и получите скидку 20% на первый заказ.
        </p>
        <Link href="/register" className={styles.underline}>
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
