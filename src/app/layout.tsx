import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6HEYQW9H22"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-6HEYQW9H22');
        </script>
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
