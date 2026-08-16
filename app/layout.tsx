import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abrilFatface = localFont({
  src: "../public/media/fonts/AbrilFatface-Regular.woff2",
  weight: "400",
  variable: "--font-abril-fatface",
  fallback: ["Georgia", "serif"],
});

const bricolageGrotesque = localFont({
  src: "../public/media/fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  variable: "--font-bricolage-grotesque",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Maxim Grivennyy - Portfolio",
  description: "Maxim Grivennyy's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${abrilFatface.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
