//9. Escreva um código que receba um número (1-12), e diga qual O mês e quantos dias ele tem.


function informarDiasMes(mes){
    let nomeMes, diasMes;
    switch(mes){
      case 1:
         nomeMes = 'janeiro';
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias `;
        case 2:
         nomeMes = 'fevereiro';
         diasMes = 28;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias, porém em anos bissextos possui 29 dias` ; 
        case 3:
         nomeMes = 'março';
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 4:
         nomeMes = 'abril';
         diasMes = 30;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 5:
         nomeMes = 'maio';
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 6:
         nomeMes = 'junho';
         diasMes = 30;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 7:
         nomeMes = 'julho';
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 8:
         nomeMes = 'agosto';
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 9:
         nomeMes = 'setembro';
         diasMes = 30;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 10:
         nomeMes = 'outubro'
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 11:
         nomeMes = 'novembro';
         diasMes = 30;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        case 12:
         nomeMes = 'dezembro';
         diasMes = 31;
        return `O mês selecionado é ${nomeMes} e possui ${diasMes} dias ` ;
        default:
          return'O dado inserido é inválido';
    }
  }
  console.log(informarDiasMes(12))