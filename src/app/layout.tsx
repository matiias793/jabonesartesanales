import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jabones Artesanales - Muestra de Química",
  description: "Descubre el proceso de elaboración de jabones artesanales. Procedimiento, beneficios e imágenes del proceso de saponificación.",
  keywords: "jabones artesanales, saponificación, química, elaboración de jabones, jabones naturales",
  authors: [{ name: "Muestra de Química" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Jabones Artesanales - Muestra de Química",
    description: "Descubre el proceso de elaboración de jabones artesanales. Procedimiento, beneficios e imágenes del proceso de saponificación.",
    type: "website",
    locale: "es_ES",
    siteName: "Jabones Artesanales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabones Artesanales - Muestra de Química",
    description: "Descubre el proceso de elaboración de jabones artesanales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

