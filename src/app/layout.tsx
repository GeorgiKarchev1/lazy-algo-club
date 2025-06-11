import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Lazy Algo Club - Learn DSA Without Trying Too Hard",
  description: "The lazy way to master data structures and algorithms. Daily 1-minute challenges with visual explanations and zero pressure.",
  keywords: ["algorithms", "data structures", "DSA", "coding", "programming", "learning", "education"],
  authors: [{ name: "Lazy Algo Club" }],
  creator: "Lazy Algo Club",
  openGraph: {
    title: "Lazy Algo Club",
    description: "Learn algorithms without trying too hard. DSA for humans, not grinders.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazy Algo Club",
    description: "The lazy way to master data structures and algorithms",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-background font-sans`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
