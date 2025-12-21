"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
    logo1: {
      fontSize: "6rem",
      fontFamily: "var(--font-bodoni)",
      fontWeight: 800,
      lineHeight: 1,
    },
    logo2: {
      fontSize: "3rem",
      fontFamily: "var(--font-bodoni)",
      fontWeight: 800,
      lineHeight: 1,
    },
  },
  palette: {
    green: {
      light: "#e9f7ed",
      main: "#d4edda",
      dark: "#7bb489",
    },
  },
});
