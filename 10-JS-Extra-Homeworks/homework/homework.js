// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for (let property in objeto) {
    let aux = [property, objeto[property]]
    array.push(aux);
  }
  return array;
}


function numberOfCharacters(inputString) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
  for (let i = 0; i < inputString.length; i++) {
    let aux = (inputString.charAt(i))
    if (objeto[aux]) {
      objeto[aux]++;
    } else {
      objeto[aux] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let aux = '';
  let i = 0;
  while (i < s.length) {
    let element = s[i];
    if (element == element.toUpperCase()) {
      aux += element;
      s = s.replace(element, '');
    } else {
      i++;
    }
  }
  return aux + s;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(' ');;
  let aux = '';
  array.forEach((element, index) => {
    for (let i = element.length - 1; i >= 0; i--) {
      let character = element[i];
      aux += character;
    }
    if (index != array.length - 1) {
      aux += ' ';
    }
  });
  return aux;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let aux = numero.toString();
  let isEven = numero % 2 == 0;
  for (let i = 0; i < aux.length; i++) {
    const el1 = aux[i];
    const el2 = aux[aux.length - 1 - i]
    if (!isEven && i == Math.round(aux.length / 2)) {
      return "Es capicua";
    }
    if (el1 != el2) {
      return "No es capicua";
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace('a', '');
  cadena = cadena.replace('b', '');
  cadena = cadena.replace('c', '');
  return cadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a, b) => {
    return a.length - b.length;
  })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let aux = [];
  arreglo1.forEach(element => {
    if (arreglo2.includes(element)) {
      aux.push(element);
    }
  })
  return aux;
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

