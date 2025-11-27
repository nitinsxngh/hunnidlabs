import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunnidlabs - Great Ideas Deserve More Than Code",
  description: "We build clean, reliable, AI-powered software and stick around to make sure it works perfectly.",
  keywords: "AI, Web Development, Design, Digital, Software Development",
  authors: [{ name: "Hunnidlabs" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
