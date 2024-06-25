function sumaArray(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  const arr = [1,2,3,4,5];
  
  console.log(sumaArray(arr))