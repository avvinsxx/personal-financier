import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto, Bodoni_Moda } from "next/font/google";
import type { Metadata } from "next";

import { theme } from "@/shared";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto",
});

const bodoni = Bodoni_Moda({
  weight: ["600", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Personal Financier",
  description: "Учет личных финансов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} ${bodoni.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
