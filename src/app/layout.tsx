import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Anchored — What Your Kids Need To Know—And How To Talk About It",
  description:
    "A 3-book parenting series for intentional discipleship. You don't have to be a perfect parent to disciple your teen. You just have to start.",
  keywords: [
    "Christian parenting",
    "teen discipleship",
    "parenting teenagers",
    "faith-based parenting",
    "Christian teen resources",
    "parenting guide",
    "teen conversations",
    "biblical parenting",
    "raising teens",
    "Christian family resources"
  ],
  authors: [{ name: "Anchored" }],
  creator: "Anchored, LLC",
  publisher: "Anchored, LLC",
  metadataBase: new URL('https://anchoredparenting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Anchored — What Your Kids Need To Know—And How To Talk About It",
    description: "A 3-book parenting series for intentional discipleship. You don't have to be a perfect parent to disciple your teen. You just have to start.",
    url: 'https://anchoredparenting.com',
    siteName: 'Anchored',
    images: [
      {
        url: '/book-cover-launch.png',
        width: 915,
        height: 913,
        alt: 'Anchored Launch Book Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Anchored — What Your Kids Need To Know—And How To Talk About It",
    description: "A 3-book parenting series for intentional discipleship. You don't have to be a perfect parent to disciple your teen.",
    images: ['/book-cover-launch.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Anchored',
    description: 'A 3-book parenting series for intentional discipleship',
    url: 'https://anchoredparenting.com',
    publisher: {
      '@type': 'Organization',
      name: 'Anchored, LLC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anchoredparenting.com/favicon.png',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
