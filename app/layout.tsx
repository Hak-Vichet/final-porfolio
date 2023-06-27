// import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar2 from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hak Vichet-Portfolio",
  description: "This is my portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Navbar2 />
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}
