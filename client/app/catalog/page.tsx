"use client";
import { getToken } from "@/utils/functions/token";
import LogoTitle from "../shared/Logo";
import { redirect } from "next/navigation";

export default function Catalog() {
  const token = getToken();
  if (!token) redirect("/login");

  return (
    <>
      <LogoTitle />
    </>
  );
}
