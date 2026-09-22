import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/meta-pixel";

export const metadata: Metadata = {
  title: "Haciendo Ecos | Ebooks que generan cambios",
  description:
    "Descubrí recursos digitales prácticos para aprender, crear y acompañar la vida cotidiana.",
  metadataBase: new URL("https://haciendoecos.com")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
