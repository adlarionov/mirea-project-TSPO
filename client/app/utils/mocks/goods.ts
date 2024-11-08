import { Good } from "@/types";
import Clothes from "@/utils/images/clothes.png";
import Clothes1 from "@/utils/images/clothes-1.png";
import Clothes2 from "@/utils/images/clothes-2.png";
import Clothes3 from "@/utils/images/clothes-3.png";

export const goods: Good[] = [
  {
    id: 0,
    image: Clothes,
    currency: "USD",
    price: 120,
    rating: 4.5,
    title: "T-SHIRT WITH TAPE DETAILS",
    category: "t-shirts",
  },
  {
    id: 1,
    image: Clothes1,
    currency: "USD",
    price: 260,
    rating: 3.5,
    title: "SKINNY FIT JEANS",
    discount: 0.1,
    category: "jeans",
  },
  {
    id: 2,
    image: Clothes2,
    currency: "USD",
    price: 180,
    rating: 4,
    title: "CHECKERED SHIRT",
    category: "shirts",
  },
  {
    id: 3,
    image: Clothes3,
    currency: "USD",
    price: 160,
    rating: 4.5,
    title: "SLEEVE STRIPED T-SHIRT",
    discount: 0.3,
    category: "t-shirts",
  },
];
