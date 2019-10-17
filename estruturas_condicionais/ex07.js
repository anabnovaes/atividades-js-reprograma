/*7. Escreva um código que receba dois números e determine qual o maior entre eles.*/

function determinarMaiorNumero (numero1, numero2){
    if (numero1>numero2){
      return 'O maior número é '+ numero1;
    }
    else if (numero1<numero2){
      return 'O maior número é '+ numero2;
    }
   else  if (numero1==numero2){
      return 'Os números possuem o mesmo valor ';
    }
    else {
      return 'Parâmetros inválidos';
    }
  }
  