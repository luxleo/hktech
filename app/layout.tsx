import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {notoSansKr} from "@/app/fonts/NotoSansKr";
import NavBar from "@/components/NavBar";
import {Suspense} from "react";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | HK 기술",
    default: "(주)에이치케이기술 HK 기술",
  },
  description: "one of top civil engineering company"
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.className} antialiased`}
      >
      <Suspense>
        <NavBar/>
      </Suspense>
      <section className={'w-full min-h-[calc(100vh-25vh)] md:min-h-[calc(100vh-20vh)]'}>
        {children}
      </section>
      <Footer/>
      </body>
    </html>
  );
}
