import type { Metadata } from "next";
import "./globals.css";

import Header from "./Header";

export const metadata: Metadata = {
  title: "Najm",
  description: "Tools for learning Al-Quran Al-Karim developed by Benstitou Sofiane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header/>
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
