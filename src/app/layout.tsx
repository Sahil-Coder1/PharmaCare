import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#060911",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PharmaCare — Fast Pharmacy POS & Inventory Software",
  description: "Fast, offline-first pharmacy POS and inventory software with instant search, 3-tier batch expiry radar, sales analytics, and receipt printing.",
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
  metadataBase: new URL("https://pharmacarex.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PharmaCare — Fast Pharmacy POS & Inventory Software",
    description: "Fast, offline-first pharmacy POS and inventory software with instant search, 3-tier batch expiry radar, sales analytics, and thermal receipt printing.",
    url: "https://pharmacarex.vercel.app",
    siteName: "PharmaCare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "PharmaCare — Pharmacy POS & Inventory Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PharmaCare — Fast Pharmacy POS & Inventory Software",
    description: "Fast, offline-first pharmacy POS and inventory software with instant search, 3-tier batch expiry radar, sales analytics, and thermal receipt printing.",
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
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-14SCNV59E4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-14SCNV59E4');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
