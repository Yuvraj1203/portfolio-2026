import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/shared/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuvraj Singh Rathore | Frontend Engineer",
  description:
    "A premium product-style portfolio for Yuvraj Singh Rathore, frontend engineer and design technologist.",
  metadataBase: new URL("https://yuvraj.dev"),
  openGraph: {
    title: "Yuvraj Singh Rathore | Frontend Engineer",
    description:
      "Premium interfaces, frontend architecture, motion design, and performance-focused product engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white font-sans dark:bg-zinc-950">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
