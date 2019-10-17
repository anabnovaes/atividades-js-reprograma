/*12. Vamos reescrever a função de Báskara. Para isso temos que verificar atráves de delta se é possível calcular x' e x". 
Se delta for menor que zero, a equação não tem raízes.
 Se delta for igual a zero, a equação tem uma raiz.
 Se delta for maior que zero, a equação tem duas raízes.*/ 

 function calcularBaskara (a,b,c){
    let delta = (b**2) - (4*a*c);
   if (delta < 0 ){
     return "O valor de delta é negativo, a função não tem raízes";
      } else if (delta === 0){
          let x1= (-b + Math.sqrt(delta))/(2*a);
          return `O valor de delta é 0 e o valor de x1 é ${x1}`;
      }else if (delta>0){
          let x1= (-b + Math.sqrt(delta))/(2*a);
          let x2= (-b - Math.sqrt(delta))/2*a;
           return `O valor de x1 é ${x1} e o valor de x2 é ${x2}`;
      }else{
           return 'Valores inválidos, tente novamente!';
      }
   }
   console.log(calcularBaskara(1,-2,1))