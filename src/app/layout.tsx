import type { Viewport } from 'next';
import './globals.css'
export const metadata = {
  title: 'CRM Afrique – Salon Bella Coiffure',
  description: 'Votre CRM simple et puissant',
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
      </head>
      <body>{children}</body>
    </html>
  );
}