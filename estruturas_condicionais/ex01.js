
/*1. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo.
 (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. 
    Se ele perdeu, não recebe nada.)*/

function calcularPonto(resultado){
    if (resultado ==='v'){
      return '3 pontos';
    }else if (resultado === 'e'){
      return '1 ponto'
    }else if (resultado ==='d'){
      return '0 ponto';
    }
    else {
        return 'Resultado desconhecido'
    }
    
  }
  console.log(calcularPonto('g'))

  //usando switch case 


function calcularPonto(resultado){
    switch (resultado){
      case 'v':
        case 'V':
        return '3 pontos';
        break;  
      case 'e':
       case 'E':
        return '1 ponto';
        break;
      case 'd':
         case 'D':
        return '0 pontos';
        break;
      default:
        return 'resultado desconhecido'
    }
     
   }
   let resultado = prompt('Insira o resultado do jogo. Obs: v para vitória, d para derrota e E para empate ')
   
  console.log(calcularPonto(resultado));