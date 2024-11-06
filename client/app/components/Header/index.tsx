"use client";

import { CircleUser, ShoppingCart } from "lucide-react";
import { Input } from "../../../components/ui/input";

import { useState } from "react";
import LogoTitle from "../../shared/Logo";
import Link from "next/link";
import Dropdown from "../../shared/Dropdown";
import { DropdownItem } from "../../types";
import { ChevronDown, ChevronUp } from "lucide-react";

const dropdownItems: DropdownItem[] = [
  { title: "Мужское" },
  { title: "Женское" },
  { title: "Детское", isSeparated: true },
];

export default function Header() {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const DropdownButton = (
    <>
      <p>Каталог</p>
      {isDropDownOpened ? <ChevronUp /> : <ChevronDown />}
    </>
  );

  return (
    <header className="flex items-center px-24 py-9 gap-10 w-full">
      <LogoTitle />
      <div className="flex items-center gap-6">
        <Dropdown
          dropdownButton={DropdownButton}
          isDropDownOpened={isDropDownOpened}
          setIsDropDownOpened={setIsDropDownOpened}
          dropdownItems={dropdownItems}
        />
        <Link href={"/"}>Скидки</Link>
        <Link href={"/"}>Новинки</Link>
        <Link href={"/"}>Бренды</Link>
      </div>
      <Input
        type="text"
        placeholder="Найти продукт..."
        className=" min-w-[300px]"
      />
      <div className="flex items-center gap-3">
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <Link href="/profile">
          <CircleUser />
        </Link>
      </div>
    </header>
  );
}
