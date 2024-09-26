import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {notoSansKr} from "@/app/fonts/NotoSansKr";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {domAnimation, LazyMotion} from "framer-motion";

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

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        kakao: any;
    }
}
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
      <LazyMotion features={domAnimation}>
          <NavBar/>
          <section className={'w-full min-h-[calc(100vh-25vh)] md:min-h-[calc(100vh-20vh)]'}>
            {children}
          </section>
          <Footer/>
      </LazyMotion>
      </body>
    </html>
  );
}
