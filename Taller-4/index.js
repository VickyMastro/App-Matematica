const salario = colombia.map(function (e) {
    return e.salary
/*   console.log(e.salary); */
});

function calculo(array) {
    let arrayOrdenado = array.sort((a, b) => {
        return a - b;
    });
   
    let medio = arrayOrdenado.length/2;

    if(arrayOrdenado.length % 2 === 0){
        let mediana = (array[medio] + array[medio -1]) / 2;
        return mediana;
    } else {
        return array[Math.ceil(medio - 1)]
    }
}
