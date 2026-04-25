import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/ReadingProgressBar";

export const metadata: Metadata = {
  title: "Feed the Curious | Food, Coffee, Culture & Stories",
  description: "A personal food and lifestyle blog by Adryenne covering Filipino food, coffee culture, food trips, and personal stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReadingProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
