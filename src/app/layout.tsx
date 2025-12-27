import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { theme } from "@/shared";

import "@/shared/ui/theme/reset.scss";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
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
      <body className={`${inter.className}`}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
