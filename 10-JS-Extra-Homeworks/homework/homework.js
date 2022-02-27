// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
   
  var array = [];
  var keys = Object.keys(objeto); //Devuelve un array de todas las Keys.
  var values = Object.values(objeto); //Devuelve un array de todos los valores.

  for(var i=0; i < keys.length; i++){
    for (var j=0; j < values.length;j++){
      array.push([keys[i],values[j]]);
      ++i; // Hay que inc i porque sino quedaria D:1 - D:2
    }
  }
  return array;

  //Otra forma de hacerlo - directamente con el metodo: Convierte un objeto a array:
  /*return Object.entries(objeto);*/

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

   var obj = {};
   for (var i=0; i < string.length;++i){
     if(obj.hasOwnProperty(string[i])){
       obj[string[i]] = obj[string[i]] + 1;
     }else{
       obj[string[i]] = 1;
     }
   }
   return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 var conver = s.split('');
 var mayu = [];
 var min = [];

 for (var i=0; i< conver.length;i++){
   if (conver[i] === conver[i].toUpperCase()){
     mayu.push(conver[i]);
   }else{
     min.push(conver[i])
   }
 }
 return mayu.join('')+min.join('');

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  var conv =str.split(' '); //dejar espacio para que tome las palabras separadas y no todas concatenadas.
  
  var rta = [];
  for (var i=0; i<conv.length;i++){
    rta.push(conv[i].split('').reverse().join(''))
  }
  return rta.join(' ');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:

  var num = numero.toString(); //lo paso a string para comparar luego y ver si son capicua.
  var numInvertido = num.split('').reverse().join('');

  if (num === numInvertido){
    return "Es capicua";
  } else {
    return "No es capicua";
  };

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  var modificada = '';

  for (var i=0; i < cadena.length; i++){
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){
      continue;
    } else {
      modificada += cadena[i]; //modificada = modificada + cadena[i]; => concatena, se esta trabajando con cadenas.
    }
  }

  return modificada;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
var cambio = true;
// Para que pase varias veces hasta que quede ordenado, ya que de una vez puede no quedar ordenado.
while (cambio){
 cambio = false;
  for (var i=0; i < arr.length-1;++i){
    if (arr[i].length > arr[i+1].length){
      var aux = arr[i];
      arr[i] = arr[i+1];
      arr[i+1]= aux;
      cambio = true;
    }
  }
}
return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  
  var elementos = [];
  for(var i=0; i < arreglo1.length; ++i){
    for (var j=0; j < arreglo2.length;++j){
      if (arreglo1[i]=== arreglo2[j]){
        elementos.push(arreglo2[j]);
      }

    }
  }
  return elementos;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

