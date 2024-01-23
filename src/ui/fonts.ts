import { Roboto, Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
  variable: "--font-roboto",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "900"],
  variable: "--font-inter",
});
