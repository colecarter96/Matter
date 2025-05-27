import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Rubik, Chivo, Pathway_Gothic_One } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import VintageWindow from "./components/VintageWindow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-rubik",
  display: 'swap',
});

const chivo = Chivo({
  subsets: ["latin"],
  weight: "300", // Light weight
  variable: "--font-chivo",
  display: 'swap',
});

const pathwayGothic = Pathway_Gothic_One({
  weight: "400", // Only available weight
  subsets: ["latin"],
  variable: "--font-pathway-gothic",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Matter.",
  description: "A place for things.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${chivo.variable} ${pathwayGothic.variable} antialiased`}
        suppressHydrationWarning
      >
        <VintageWindow>
          <Header/>
          {children}
        </VintageWindow>
      </body>
    </html>
  );
}
