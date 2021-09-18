//1
/* var text = prompt("Ingrese un texto");
if(text.includes("a") == true ){
    alert("Su texto contiene la letra a")
}else{
    alert("Su texto no contiena la letra a")
} */

//2
/* var text = prompt("Ingrese un texto");
alert(text.toLocaleLowerCase());
alert(text.toLocaleUpperCase()); */


//3
/* var palabra = prompt("Ingrese una palabra");
alert("Su primera letra es: " + palabra.charAt(0)); */

//4
/* var frase = prompt("Ingrese una frase");
alert("Su frase contiene " + frase.length + " caracteres"); */

//5
/* var numero = prompt("Ingrese un número");
numero = parseInt(numero);
if(numero.length == 1){
    alert("Su número contiene " + numero.length + " dígito")
}else{
    alert("Su número contiene " + numero.length + " dígitos")

} */

//6
/* var palabra = prompt("Ingrese una palabra");
alert("Su última letra es: " + palabra.charAt(palabra.length -1)); */

//7
/* const regex = /\s/g;
var texto = prompt("Ingrese un texto");
var nuevoTexto = texto.replace(regex,"*");
alert(nuevoTexto); */

//8
/* var letra = prompt("Ingrese una letra");
var texto = prompt("Ingrese una cadena de texto");
if(texto.includes(letra) == true){
    alert("Su texto contiene la letra " + letra);
}else{
    alert("Su texto no contiene la letra " + letra);
} */

//9
/* var texto = prompt("Ingrese un texto");
var nuevoTexto = texto.slice(1,texto.length);
alert(nuevoTexto); */

//10
/* var nombre = prompt("Ingrese su nombre en minúscula")
var mayuscula= nombre.charAt(0).toUpperCase() + nombre.slice(1);
alert(mayuscula); */

//Ejercicios con condicionales (parte 1):

//--1
/* var metros = window.prompt("Ingrese una medida en metros");
metros = parseInt(metros);

if(metros){
    var pies = metros * 3.28084;
    var centrimetros = metros / 100;
    var pulgadas = metros * 39.3701;
    console.log("pies: "+ pies + " Centimetros: " + centrimetros + " pulgadas: " + pulgadas);
}else{
    alert("Ingrese un número válido");
} */

//--2
/* var edad = prompt("Ingrese su edad");
if(edad < 18){
    alert("Usted es menor de edad")
}else{
    alert("Usted es mayor de edad")
} */

//--3
/* var sabor = prompt("Ingrese los sabores de su helado separados por una coma")
var cobertura = prompt("Desea cobertura de chocolate");
if( cobertura == "si"){
    alert("Su helado sabor " + sabor + " con cobertura de chocolate cuesta $180")
    
}else{
    alert("Su helado sabor " + sabor + " cuesta $150")
} */


//--4
/* let num1;
let num2;
let sum;
num1 = window.prompt("Ingrese un número");
num1 = parseInt(num1);
num2 = window.prompt("Ingrese otro número");
num2 = parseInt(num2);
sum = num1 + num2;
console.log(sum);
if (sum % 2 == 0) {
    alert("El número resultante es par")
} else {
    alert("El número resultante es impar")
} */

//--5
/* var numero = prompt("Ingrese un número");
numero = parseInt(numero);
if (numero > 0) {
    alert("El número es positivo");
} else if(numero == 0) {
    alert("El número es cero");
}else{
    alert("El número es negativo");
} */

//--6
/* var monto = prompt("Ingrese un monto");
if (monto > 2000) {
    alert(monto = (monto * 90)/100);
    
} else {
    alert(monto);
} */

//--7
/* var texto = prompt("Ingrese un texto");
var posicion = prompt("Ingrese una posición");
posicion = parseInt(posicion);
var caracter = texto.charAt(posicion);

switch (caracter) {
    case "a":
        alert("El dígito en esa posición es una vocal");
        break;
    case "e":
        alert("El dígito en esa posición es una vocal");
        break;
    case "i":
        alert("El dígito en esa posición es una vocal");
        break;
    case "o":
        alert("El dígito en esa posición es una vocal");
        break;
    case "u":
        alert("El dígito en esa posición es una vocal");
        break;
        

    default:
        alert("El dígito en esa posición no es una vocal");
        break;
} */

//--8
/* var nota = prompt("Ingrese una nota de 1-10");
nota = parseInt(nota);
if(nota >= 1  && nota <= 3 ){
    alert("Aplazado");
}else if(nota > 3 && nota < 6){
    alert("Reprobado");
}else if(nota >=6 && nota <=10){
    alert("Aprobado");
}else{
    alert("Ingrese una nota válida");
} */

//--9
/* var num1 = prompt("Ingrese un número");
num1 = parseInt(num1);
var num2 = prompt("Ingrese otro número");
num2 = parseInt(num2);
if(num1 > num2){
    alert("El número " + num1 + " es mayor");
}else if(num2 > num1){
    alert("El número " + num2 + " es mayor");
}else{
    alert("Los números son iguales");
} */

//--10
/* var mes = prompt("Indique un mes de 1-12");
mes = parseInt(mes);
if ( mes == 1 && mes == 3 && mes== 5 && mes== 7 && mes== 8 && mes== 10 && mes== 12) {
    alert("Tiene 31 días");
} else if(mes== 4 && mes== 6 && mes== 9 && mes== 11){
    alert("Tiene 30 días");
}else if(mes== 2){
    alert("Tiene 28 o 29 días");
}else{
    alert("Indique un número de mes válido");
} */

