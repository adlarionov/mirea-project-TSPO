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
    <div className="flex flex-col sm:flex-row justify-between items-center px-8 gap-4 sm:gap-0 sm:px-16 py-6 sm:py-10 bg-black rounded-2xl absolute left-4 right-4 sm:left-52 sm:right-52 -top-[15%] sm:-top-1/4 ml-auto mr-auto mb-12">
      <h1
        className={classNames(
          micra.className,
          "text-lg sm:text-2xl text-white w-full sm:w-3/5"
        )}
      >
        Оставаться в курсе последних новостей
      </h1>
      <div className="w-full sm:w-2/5 flex flex-col gap-4">
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
