/*8. Crie uma função que calcule o número de batidas de acordo com a idade;*/


let idade = parseInt(prompt("Digite sua idade"));

function calcularBatidasPorDia(){
  let batidasDia = (70*60)*24;
  return batidasDia;
  
}
function calcularDiasDeVida(idade){
  return idade * 365;
  
}
function batidasDeVida(diasVividos,batidasDia){
  return batidasDia * diasVividos
}

let batidasPorDia = calcularBatidasPorDia();
let diasDeVida = calcularDiasDeVida(idade);
let batidasVividas = batidasDeVida(diasDeVida,batidasPorDia)
console.log(batidasVividas)


 console.log('Seu coração bateu : ' + batidasVividas + ' vezes até hoje');