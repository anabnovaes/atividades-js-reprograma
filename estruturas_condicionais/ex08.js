
//8 - Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.

function retornarDiaSemana(data){
    switch (data){
      case 1:
        return 'domingo';
      case 2:
        return 'segunda-feira';
      case 3:
        return 'terça-feira';
      case 4:
        return 'quarta-feira';
      case 5:
        return 'quinta-feira';
      case 6:
       return 'sexta-feira';
      case 7:
        return 'sábado';
      default:
        return 'inválido';
    }
  
  }
  console.log(retornarDiaSemana('7'));