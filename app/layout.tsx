import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// We use the Inter font for a clean, modern look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amer Mustafa | Front-End Developer",
  description:
    "Front-End Developer and Computer Science graduate specializing in React, Next.js, TypeScript and responsive web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* All our page sections will render inside this main tag */}
        <main className="min-h-screen flex flex-col pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}