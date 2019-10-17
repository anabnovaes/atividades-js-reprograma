// Escreva uma função que receba uma array como parâmetro e devolva outra, mas sem elementos repetidos.
// const numerosVarios = [ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]

const numerosVarios =[ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]

function removerRepetidos(numerosVarios){
    const numerosUnicos = [];
    for( let i = 0; i<numerosVarios.length; i++){
       let valorArray = numerosUnicos.indexOf(numerosVarios[i]);
      if(valorArray == -1 ){
          numerosUnicos.push(numerosVarios[i]);
      }
      

    }
    return numerosUnicos;
}
   
console.log (removerRepetidos(numerosVarios));