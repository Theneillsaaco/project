import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./themes/mui-theme";

export const metadata = {
  title: "Calculadora de Préstamos",
  description: "Aplicación para calcular préstamos y amortización",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-neutral-900 text-neutral-100">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
