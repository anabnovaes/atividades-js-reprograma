
/*5. Baseado na tabela no exercicio 5 (https://github.com/reprograma/n3-backend-javascript/tree/master/Aula%204/Exerc%C3%ADcios)
, retorne a classificação de um produto.*/

let codigoProduto = parseInt(prompt('Digite o código do produto'));

function classificarProduto(codigoProduto){
  switch (codigoProduto){
    case 1:
      return 'Alimento não-perecível';
    case 2:
    case 3:
    case 4:
       return 'Alimento perecível';
      case 5:
      case 6:
       return 'Vestuário';
      case 7:
       return 'Higiene Pessoal';
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
       return 'Limpeza e Utensílios Domésticos';
    default:
      return 'Código inválido';
  }
}

console.log(classificarProduto(codigoProduto));