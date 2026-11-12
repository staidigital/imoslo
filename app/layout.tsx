import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "IMO Oslo – Informasjonsteknologi og medieproduksjon",
  description:
    "Alt om utdanningsprogrammet informasjonsteknologi og medieproduksjon (IM) i Oslo – fag, skoler, læreplass og veien videre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
