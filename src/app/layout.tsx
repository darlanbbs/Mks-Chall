import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700", "300", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MKS Desafio Tecnico",
  description: "Desafio tecnico MKS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
