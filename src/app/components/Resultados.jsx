import { Card, CardContent, Typography } from "@mui/material";

export default function Resultados({
  cuotaMensual,
  totalPagar,
  totalIntereses,
}) {
  const f = (n) =>
    n.toLocaleString("es-DO", { style: "currency", currency: "DOP" });

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="titleMedium" className="mb-2">
          Resultados
        </Typography>

        <Typography>Cuota mensual: {f(cuotaMensual)}</Typography>
        <Typography>Total a pagar: {f(totalPagar)}</Typography>
        <Typography>Total intereses: {f(totalIntereses)}</Typography>
      </CardContent>
    </Card>
  );
}
