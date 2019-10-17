/*9. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
Um número primo é aquele que é divisível somente por ele mesmo e por 1.*/

let divisiveis = 0;
let valorTeste = 80;

for (let i =0; i<= valorTeste; i++){

    if(valorTeste% i === 0){
        divisiveis ++;
    }

}

if (divisiveis == 2){
    console.log('Número é primo');
}else{
    console.log('Número não é primo')
}