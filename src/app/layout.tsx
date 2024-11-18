// src/app/layout.tsx

import type { Metadata } from "next";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ui-utils/ScrollToTop";
import ToastContainers from "@/components/common/Toast";

// metadata
import { metaDataLinks } from "@/contexts/metaData";
import { keywords } from "@/contexts/keywords";
import Header from "@/components/common/Header/Header";

export const metadata: Metadata = {
  title: "Zobaidul Kazi | Developer Portfolio",
  description: "Zobaidul Kazi - Innovative Software & Mechanical Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={metaDataLinks.faviconLinkAppleTouchIcon}
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={metaDataLinks.faviconLink32x32}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={metaDataLinks.faviconLink16x16}
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href={metaDataLinks.androidChromeLink512x512}
        color="#5bbad5"
      />
      <meta name="keywords" content={keywords.join(", ")} />

      <body className="className={`${inter.className} antialiased`">
        <ThemeProvider attribute="class">
          <Theme>
            <ScrollToTop />
            <ToastContainers />
            {<Header />}
            <div className="font-mono">{children}</div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
