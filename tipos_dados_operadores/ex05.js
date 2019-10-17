
/*5. Refatore seu código da questão anterior, de maneira que o novo código possua 3 funções: a. A primeira recebe 3 parâmetros e calcula apenas o resultado de "delta"; b. A segunda recebe 3 parâmetros e calcula o resultado de x'; c. A terceira recebe 3 parâmetros e calcula o resultado de x";

*/

function calcularDelta (a,b,c){
    //incluir o retorno sem gravar em uma variável
   return (b**2) - (4*a*c);
    
  }
  
  let valorDelta = calcularDelta(1,5,4);
  
  console.log ('O valor de delta é ' + valorDelta );
  
  
  function calcularX1(a,b,delta){
    return (-b + Math.sqrt(delta))/(2*a);
    
  }
  
  
  function calcularX2(a,b,delta){
    return  (-b - Math.sqrt(delta))/(2*a);
   
    
  }
  
  let x1 = calcularX1(1,5,valorDelta)
  
  console.log('O valor de x1 é ' +x1)
  
  let x2 = calcularX2(1,5,valorDelta)
  
  console.log('O valor de x2 é ' +x2)