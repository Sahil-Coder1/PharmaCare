import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060911",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PharmaCare — Fast, Private POS & Inventory Software for Modern Pharmacies",
  description: "PharmaCare is a fast, offline-first pharmacy POS and inventory management desktop software. Features instant search, 3-tier batch expiry radar, daily sales graphs, thermal receipt printing, and SQLite local storage with optional Dropbox cloud backup.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "PharmaCare",
    "Pharmacy POS software",
    "Pharmacy inventory management",
    "Medical store billing software",
    "Offline pharmacy software",
    "Drug expiry tracking",
    "Open source pharmacy management",
    "Retail pharmacy billing system",
    "Pharmacy GST billing"
  ],
  authors: [{ name: "Sahil Verma", url: "https://github.com/Sahil-Coder1" }],
  creator: "Sahil Verma",
  publisher: "PharmaCare",
  metadataBase: new URL("https://pharmacare.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PharmaCare — Fast, Private POS & Inventory for Modern Pharmacies",
    description: "Lightning-fast pharmacy POS, automated 3-tier batch expiry tracking, daily revenue graphs, and 100% offline privacy.",
    url: "https://pharmacare.app",
    siteName: "PharmaCare",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "PharmaCare Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PharmaCare — Modern Pharmacy POS & Inventory Software",
    description: "Fast POS checkout, 3-tier batch expiry radar, daily sales graphs, and offline SQLite storage.",
    images: ["/icon.png"],
    creator: "@SahilVerma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PharmaCare",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Fast, offline-first pharmacy point-of-sale and inventory management software with batch expiry alerts and sales analytics.",
    "softwareVersion": "0.2.0",
    "author": {
      "@type": "Person",
      "name": "Sahil Verma"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
