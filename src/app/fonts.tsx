import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const gillSans = localFont({
  src: [
    {
      path: "./fonts/gill-sans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/gill-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gill-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans-display",
});
