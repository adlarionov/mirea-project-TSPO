import { StaticImageData } from "next/image";

export interface Good {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  rating: number;
  price: number;
  currency: Currency;
  discount?: number;
  category?: string;
}

export type Currency = "USD" | "RUB" | "EUR";
