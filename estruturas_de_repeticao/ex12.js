/*12. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia 
as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas,
 bem como a média das temperaturas.*/

let temperaturas = [22, 35,12,7,4,40];
let max = 0;
let min = 0;
let somaTemperaturas = 0;

for(let i = 0; i< temperaturas.length; i++){
    if (temperaturas[i]>max){
        max = temperaturas[i];
        somaTemperaturas += temperaturas[i];
    
    }else if (temperaturas[i]<max){
        min = temperaturas[i];
        somaTemperaturas += temperaturas[i];
        
    }else{
        somaTemperaturas += temperaturas[i];
        console.log(somaTemperaturas);

    }
}
mediaTemperaturas = somaTemperaturas/ temperaturas.length;
console.log(`A maior temperatura é ${max}`);
console.log(`A menor temperatura é ${min}`);
console.log(`A temperatura média é ${mediaTemperaturas}`);

