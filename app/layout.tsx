import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from "next/font/google";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Home/ScrollToTop";



const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  style: ["normal", "italic"],
  adjustFontFallback: true,
})
// Setup task
// Customize your font { watch the video }
// Customize your meta data

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Kelana Crew",
  description: "Your Map to Hidden Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
