import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../_assets/globals.css";

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
      <body className={inter.className + " container"}>{children}</body>
    </html>
  );
}
