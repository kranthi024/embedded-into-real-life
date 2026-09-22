import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Embedded Into Real Life",
  description:
    "Smart embedded systems, IoT solutions and intelligent automation for real-world applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-black text-white antialiased">

        {/* NAVIGATION BAR */}
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

            {/* LOGO / BRAND */}
            <Link href="/" className="group">
              <div className="text-xl font-bold tracking-wider">
                EMBEDDED
              </div>
              <div className="text-xs tracking-[0.35em] text-gray-400">
                INTO REAL LIFE
              </div>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Solutions
              </Link>

              <Link
                href="/products"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Contact
              </Link>
            </nav>

            {/* CUSTOMER LOGIN */}
            <Link
              href="/login"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-white hover:bg-white hover:text-black"
            >
              Customer Login
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>
                <div className="font-bold tracking-wider">
                  EMBEDDED
                </div>
                <div className="text-xs tracking-[0.3em] text-gray-500">
                  INTO REAL LIFE
                </div>
              </div>

              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Embedded Into Real Life.
                All rights reserved.
              </div>

            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}