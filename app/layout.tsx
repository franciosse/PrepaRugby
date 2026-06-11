import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prépa Rugby – Retour post-ménisque",
  description: "Programme de préparation physique rugby 6 semaines – retour après opération du ménisque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full bg-[#050d05] text-emerald-50 antialiased">
        {children}
      </body>
    </html>
  );
}
