
//10. Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante.

function IdentificarVogaisEConsoantes(letra){
    switch(letra){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return 'Você digitou uma vogal'
      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
      case 'n':
      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':    
        return 'Você digitou uma consoante';
      default:
        return 'Você não digitou uma letra, tente novamente! ';
    }
  }
  
  console.log (IdentificarVogaisEConsoantes('b'))
  