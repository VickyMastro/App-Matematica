/* Codigo del cuadrado */
let cuadradoPerBoton = document.getElementById("cuadradoPerBoton");
cuadradoPerBoton.addEventListener("click", perimetroCuadrado);

let cuadradoArBoton = document.getElementById("cuadradoArBoton");
cuadradoArBoton.addEventListener("click", areaCuadrado);

function perimetroCuadrado() {
  let ladoInput = document.getElementById("cuadradoInput").value;
  alert("El perimetro es " + ladoInput * 4);
}

function areaCuadrado() {
  let ladoInput = document.getElementById("cuadradoInput").value;
  alert("el area es " + ladoInput ** 2);
}

/* Codigo del triagulo */
let trianguloPerBoton = document.getElementById("trianguloPerBoton");
trianguloPerBoton.addEventListener("click", perimetroTriangulo);

let trianguloArBoton = document.getElementById("trianguloArBoton");
trianguloArBoton.addEventListener("click", areaTriangulo);

function perimetroTriangulo() {
  let lado1 = document.getElementById("lado1").value;
  let lado2 = document.getElementById("lado2").value;
  let base = document.getElementById("base").value;

  let perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);
  alert("El perimetro es: " + perimetro);
}

function areaTriangulo() {
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  console.log("El area es: " + (base * altura) / 2);
}

/* Codigo del circulo */
let circuloPerBoton = document.getElementById("circuloPerBoton");
circuloPerBoton.addEventListener("click", perimetroCirculo);

let circuloArBoton = document.getElementById("circuloArBoton");
circuloArBoton.addEventListener("click", areaCirculo);

let circuloDiaBoton = document.getElementById("circuloDiaBoton");
circuloDiaBoton.addEventListener("click", diametroCirculo);
const PI = 3.14159;

function perimetroCirculo() {
  let radio = document.getElementById("circuloInput").value;
  let diametro = devolverDiametro(radio);

  alert("El perimetro es: " + diametro * PI);
}

function devolverDiametro (radio){
    return radio * 2;
}

function areaCirculo() {
  let radio = document.getElementById("circuloInput").value;
  alert ("El area es: " + radio ** 2 * PI);
}

function diametroCirculo() {
  let radio = document.getElementById("circuloInput").value;
  alert ("El diametro es: " + devolverDiametro(radio));
}
