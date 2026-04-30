import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP, Space_Mono } from "next/font/google";
import "./globals.css";

// ─── フォント定義（元のまま）───────────────────────────────
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

// ─── サイト基本情報 ────────────────────────────────────────
const SITE_URL = "https://1dayx.jp";
const SITE_NAME = "1 day X";
const SITE_DESCRIPTION =
  "人と、その周縁を再設計する。いつもと同じ一日を、少しだけ違う角度で終わらせる。";

// ─── Metadata（favicon・OGP・Twitter Card）────────────────
export const metadata: Metadata = {
  title: {
    default: "1 day X — 偶然の交差が、そっと起きるような余白。",
    template: "%s | 1 day X",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),

  // ── favicon ──
  icons: {
    icon: [
      { url: "/favicon.ico",     sizes: "48x48" },
      { url: "/favicon-32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/favicon-16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── OGP ──
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "1 day X — 人と、その周縁を再設計する。",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/ogp_image.png",
        width: 1200,
        height: 630,
        alt: "1 day X — いつもと同じ一日を、少しだけ違う角度で終わらせる。",
      },
    ],
    locale: "ja_JP",
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "1 day X — 人と、その周縁を再設計する。",
    description: SITE_DESCRIPTION,
    images: ["/ogp_image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// ─── Layout Component ────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${cormorant.variable} ${notoSerifJP.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
