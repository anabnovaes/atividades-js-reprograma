// Escreva uma função chamada "encontrarMenorPalavra".
// Dado um array, "encontrarMenorPalavra" devolve a string mais curta encontrada no array especificado.

// Notas:
// Se houver repetições, você deve optar pelo primeiro elemento que aparece no array especificado.
// Assuma que o array pode ter outros valores além de strings.
// Se o array informado estiver vazio, ela deve devolver uma string vazia.
// Se o array informado não contiver strings, ela deverá retornar uma string vazia.

// Exemplo:
// console.log(encontrarMenorPalavra([4, 'dois', 2, 'cinco']); // --> 'dois'
let arrayDiverso = [4, 'dois', 2, 'cinco'];

function encontrarMenorPalavra(arrayDiverso){
    let tamanhoPalavra= 0;
    let menorPalavra = '                                                                 ' ;
    for (let i =0 ; i<arrayDiverso.length; i++){
       if (typeof(arrayDiverso[i]=== 'string') && (arrayDiverso[i].length<menorPalavra.length)){
           menorPalavra = arrayDiverso[i];

       }
    }
    return menorPalavra;
}
console.log(encontrarMenorPalavra([4, 'dois', 2, 'cinco']));

encontrarMenorPalavra(arrayDiverso)