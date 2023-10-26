import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../_assets/globals.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utopiaz",
  description: "Utopiaz - Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className + " container bg-slate-950 text-white"}>
        <Header />
        <main className="my-6 md:my-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
