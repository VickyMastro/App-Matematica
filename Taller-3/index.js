/* Calculando promedio */

const lista1 = [100, 200, 400, 300, 600, 500];

function calculadorPromedio(array) {
  let count = 0;
  array.forEach((element) => {
    count += element;
  });

  let result = count / array.length;
  console.log(result);
}

/* Calculando mediana */

const lista2 = [100, 400, 800, 300, 200, 500];

function calcularMediana(array) {
  let arrayOrdenado = array.sort((a, b) => {
    return a - b;
  });

  let media = arrayOrdenado.length / 2;

  return arrayOrdenado.length % 2 === 0
    ? (arrayOrdenado[media] + arrayOrdenado[media - 1]) / 2
    : arrayOrdenado[Math.ceil(media - 1)];

  /* if (arrayOrdenado.length % 2 === 0) {
    let mediana = (array[media] + array[media - 1]) / 2;
    return mediana;
  } else {
    return array[Math.ceil(media - 1)];
  } */
}

/* calculando Moda*/

const lista3 = [10, 9, 8, 10, 8, 10, 8, 7, 9, 10, 9, 9, 8];

function moda(array) {
  let count = 0;
  let valor = [];
valor.filter()
  for (let i = 0; i < array.length; i++) {
    const e = array[i];

    let contador = 0;

    for (let j = 0; j < array.length; j++) {
      const element = array[j];

      if (e === element) {
        contador++;
      }
    }

    if (contador > count) {
      count = contador;
      valor.push(e);
    } else if (contador === count && !valor.includes(e)) {
      valor.push(e);
    }
  }

  return valor;
}
