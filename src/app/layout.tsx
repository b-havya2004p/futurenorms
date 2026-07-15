import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.futurenorms.in"),

  title: {
    default: "FutureNorms | Executive Recruitment & Talent Acquisition India",
    template: "%s | FutureNorms",
  },

  description:
    "FutureNorms is a leading executive recruitment and talent acquisition company in India. We help businesses hire top talent across IT, Engineering, Manufacturing, BFSI, EdTech, Healthcare and Non-IT sectors.",

  keywords: [
    "FutureNorms",
    "Recruitment Agency India",
    "Recruitment Agency Bangalore",
    "Executive Recruitment",
    "Talent Acquisition",
    "Executive Search",
    "Leadership Hiring",
    "CXO Hiring",
    "IT Recruitment",
    "Non IT Recruitment",
    "Engineering Recruitment",
    "Manufacturing Recruitment",
    "BFSI Recruitment",
    "EdTech Recruitment",
    "Healthcare Recruitment",
    "HR Consultancy",
    "Hiring Solutions",
    "Recruitment Services",
    "Staffing Company India",
    "Placement Consultancy",
  ],

  authors: [
    {
      name: "FutureNorms",
      url: "https://www.futurenorms.in",
    },
  ],

  creator: "FutureNorms",

  publisher: "FutureNorms",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.futurenorms.in",
  },

  openGraph: {
    title: "FutureNorms | Executive Recruitment & Talent Acquisition India",

    description:
      "Helping organizations hire exceptional talent across IT, Engineering, Manufacturing, BFSI, EdTech and Non-IT sectors.",

    url: "https://www.futurenorms.in",

    siteName: "FutureNorms",

    images: [
      {
        url: "https://www.futurenorms.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "FutureNorms Talent Solutions",
        type: "image/png",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "FutureNorms | Executive Recruitment",

    description:
      "Helping organizations hire exceptional talent across India.",

    images: ["https://www.futurenorms.in/og-image.png"],
  },

  category: "Business",
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
