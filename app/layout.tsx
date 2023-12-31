import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intercepting Routes",
  description: "Next.js 13 Intercepting Routes example",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white text-black ${inter.className}`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
