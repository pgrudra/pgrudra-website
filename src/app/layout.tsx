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
