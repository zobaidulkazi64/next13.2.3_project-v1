// components/RootLayout.tsx

import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { metaDataLinks, metaDataTitle } from "@/contexts/metaData";
import { keywords } from "@/contexts/keywords";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: metaDataTitle.title,
  description: metaDataTitle.description,
  keywords: keywords.join(",")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}