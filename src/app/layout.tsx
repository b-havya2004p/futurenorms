import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.futurenorms.in"),

  title: "FutureNorms Talent Solutions | Executive Recruitment",

  description:
    "FutureNorms connects organizations with exceptional mid-level to senior leadership talent across IT, Manufacturing, Engineering, Non-IT, BFSI and EdTech industries through precision hiring solutions.",

  openGraph: {
    title: "FutureNorms Talent Solutions | Executive Recruitment",
    description:
      "Connecting organizations with exceptional mid-level to senior leadership talent through precision hiring solutions.",
    url: "https://www.futurenorms.in",
    siteName: "FutureNorms",
    images: [
      {
        url: "/64b7d7b3-f762-4749-987c-b9cbe88abe8c.png",
        width: 1200,
        height: 630,
        alt: "FutureNorms Talent Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FutureNorms Talent Solutions | Executive Recruitment",
    description:
      "Connecting organizations with exceptional leadership talent.",
    images: ["/64b7d7b3-f762-4749-987c-b9cbe88abe8c.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
