window.onload = function () {
  pantalla = document.getElementById("textoPantalla");
};
var valorPrev = 0;

x = "0"; //Guardamos el numero que se pulsa
y = 1; //Añadir o sobreescribir el número, es un booleano.
z = 0; // ¿Tiene coma? Si/No
var clearPulsado; // Para saber si se ha pulsado C
lastNumber = 0;
scape = null;
function numeroPulsado(numbers) {

  if (x == "0" || y == 1) {
    x = numbers;
    if (x == ".") {
      numbers = "0.";
    }
    pantalla.innerHTML = numbers;
  } else {
    if (x.includes(".") == false) {
      pantalla.innerHTML += numbers;
      x += numbers;
    } else {
      if (numbers == ".") {
        alert("No se permiten dos comas seguidas");
      } else {
        pantalla.innerHTML += numbers;
        x += numbers;
      }
    }
  }
  y = 0;
  return x;
}

function borrarPantalla(numbers) {
  pantalla.innerHTML = "0";
  clearPulsado = true;
  y = 1;

  valorPrev = 0;
}
var sumando1;
var operatoria;

function sumarNumeros(operando) {
  calculo()
  valor = document.getElementById("textoPantalla").innerHTML;
  valorN = parseFloat(valor);
if (y == 0) {
    pantalla.innerHTML = valorPrev + valorN;
  } 
  y = 1;
  valorPrev = parseFloat(document.getElementById("textoPantalla").innerHTML);
  operatoria = operando;
} 

 function restarNumeros(operando) {
  calculo()



  valor = document.getElementById("textoPantalla").innerHTML;
  valorN = parseFloat(valor);
  if (y == 0 && valorPrev != 0) {
    pantalla.innerHTML = valorPrev - valorN;
  }
  y = 1;
  valorPrev = parseFloat(document.getElementById("textoPantalla").innerHTML);
  operatoria = operando;
}

function multiplicar(operando) {
  calculo()
  valor = document.getElementById("textoPantalla").innerHTML;
  valorN = parseFloat(valor);
  if (y == 0 && valorPrev != 0) {
    pantalla.innerHTML = valorPrev * valorN;
  }
  y = 1;
  valorPrev = parseFloat(document.getElementById("textoPantalla").innerHTML);
  operatoria = operando;
}

function dividir(operando) {
  calculo()
  valor = document.getElementById("textoPantalla").innerHTML;
  valorN = parseFloat(valor);
  if (y == 0 && valorPrev != 0) {
    pantalla.innerHTML = valorPrev / valorN;
  }
  y = 1;
  valorPrev = parseFloat(document.getElementById("textoPantalla").innerHTML);
  operatoria = operando;
}
  






var contador = 0;
function calculo() {
  lastValue = document.getElementById("textoPantalla").innerHTML;
  lastValueN = parseFloat(lastValue);

  if (operatoria == "+") {
    resultado = lastValueN + valorPrev;
    pantalla.innerHTML = resultado;
    operatoria = null;
    y = 1;
  } else if (operatoria == "-") {
    resultado = valorPrev - lastValueN;
    pantalla.innerHTML = resultado;
    operatoria = null;
    y = 1;
  } else if (operatoria == "*") {
    resultado = valorPrev * lastValueN;
    pantalla.innerHTML = resultado;
    operatoria = null;
    y = 1;
  } else if (operatoria == "/") {
    resultado = valorPrev / lastValueN;
    pantalla.innerHTML = resultado;
    operatoria = null;
    y = 1;
  }
}


