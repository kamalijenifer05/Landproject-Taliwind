import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const pop = Poppins({
  weight : ["300"],
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "Construction ",
  description: "Welcome to our page...",
  icons: {
    icon: "images/team-building.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pop.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
