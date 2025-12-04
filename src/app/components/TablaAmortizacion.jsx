import {
  Table, TableHead, TableRow, TableCell,
  TableBody, Paper, TableContainer
} from "@mui/material";

export default function TablaAmortizacion({
  monto,
  tasaAnual,
  plazoMeses,
  cuotaMensual,
}) {
  const r = tasaAnual / 12 / 100;

  const generarTabla = () => {
    let saldo = monto;
    const filas = [];

    for (let i = 1; i <= plazoMeses; i++) {
      const interes = saldo * r;
      const capital = cuotaMensual - interes;
      const saldoNuevo = saldo - capital;

      filas.push({
        mes: i,
        cuota: cuotaMensual,
        capital,
        interes,
        saldo: saldoNuevo < 0 ? 0 : saldoNuevo,
      });

      saldo = saldoNuevo;
    }
    return filas;
  };

  const f = (n) =>
    n.toLocaleString("es-DO", { style: "currency", currency: "DOP" });

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mes</TableCell>
            <TableCell>Cuota</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Interés</TableCell>
            <TableCell>Saldo</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {generarTabla().map((r) => (
            <TableRow key={r.mes}>
              <TableCell>{r.mes}</TableCell>
              <TableCell>{f(r.cuota)}</TableCell>
              <TableCell sx={{ color: "green" }}>{f(r.capital)}</TableCell>
              <TableCell sx={{ color: 'red' }}>{f(r.interes)}</TableCell>
              <TableCell>{f(r.saldo)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
