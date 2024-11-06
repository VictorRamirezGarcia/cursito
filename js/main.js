// Función para sumar dos números
function sumar(a, b) {
    return a + b;
  }
  
  // Función para restar dos números
  function restar(a, b) {
    return a - b;
  }
  
  // Definir dos números para probar las funciones
  const numero1 = 10;
  const numero2 = 5; // Aquí está el error: número2 es una cadena, no un número.
  
  // Realizar operaciones y mostrar los resultados
  const resultadoSuma = sumar(numero1, numero2); // Esto generará un resultado no esperado
  console.log(`La suma de ${numero1} y ${numero2} es: ${resultadoSuma}`);
  
  const resultadoResta = restar(numero1, numero2); // Esto generará un resultado no esperado
  console.log(`La resta de ${numero1} y ${numero2} es: ${resultadoResta}`);
  
 