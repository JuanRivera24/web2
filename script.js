// Función para calcular propina
function calcularPropina(monto, servicio) {
  if (servicio === 'excelente') return monto * 0.20;
  if (servicio === 'bueno') return monto * 0.15;
  return monto * 0.10; // regular por defecto
}

// Función para calcular descuento
function calcularDescuento(monto) {
  if (monto > 200000) return monto * 0.20;
  if (monto > 100000) return monto * 0.10;
  return 0;
}

// Función principal
function main() {
  const cuentas = [];
  let continuar = true;
  
  console.log('=== CALCULADORA DE PROPINAS Y DESCUENTOS ===');
  
  // Ingreso de datos
  while (continuar) {
    const monto = parseFloat(prompt('Ingrese el monto de la cuenta:'));
    const servicio = prompt('Nivel de servicio (excelente/bueno/regular):').toLowerCase();
    
    cuentas.push({ monto, servicio });
    
    continuar = confirm('¿Desea ingresar otra cuenta?');
  }
  
  // Procesamiento y resultados
  console.log('\n=== RESULTADOS ===');
  cuentas.forEach((cuenta, i) => {
    const propina = calcularPropina(cuenta.monto, cuenta.servicio);
    const descuento = calcularDescuento(cuenta.monto);
    const total = cuenta.monto + propina - descuento;
    
    console.log(`\nCliente ${i + 1}:`);
    console.log(`- Monto: $${cuenta.monto.toFixed(2)}`);
    console.log(`- Servicio: ${cuenta.servicio}`);
    console.log(`- Propina: $${propina.toFixed(2)}`);
    console.log(`- Descuento: $${descuento.toFixed(2)}`);
    console.log(`- TOTAL: $${total.toFixed(2)}`);
  });
}

// Ejecutar el programa
main();