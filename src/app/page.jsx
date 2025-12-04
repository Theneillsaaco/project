"use client";

import { useState } from 'react';
import FormularioPrestamo from "./components/FormularioPrestamo";
import Resultados from "./components/Resultados";
import TablaAmortizacion from "./components/TablaAmortizacion";

export default function Home() {
  const [monto, setMonto] = useState(500000);
  const [tasaAnual, setTasaAnual] = useState(12);
  const [plazoMeses, setPlazoMeses] = useState(24);
  const [mostrarTabla, setMostrarTabla] = useState(false);
  
  // Calculo de la Cuota mesual
  const calcularCuotaMensual = () => {
    const P = Number(monto);
    const r = Number(tasaAnual) / 12 / 100;
    const n = Number(plazoMeses);
  
    if (!P || !r || !n) return 0;
  
    if (r === 0) return P / n;
  
    const cuota = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
    if (isNaN(cuota)) return 0;
  
    return cuota;
  };
  
  const cuotaMensual = Number(calcularCuotaMensual()) || 0;
  const totalPagar = cuotaMensual * plazoMeses;
  const totalIntereses = totalPagar - monto;
  
  
  return (
    <main className="p-6 max-w-3xl mx-auto flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Calculadora de Préstamos</h1>
      
      <FormularioPrestamo
        monto={monto}
        setMonto={setMonto}
        tasaAnual={tasaAnual}
        setTasaAnual={setTasaAnual}
        plazoMeses={plazoMeses}
        setPlazoMeses={setPlazoMeses}
      />
      
      <Resultados 
        cuotaMensual={cuotaMensual}
        totalPagar={totalPagar}
        totalIntereses={totalIntereses}
      />
      
      <button 
        className="border rounded px-4 py-2 mt-4"
        onClick={() => setMostrarTabla(!mostrarTabla)}
      >
        {mostrarTabla ? 'Ocultar Tabla' : 'Mostrar Tabla de Amortización'}
      </button>
      
      {mostrarTabla && (
        <TablaAmortizacion 
          monto={monto}
          cuotaMensual={cuotaMensual}
          plazoMeses={plazoMeses}
          tasaAnual={tasaAnual}
        />
      )}
    </main>
  );
}
