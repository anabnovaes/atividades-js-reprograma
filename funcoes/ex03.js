/*3. Crie uma função que receba uma string, contendo nome e sobrenome, e retorne as inicias. Ex.: dado "Débora Borges", retorne "DB".*/


function calcularIniciais(nome){
  
    let inicialNome = nome.substring(0,1)
     let inicialSobrenome = nome[nome.indexOf(" ")+1]
     
     return inicialNome + inicialSobrenome
     
     
   }
   
   console.log(calcularIniciais("Débora Borges"))
   
   /* Solução feita pela Débora
   
   function pegaIniciais(nomeSobrenome){
     let letra1 = nomeSobrenome.substr(0,1);
     let posicaoEspaco = nomeSobrenome.indexOf(" ");
     let letra2 = nomeSobrenome.substr(posicaoEspaco+1, 1);
     
     return letra1 + letra2
     
   }
   
   console.log(pegaIniciais("Ana Paula"))
   
   function pegaIniciais2(nomeSobrenome){
     let letra1 = nomeSobrenome.substring(0,1);
     let posicaoEspaco = nomeSobrenome.indexOf(" ");
     let letra2 = nomeSobrenome.substring(posicaoEspaco+1,posicaoEspaco+2);
     
      return letra1 + letra2
   }
   
   console.log(pegaIniciais2("Ana Paula"))
   
   
   */
   