import { Currency } from "@/types";

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
