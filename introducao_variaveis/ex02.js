
//2. Faça uma saída de soma de 2 números.

//função pra calcular a soma
function soma(n1,n2){
    var vsoma= n1+n2;
    return vsoma;
  }
  //solicitando ao usuário os dados
  
  var numero1 = parseInt(prompt("Digite o primeiro valor"));
  var numero2 = parseInt(prompt("Digite o segundo valor"));
  
  //exibindo os dados
  
  alert("A soma dos dois valores é : " + soma(numero1,numero2));