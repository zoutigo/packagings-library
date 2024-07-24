import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/sonner';
import { auth } from '@/auth';
import './globals.css';
import { Header } from '@/components/header/header';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Packaging Library',
  description: 'OPmobility handlings means and specifications templates',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
