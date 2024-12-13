"use client";
import React, { useState } from "react";
// utils
import { micra } from "@/utils/font";
import classNames from "classnames";
// Components
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(email);
    setEmail("");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-8 gap-4 lg:gap-0 lg:px-16 py-6 lg:py-10 bg-black rounded-2xl absolute left-4 right-4 lg:left-52 lg:right-52 -top-[15%] lg:-top-1/4 ml-auto mr-auto mb-12">
      <h1
        className={classNames(
          micra.className,
          "text-lg sm:text-2xl text-white w-full lg:w-3/5"
        )}
      >
        Оставаться в курсе последних новостей
      </h1>
      <div className="w-full lg:w-2/5 flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Введите вашу почту"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button
          disabled={!!!email}
          variant={"secondary"}
          onClick={handleSubscribe}
          type="submit"
        >
          Подписаться
        </Button>
      </div>
    </div>
  );
}
