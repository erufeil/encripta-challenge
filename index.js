let textoAProcesar = "";
let textoProcesado = "";
let contador = 0;
let agregar = "";

function inicializaVariables(){
    textoAProcesar = "";
    textoProcesado = "";
    contador = 0;
    agregar = "";
}

function encriptar() {
    inicializaVariables();
    textoAProcesar = document.getElementById('textoIngresado').value;
    document.getElementById("container__der__buscar").style.display = "none";
    while (contador < textoAProcesar.length) {
        switch (textoAProcesar[contador]) {
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
                agregar = textoAProcesar[contador];
        }
        textoProcesado = textoProcesado + agregar;
        console.log(textoProcesado, agregar);
        contador++;
    }
    console.log(textoProcesado);
    document.getElementById("textoCodificado").innerHTML = textoProcesado;
    document.getElementById("textoInfoalineado1").style.display = "none";
    document.getElementById("textoInfoalineado2").style.display = "none";

}

function desencriptar() {
    inicializaVariables();
    textoAProcesar = document.getElementById('textoIngresado').value;
    document.getElementById("container__der__buscar").style.display = "none";
    while (contador < textoAProcesar.length) {
        switch (textoAProcesar[contador]) {
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
                agregar = textoAProcesar[contador];
        }
        textoProcesado = textoProcesado + agregar;
        console.log(textoProcesado, agregar);
        contador++;
    }
    console.log(textoProcesado);
    document.getElementById("textoCodificado").innerHTML = textoProcesado;
    document.getElementById("textoInfoalineado1").style.display = "none";
    document.getElementById("textoInfoalineado2").style.display = "none";
}

async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(document.getElementById('textoCodificado').value);
      console.log('Contenido copiado al portapapeles');
      /* Resuelto - texto copiado al portapapeles con éxito */
    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
  }
