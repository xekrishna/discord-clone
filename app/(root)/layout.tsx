import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";

import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Discord",
  description: "A Fully Functional Discord Clone Created by @xekrishna. For more information, visit on github.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
      </head>
      <body className={poppins.className}>
        {children}
        </body>
    </html>
  );
}
