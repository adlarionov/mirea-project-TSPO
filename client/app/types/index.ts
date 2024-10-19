import { DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";

export interface DropdownItem extends DropdownMenuItemProps {
  isSeparated?: boolean;
  title: string;
}
