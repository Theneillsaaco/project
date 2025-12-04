"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#D0BCFF" },
        secondary: { main: "#CCC2DC" },
        surface: { main: "#1C1B1F" },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    headlineSmall: { fontSize: "1.625rem", fontWeight: 600 },
    titleMedium: { fontSize: "1rem", fontWeight: 600 },
    bodyMedium: { fontSize: "0.9375rem", fontWeight: 500 },
  },
});

export default theme;