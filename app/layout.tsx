import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Socials from "@/components/socials";


const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", firaCode.variable)}
    >
      <body className="min-h-full flex flex-col relative">
        <Socials className="hidden xl:flex" />
        <Header />
        {children}
      </body>
    </html>
  );
}
