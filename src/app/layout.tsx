import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import DbStatus from "@/components/DbStatus";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ababil Foundation",
  description: "Ababil Foundation Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider>
          {children}
          <DbStatus />
        </MantineProvider>
      </body>
    </html>
  );
}