//--11
/* var num1 = prompt("Ingrese el primero número");
num1 = parseInt(num1);
var num2 = prompt("Ingrese el segundo número");
num2 = parseInt(num2);
var num3 = prompt("Ingrese el tercer número");
num3 = parseInt(num3);
if (num1 > num2 && num1 > num3) {
    alert("El primero número es el mayor");
} else if(num2 > num1 && num2 > num3){
    alert("El segundo número es el mayor");
}else if(num3 > num1 && num3 > num2){
    alert("El tercer número es el mayor");
}else{
    alert("Ingrese tres números válidos")
} */

//--12
/* var vuelto;
var precioCerveza = 50;
var precioJugo = 30;
var precioAgua = 15;
var edad = prompt("Ingrese su edad");
edad = parseInt(edad);
var bebida = prompt("Ingrese el número de bebida que desea ordenar: 1-cerveza   2-jugo    3-agua");
bebida = parseInt(bebida);
var pago = prompt("¿Con cúanto a pagar?");
pago = parseInt(pago);
if (edad < 18) {
    if(bebida == 1){
        alert("Usted no puede ingerir bebidas alcohólicas")
    }else if(bebida == 2){
        vuelto = pago - precioJugo;
        alert("Su vuelto es de " + vuelto);
    }else if(bebida == 3){
        vuelto = pago - precioAgua;
        alert("Su vuelto es de " + vuelto);
    }else{
        alert("Ingrese un número válido");
    }

} else if(edad >= 18){
    if(bebida == 1){
        vuelto = pago - precioCerveza;
        alert("Su vuelto es de " + vuelto);
    }else if(bebida == 2){
        vuelto = pago - precioJugo;
        alert("Su vuelto es de " + vuelto);
    }else if(bebida == 3){
        vuelto = pago - precioAgua;
        alert("Su vuelto es de " + vuelto);
    }else{
        alert("Ingrese un número válido");
    }
}else{
    alert("Ingrese una edad válida");
} */

//--13
/* var mes = prompt("Ingrese un número de mes");
mes = parseInt(mes);
switch (mes) {
    case 1:
        alert("Enero")
        break;
    case 2:
        alert("Febrero")
        break;
    case 3:
        alert("Marzo")
        break;
    case 4:
        alert("Abril")
        break;
    case 5:
        alert("Mayo")
        break;
    case 6:
        alert("Junio")
        break;
    case 7:
        alert("Julio")
        break;
    case 8:
        alert("Agosto")
        break;
    case 9:
        alert("Septiembre")
        break;
    case 10:
        alert("Octubre")
        break;
    case 11:
        alert("Noviembre")
        break;
    case 12:
        alert("Diciembre")
        break;

    default:
        alert("Ingrese un número de mes válido");
        break;
} */

//BONUS:

//--1
/* var clave = 1234;
var monto = 100000;
var pass = prompt("Ingrese una clave de 4 dígitos");
pass = parseInt(pass);
var retiro = prompt("Ingrese un monto a retirar");
retiro = parseInt(retiro);
if (clave == pass) {
    if(retiro <= monto){
        retiro = monto - retiro;
        alert("Puede retirar los " + retiro)
    }else{
        alert("Usted está intentando retirar más dinero que el disponible")
    }

}   else{
    alert("Su clave es incorrecta");
} */

//--2
/* var dia = prompt("Ingrese su día de nacimiento");
dia = parseInt(dia);
var mes = prompt("Ingrese su mes de nacimiento");
mes = parseInt(mes);
if(mes == 1){
    if(dia <= 22){
        alert("Sos de capricornio");
    }else{
        alert("Sos de acuario");
    }
}
else if (mes == 2) {
    if(dia <= 21){
        alert("Sos de acuario");
    }else{
        alert("Sos de piscis");
    }
} else if(mes == 3){
    if( dia <= 19){
        alert("Sos de piscis");
    }else{
        alert("Sos de aries");
    }
}
 else if(mes == 4){
    if(dia <= 21){
        alert("Sos de aries");
    }else{
        alert("Sos de tauro");
    }
}
 else if(mes == 5){
    if(dia <= 21){
        alert("Sos de tauro");
    }else{
        alert("Sos de géminis");
    }
}
 else if(mes == 6){
    if(dia <= 21){
        alert("Sos de géminis");
    }else{
        alert("Sos de cáncer");
    }
}
 else if(mes == 7){
    if(dia <= 22){
        alert("Sos de cáncer");
    }else{
        alert("Sos de leo");
    }
}
 else if(mes == 8){
    if(dia <= 23){
        alert("Sos de leo");
    }else{
        alert("Sos de virgo");
    }
}
 else if(mes == 8){
    if(dia <= 23){
        alert("Sos de virgo");
    }else{
        alert("Sos de libra");
    }
}
 else if(mes == 10){
    if(dia <= 23){
        alert("Sos de libra");
    }else{
        alert("Sos de escorpio");
    }
}
 else if(mes == 11){
    if(dia <= 23){
        alert("Sos de escorpio");
    }else{
        alert("Sos de sagitario");
    }
}
 else if(mes == 12){
    if(dia <= 23){
        alert("Sos de sagitario");
    }else{
        alert("Sos de capricornio");
    }
}
 else {
     alert("Ingrese un número válido");
 } */

 //--3
 var hora = prompt("Ingrese la hora de 0-24");
 hora = parseInt(hora);
 var nombre = prompt("Ingrese su nombre");
 if (hora >= 12 && hora < 19) {
     alert("Buenas tardes " + nombre);
 } else if(hora >= 19 && hora <= 24){
     alert("Buenas noches " + nombre);
 }else if(hora < 5){
     alert("Buenas noches " + nombre);
 }
  else if(hora >= 5 && hora < 12){
    alert("Buenos días " + nombre)
 }else{
     alert("Ingrese un número válido");
 }
 
