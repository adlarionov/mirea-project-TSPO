import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../../components/ui/dropdown-menu";
import { DropdownItem } from "../../types";

interface Dropdown {
  isDropDownOpened: boolean;
  setIsDropDownOpened: (open: boolean) => void;
  dropdownItems: DropdownItem[];
  dropdownButton: React.ReactNode;
}

export default function Dropdown({
  isDropDownOpened,
  setIsDropDownOpened,
  dropdownItems,
  dropdownButton,
}: Dropdown) {
  return (
    <DropdownMenu open={isDropDownOpened} onOpenChange={setIsDropDownOpened}>
      <DropdownMenuTrigger className="flex gap-1">
        {dropdownButton}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.isSeparated && <DropdownMenuSeparator />}
            <DropdownMenuItem>{item.title}</DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
