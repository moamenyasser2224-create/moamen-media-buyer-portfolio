import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/site-data";

export const metadata: Metadata = {
  title: `${profile.name} | Media Buyer & Performance Marketer`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name} | Media Buyer & Performance Marketer`,
    description: profile.headline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Media Buyer & Performance Marketer`,
    description: profile.headline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
