import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Prajwal Rudrakshi - Personal Website",
  description: "Personal website of Prajwal Rudrakshi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KCQCV6C86B');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KCQCV6C86B"
          strategy="afterInteractive"
        />
        <Analytics />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
