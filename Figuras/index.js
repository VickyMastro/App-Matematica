/* Codigo del cuadrado */
let cuadradoPerBoton = document.getElementById("cuadradoPerBoton");
cuadradoPerBoton.addEventListener("click", perimetroCuadrado);

let cuadradoArBoton = document.getElementById("cuadradoArBoton")
cuadradoArBoton.addEventListener("click", areaCuadrado)

function perimetroCuadrado () {
    let ladoInput = document.getElementById("cuadradoInput").value;
    alert("El perimetro es " + ladoInput*4)
}

function areaCuadrado (){
    let ladoInput = document.getElementById("cuadradoInput").value;
    alert ("el area es " + ladoInput ** 2);
}


/* Codigo del triagulo */

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo (base, altura){
    return (base * altura)/ 2;
}


/* Codigo del circulo */

const PI = 3.14159;

function diametroCirculo (radio){
    return radio * 2;
}

function perimetroCirculo (diametro){
    return diametro * PI;
}

function areaCirculo (radio){
    return radio ** 2 * PI;
}



