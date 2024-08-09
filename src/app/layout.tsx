import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="01eb0dac-f0ce-4d74-bc83-f996be28ee95"
        ></script>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
