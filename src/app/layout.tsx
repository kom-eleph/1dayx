import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP, Space_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-noto",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "1 day X — 偶然の交差が、そっと起きるような余白。",
  description: "目的も、評価もない。何者でもないまま、ただそこにいられる場所。desk · bar · topic — Tokyo",
  icons: {
    icon: '/favicon.ico',
    apple: '/icon_512.png',
  },
  openGraph: {
    type: "website",
    title: "1 day X",
    description: "目的も、評価もない。何者でもないまま、ただそこにいられる場所。desk · bar · topic — Tokyo",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "1 day X",
    description: "目的も、評価もない。何者でもないまま、ただそこにいられる場所。desk · bar · topic — Tokyo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${cormorant.variable} ${notoSerifJP.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}