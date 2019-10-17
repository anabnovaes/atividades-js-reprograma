
//3. Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC

let altura = parseFloat(prompt("Digite sua altura"));

let peso = parseFloat(prompt("Digite seu peso"));

function calcularAltura(peso, altura){
 let imc = peso / (altura*altura);
  return imc;
  
}
let valorIMC = calcularAltura(peso, altura);

console.log(valorIMC);