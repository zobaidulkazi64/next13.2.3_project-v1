import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";
import AntdConfigProvider from "@/providers/AntdConfigProvider";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to the blog by Zobkazi",
  description: "This is the blog by Zobkazi",
  icons: { icon: "/logos/next-icon.svg" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <AntdConfigProvider>
          {" "}
          <body className={inter.className}>{children}</body>
        </AntdConfigProvider>
      </AntdRegistry>
    </html>
  );
}
