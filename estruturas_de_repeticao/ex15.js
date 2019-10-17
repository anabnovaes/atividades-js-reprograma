//15. Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.

function criarArrayAleatorio(numVezes){
    let arrayNumeros = [];
    let valorAdicional = 0;
    for (let i = 0; i<= numVezes; i++){
       valorAdicional = Math.floor(Math.random() * 1000000);
       arrayNumeros.push(valorAdicional);
    }
    return arrayNumeros;
}
console.log(criarArrayAleatorio(5));