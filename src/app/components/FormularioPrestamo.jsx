import { TextField, Card, CardContent, Typography } from "@mui/material";

export default function FormularioPrestamo({
  monto,
  tasaAnual,
  plazoMeses,
  setMonto,
  setTasaAnual,
  setPlazoMeses,
}) {
  return (
    <Card elevation={1}>
      <CardContent className="flex flex-col gap-4">
        <Typography variant="h5">Datos del Préstamo</Typography>
        
        <TextField
          label="Monto del préstamo (RD$)"
          type="number"
          variant="outlined"
          min="1000"
          value={monto}
          onChange={(e) => setMonto(Number(e.target.value))}
        />
        
        <TextField
          label="Tasa anual (%)"
          type="number"
          variant="outlined"
          value={tasaAnual}
          onChange={(e) => setTasaAnual(Number(e.target.value))}
        />

        <TextField
          label="Plazo (meses)"
          type="number"
          variant="outlined"
          value={plazoMeses}
          onChange={(e) => setPlazoMeses(Number(e.target.value))}
        />
      </CardContent>
    </Card>
  );
}