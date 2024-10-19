"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../../components/ui/dropdown-menu";
import { useState } from "react";
import LogoTitle from "../Logo";
import Link from "next/link";

export default function Header() {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  console.log(isDropDownOpened);

  return (
    <header className="flex items-center px-24 py-9">
      <LogoTitle />
      <div className="mt-3 flex items-center gap-6">
        <DropdownMenu
          open={isDropDownOpened}
          onOpenChange={setIsDropDownOpened}
        >
          <DropdownMenuTrigger className="flex gap-1 ml-10">
            <p>Каталог</p>
            {isDropDownOpened ? <ChevronUp /> : <ChevronDown />}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Мужское</DropdownMenuItem>
            <DropdownMenuItem>Женское</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Детское</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={"/"}>Скидки</Link>
        <Link href={"/"}>Новинки</Link>
        <Link href={"/"}>Бренды</Link>
      </div>
    </header>
  );
}
