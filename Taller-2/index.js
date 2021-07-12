

function calculador(){
    let precio = document.getElementById("value").value;
    let descuento = document.getElementById("discount").value;

    let cuenta = (precio * (100 - descuento))/100;
    respuesta(cuenta);
}

/* function respuesta (count){
    let p = document.createElement("p");
    let msj = document.createTextNode("El valor final es " + count);
    p.appendChild(msj);

    let contenedor = document.getElementById("div");
    document.body.insertBefore(p, contenedor)
} */

function respuesta (count){
    let p = document.getElementById("resultado");
    p.innerHTML = `El precio final es de ${count}`;
}