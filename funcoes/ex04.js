/*4. Crie uma função que receba a quantidade de bilhetes vendidos
em um concurso e sorteie um bilhete*/

function gerarNumeroAleatorio(ingresso){
    return Math.floor(Math.random() * ingresso)
    
  }
  
  console.log(gerarNumeroAleatorio(2450));
  