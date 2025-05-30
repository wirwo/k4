import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const proximaNova = localFont({
  src: '../../public/proximanova_regular.ttf',
  variable: '--font-proxima-nova',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "K4",
  description: "Proprietary technology and investment firm focused on cryptocurrencies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${proximaNova.variable} antialiased font-proxima`}
      >
        {children}
      </body>
    </html>
  );
}
