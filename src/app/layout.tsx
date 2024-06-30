import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import DarkModeToggle from "@/components/ui-utils/DarkModeToggle";
import ScrollToTop from "@/components/ui-utils/ScrollToTop";
import GorgeousBackground from "@/components/ui-utils/GorgeousBackground";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// metadata
import { metaDataLinks } from "@/contexts/metaData";
import { keywords } from "@/contexts/keywords";
import { metaDataTitle } from "@/contexts/metaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: metaDataTitle.title,
  description: metaDataTitle.description,
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={metaDataLinks.faviconLinkAppleTouchIcon}
      />
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
      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href={metaDataLinks.androidChromeLink512x512}
        color="#5bbad5"
      />
      {/* keywords */}
      <meta name="keywords" content={keywords.join(", ")} />
      {/* social links */}

      <meta name="twitter:card" content="zobaidulkazi" />
      <body className={inter.className}>
        <div className=" ">
          <Sidebar />
          <main className="ml-0 md:ml-64 transition-all duration-300 relative">
            <div className="fixed top-4 right-4 z-50">
              <DarkModeToggle />
            </div>
            <ScrollToTop />
            <div>
              <GorgeousBackground>
                <ToastContainer />
                {children}
              </GorgeousBackground>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
