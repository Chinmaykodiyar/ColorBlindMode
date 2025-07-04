import type { Metadata } from 'next';
import './globals.css';
import { ColorModeProvider } from '@/contexts/color-mode-context';
import { Toaster } from '@/components/ui/toaster';
import AppLayout from '@/components/layout/app-layout';
import SvgDefinitions from '@/components/svg-definitions';

export const metadata: Metadata = {
  title: 'Chromatic Harmony',
  description: 'Accessible color palettes and tools for colorblind users.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ColorModeProvider>
          <SvgDefinitions />
          <AppLayout>{children}</AppLayout>
          <Toaster />
        </ColorModeProvider>
      </body>
    </html>
  );
}
