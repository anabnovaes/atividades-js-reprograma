
//13. Crie uma calculadora simples.

function calculadora(valor1, operacao, valor2){
    switch(operacao){
      case '+':
        return valor1 + valor2;
      case '-':
        return valor1 - valor2;
      case '*':
        return valor1 * valor2;
      case '/':
        return valor1 / valor2;
      default:
        return 'operação inválida';
    }
  
  }
  
  console.log (calculadora (10, '-',2 ));