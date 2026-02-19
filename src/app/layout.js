import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dott. Soliman Saffi | Dentista",
  description:
    "Riparazione dentale, terapia canalare e implantologia con il Dott. Soliman Saffi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${cormorant.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
