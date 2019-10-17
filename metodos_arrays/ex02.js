// Inverta a ordem de uma array de caracteres sem utilizar o método array.reverse().
// Resolva de duas formas: utilizando somente array.push() / utilizando array.pop() e array.splice()

const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
function removerRepetidos(letras){
    const arr = [];
    for(i=letras.length-1; i>-1 ;i--){
        arr.push(letras[i]);
    }
    return arr;
}

console.log(removerRepetidos(letras));