"use client";
import { Button } from "@/ui/button";
import React from "react";
import { micra } from "@/utils/font";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-2">
      <h1 className={classNames(micra.className, "text-4xl")}>
        Упс, ошибка 404
      </h1>
      <p className="text-lg text-center mb-5">
        Похоже вы случайно попали на не существующую страницу
      </p>
      <Button onClick={() => router.push("/")}>На главную</Button>
    </div>
  );
}
