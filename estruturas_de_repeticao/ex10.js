/*10. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,...
 Faça um programa capaz de gerar a série até o n−ésimo termo.*/
function calcularFibonacci(qtdNumeros){
      if(n<=0){
         return [];
     }else if (n ==1){
         return[0];
     }else if (n === 2 ){
         return[0,1];
     }else{
         let seqFibonacci = [0,1];
         let n1 =0;
         let n2= 1;
         for (i = 3; i<= qtdNumeros; i++){
       let proximoNumero = n1 + n2; 
        a = b;
        b = proximoNumero;
        seqFibonacci.push(proximoNumero);  
    }
     }
 }
