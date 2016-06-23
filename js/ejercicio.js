// EJERCICIOS FUNCIONES
// Quitar comentarios para visualizar uno a uno


/*
//#1 EL MENOR DE LOS NUMEROS  /    OK!
function numeroMenor (n1, n2, n3) {
  var n1, n2, n3;

  if ((n1 <= n2) && (n1 <= n3)) {
  return("el numero menor es " + n1);
  }
  else if  ((n2 <= n1) && (n2 <= n3)) {
  return("el numero menor es " + n2);
  }
  else {
  return("el numero menor es " + n3);
  }
}
*/


/*
//#2 NUMERO PAR O IMPAR  /    OK!
function numeropar (n1) {
  if (n1%2==0) {
    return("El número ingresado es PAR");
  }
  else {
    return("El número ingresado es IMPAR");
  }
}
*/

/*
//#3 ORDENANDO NUMEROS
function mayorMenor (n1, n2, n3) {

}
*/


//#4 MAYUSCULAS O MINUSCULAS




//#5 PALINDROMO



/*
//#6 OPERACIONES MATEMATICAS  /    OK!
function suma (a,b) {
  var suma = a + b;
  return("La suma de " + a + " y " + b + " es " + suma)
}
function resta (a,b) {
  var resta = a - b;
  return("La resta de " + a + " y " + b + " es " + resta)
}
function multiplica (a,b) {
  var multiplica = a * b;
  return("La multiplicación de " + a + " y " + b + " es " + multiplica)
}
function divide (a,b) {
  var divide = a / b;
  return("La division de " + a + " y " + b + " es " + divide)
}
*/


/*
//#7 CUADRADO DE LA SUMA DE 2 NUMEROS  /    OK!
function cuadrado (a, b) {
  var suma = a + b;
  var cuadrado = suma * suma;
  return("El cuadrado de la suma de " + a + " y " + b + " es " + cuadrado);
}
*/


/*
//#8 NUMERO PRIMO  /    OK!
function primo (n) {
  var primo=true;
  for(i=2;i<n;i++) { 
    if(n%i==0) {
      primo=false
    }
  }
  if (primo) {
  return("El numero es primo");
  }
  else {
  return("El numero no es primo");
  }
}
*/


/*
//#9 MULTIPLOS DE UN NUMERO  /    OK!
function multiplos (numero) {
  var numero, multiplos;
  var todos = [];
  for (var i = 1 ; i < 11; i++) {
    multiplos = (numero)*i; 
    todos.push(multiplos); 
  };
  return(todos)
};
*/


/*
//#10 CANTIDAD DE DIGITOS  /    INCOMPLETO
function digitos (numeros) {
  var cadena;
  cadena = [];
  cadena.push(numeros);
  var nums = [];
  for (var i = 0; i > cadena.length - 1; i++) {
    nums.split(cadena);
  };
  return(cadena.length);
}

