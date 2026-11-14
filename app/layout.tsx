import type { Metadata, Viewport } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import { CartProvider } from '@/hooks/use-cart';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Reclaim — see what your coding agents leave behind',
  description:
    'See what Claude Code and Codex leave behind, know when your latest agent needs you, and check your usage before you hit a limit.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Reclaim — see what your coding agents leave behind',
    description:
      'Find the agent storage filling your Mac, know when your latest agent needs you, and keep Claude Code and Codex limits one click away.',
    type: 'website',
    siteName: 'Reclaim',
    url: 'https://getreclaim.xyz/',
    images: [
      {
        url: 'https://getreclaim.xyz/shots/04-inventory.png',
        width: 3200,
        height: 1800,
        alt: 'Reclaim showing a local disk-space inventory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@getreclaim',
    title: 'Reclaim — see what your coding agents leave behind',
    description:
      'Find the agent storage filling your Mac, know when your latest agent needs you, and keep Claude Code and Codex limits one click away.',
    images: ['https://getreclaim.xyz/shots/04-inventory.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#0b0b0c',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className={inter.className}>
        <CartProvider>
          <div id="root">
            <div>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
