//função que retorna 5% de desconto
let valor = parseInt(prompt("Digite o valor a ser descontado"));
let desconto = 5;
function calcularDesconto(valor){
  valor *= (desconto/100);
  return valor;
}

console.log(calcularDesconto(valor))
  


