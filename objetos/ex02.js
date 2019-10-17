/*
Array para Object
Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array como um par chave-valor. Por exemplo:
const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]
const obj = {
  fabricante : 'Ford',
  modelo : 'Mustang',
  ano : 1964
}
Escreva também uma função que faça o contrário. Transforme os pares de key-value de um object em um array 2d.
*/
const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]];

function criarObj(array){
    let objeto = {}
    for(let ind of array){
        objeto[ind[0]] = ind[1];
    }
    return objeto;
}
console.log(criarObj(arr));
