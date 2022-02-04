function palindrome(str) {
  let cadenaCarateres = str.replace(/\W+|_/g,"").toLowerCase();
  let revertirCadena = cadenaCarateres.split("").reverse().join("");
  let respuesta =
  (cadenaCarateres === revertirCadena) ?
    true : false ;
  return respuesta;
}

console.log(palindrome("five|\_/|four"));
