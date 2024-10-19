import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export const integralCF = localFont({
  src: "./fonts/IntegralCF-Bold.woff2",
  display: "swap",
});
