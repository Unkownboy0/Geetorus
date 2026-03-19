import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/animations/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geetorus.com"),
  title: {
    default: "Geetorus — Cybersecurity, AI & Education",
    template: "%s | Geetorus",
  },
  description:
    "Geetorus is a next-generation cybersecurity, AI tools, and education startup. We protect, educate, and innovate — building the future of digital security.",
  keywords: [
    "Geetorus",
    "cybersecurity",
    "ethical hacking",
    "AI security",
    "penetration testing",
    "cybersecurity training",
    "Udhayakumar",
    "Erode",
    "Tamil Nadu",
    "India",
  ],
  authors: [{ name: "Geetorus", url: "https://geetorus.com" }],
  creator: "Geetorus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geetorus.com",
    siteName: "Geetorus",
    title: "Geetorus — Building the Future of Cybersecurity & AI",
    description:
      "Next-generation cybersecurity, AI tools, and education platform from India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Geetorus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geetorus — Cybersecurity & AI",
    description: "Next-gen cybersecurity, AI tools, and education startup.",
    creator: "@geetorus",
  },
  robots: { index: true, follow: true },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
