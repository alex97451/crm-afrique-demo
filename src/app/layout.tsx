import type { Metadata, Viewport } from 'next';
import './globals.css'
export const metadata: Metadata = {
  title: 'CRM Afrique – Salon Bella Coiffure',
  description: 'Votre CRM simple et puissant',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'CRM Bella',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}