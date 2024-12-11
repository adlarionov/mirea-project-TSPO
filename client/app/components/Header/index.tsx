"use client";

import { Input } from "../../../components/ui/input";

import { useEffect, useState } from "react";
import LogoTitle from "../../shared/Logo";
import Link from "next/link";
import Dropdown from "../../shared/Dropdown";
import { DropdownItem } from "../../types/components";
import {
  ChevronDown,
  ChevronUp,
  CircleUser,
  ShoppingCart,
  Search,
  X,
} from "lucide-react";

import { getToken } from "@/utils/functions/token";
import Image from "next/image";

import Burger from "@/utils/icons/burger.svg";
import classNames from "classnames";

const dropdownItems: DropdownItem[] = [
  { title: "Мужское" },
  { title: "Женское" },
  { title: "Детское", isSeparated: true },
];

export default function Header() {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [redirectLink, setRedirectLink] = useState<null | string>(null);

  const [isInputVisibleOnMobile, setIsInputVisibleOnMobile] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (!token) setRedirectLink("/login");
  }, []);

  const DropdownButton = (
    <>
      <p>Каталог</p>
      {isDropDownOpened ? <ChevronUp /> : <ChevronDown />}
    </>
  );

  return (
    <header className="flex items-center justify-between sm:justify-normal px-4 sm:px-24 py-9 gap-2 sm:gap-10 w-full">
      <div className="flex sm:inline gap-4 relative">
        <Image
          src={Burger}
          alt={Burger}
          className="sm:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        />
        {isMobileMenuOpened ? (
          <div className="absolute top-10 z-10 bg-white flex flex-col items-center w-52 gap-1">
            <Link href={"/"}>Скидки</Link>
            <Link href={"/"}>Новинки</Link>
            <Link href={"/"}>Бренды</Link>
          </div>
        ) : null}
        {isInputVisibleOnMobile ? null : <LogoTitle fontSize={24} />}
      </div>
      <div className="hidden sm:flex items-center gap-6">
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
        className={classNames("sm:inline", {
          "min-w-[300px]": !isInputVisibleOnMobile,
          hidden: !isInputVisibleOnMobile,
        })}
      />
      <div className="flex items-center gap-3">
        {isInputVisibleOnMobile ? (
          <div onClick={() => setIsInputVisibleOnMobile(false)}>
            <X className="sm:hidden" />
          </div>
        ) : (
          <div onClick={() => setIsInputVisibleOnMobile(true)}>
            <Search className="sm:hidden" />
          </div>
        )}
        <Link href={redirectLink ?? "/cart"}>
          <ShoppingCart />
        </Link>
        <Link href={redirectLink ?? "/profile"}>
          <CircleUser />
        </Link>
      </div>
    </header>
  );
}
