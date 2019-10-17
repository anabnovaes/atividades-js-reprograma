//6. Faça um programa que leia 5 números e informe o maior número.

let cincoNumeros= [20,35,80,250,42];
let max = 0;

for(i=0; i < cincoNumeros.length; i++ ){
    if(cincoNumeros[i]> max){
         max = cincoNumeros[i];
     }
}
console.log(max);
