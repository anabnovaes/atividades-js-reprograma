
/*2. Palíndromos são palavras ou frases que podem ser lidas da esquerda 
para a direita ou da direita para a esquerda. 
Crie uma função que informe se uma palavra é uma palíndromo.*/

function verificarPalindromo(palavra){
  let palindromo = palavra.split('').reverse().join('');
   
   if (palavra == palindromo){
     return 'É um palindromo';
   }
   else{
     return 'Não é um palindromo';
   }
  
   
 }
 
 console.log(verificarPalindromo('arara'));