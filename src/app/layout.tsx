import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@/shared/ui/theme/reset.scss";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subscription tracker",
  description: "Отслеживание подисок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
