import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeCraft",
  description: "Online course platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}</body>
    </html>
  );
}
