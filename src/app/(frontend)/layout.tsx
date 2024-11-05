import type { Metadata } from "next";
import localFont from "next/font/local";
import { CookiesProvider } from "next-client-cookies/server";
import { ToastContainer } from "react-toastify";
import clsx from "clsx";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
  icons: "images/favicon.ico",
  title: "Just Login",
  description:
    "The very basic platform designed to bring people together through the power of media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(`${geistSans.variable} ${geistMono.variable} antialiased`, "bg-background")}
      >
        <CookiesProvider>{children}</CookiesProvider>
        <ToastContainer theme="colored" />
      </body>
    </html>
  );
}
