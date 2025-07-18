import type { Metadata } from "next";
import { Montserrat, Fredoka, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const FredokaFont = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: "700",
});

const geistSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const FiraCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LYCBO - Love Your Community, Be One",
  description:
    "Join us in spreading love and kindness in our community. Together, we can make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${FiraCode.variable} ${FredokaFont.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
