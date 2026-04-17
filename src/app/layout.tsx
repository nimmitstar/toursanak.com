import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'TourSanak - Educational Travel Experiences in Cambodia',
    template: '%s | TourSanak',
  },
  description: 'Discover Cambodia through educational study tours and travel experiences. Explore ancient temples, rich history, and living culture with expert guides.',
  keywords: ['Cambodia travel', 'study tours', 'educational travel', 'Angkor Wat', 'Cambodia tours', 'Southeast Asia education'],
  authors: [{ name: 'Tonle Team' }],
  openGraph: {
    title: 'TourSanak - Educational Travel Experiences in Cambodia',
    description: 'Discover Cambodia through educational study tours and travel experiences.',
    url: 'https://toursanak.com',
    siteName: 'TourSanak',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TourSanak - Educational Travel Experiences in Cambodia',
    description: 'Discover Cambodia through educational study tours and travel experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7520364222952193"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
