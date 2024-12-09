import { Currency } from "@/types/product";

export default function chooseCurrency(currency: Currency) {
  switch (currency) {
    case "EUR":
      return "€";
    case "RUB":
      return "₽";
    case "USD":
    default:
      return "$";
  }
}
