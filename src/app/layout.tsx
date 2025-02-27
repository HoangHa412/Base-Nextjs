import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Scroll from "@/components/scroll";
import ClientProvider from "@/providers/ClientProvider";
import { ProgressBarProvider } from "@/providers";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Scroll />
      <body
        className={`${inter.className} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
