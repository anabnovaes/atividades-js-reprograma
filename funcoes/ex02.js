/*2. Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética.*/
function ordenarAlfabeticamente(palavra){
    return palavra.split('').sort().join('')
  }
  console.log(ordenarAlfabeticamente("cba"))