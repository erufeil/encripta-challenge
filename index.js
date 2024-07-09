let textoIngresado;
let textoProcesado;
let contador = 0;
let agregar;



function encriptar() {
    document.getElementById("container__der__buscar").style.display = "none";
    while (contador < textoIngresado.length) {
        switch (textoIngresado[contador]) {
            case "a":
                agregar = "ai";
                break;
            case "e":
                agregar = "enter";
                break;
            case "i":
                agregar = "imes";
                break;
            case "o":
                agregar = "ober";
                break;
            case "u":
                agregar = "ufat";
                break;
            default:
                agregar = textoIngresado[contador];
        }
        textoProcesado = textoProcesado + agregar;
        contador++;
    }
    console.log(textoProcesado);
    let cargarContenido = document.getElementById="textoCodificado";
    cargarContenido.innerHTML = textoProcesado;
}

function desencriptar() {
    document.getElementById("container__der__buscar").style.display = "none";
    while (contador < textoIngresado.length) {
        switch (textoIngresado[contador]) {
            case "a":
                agregar = "a";
                contador++;
                break;
            case "e":
                agregar = "e";
                contador +=4;
                break;
            case "i":
                agregar = "i";
                contador +=3;
                break;
            case "o":
                agregar = "o";
                contador +=3;
                break;
            case "u":
                agregar = "u";
                contador +=3;
                break;
            default:
                agregar = textoIngresado[contador];
        }
        textoProcesado = textoProcesado + agregar;
        contador++;
    }
    console.log(textoProcesado);
    let cargarContenido = document.getElementById="textoCodificado";
    cargarContenido.innerHTML = textoProcesado;
}


