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
  },
  palette: {
    green: {
      main: "#d4edda",
    },
  },
});
