/*16. Faça um algoritmo que sortei cara (0) ou coroa (1) n vezes.
 E no fim mostre quantas vezes deu cara e quantas coroa. */

 function calcularCaraCoroa(numerosSorteio){
    let ladoCara = 0;
    let ladoCoroa = 0;
    let ladoMoeda ;
    for (let i = 0; i< numerosSorteio; i++){
        ladoMoeda = Math.floor(Math.random() * 2) ;
        if (ladoMoeda == 0){
            ladoCara ++;
        }
        else{
            ladoCoroa ++;
        }

    }
    let resultado = `Você sorteou ${numerosSorteio} vezes. O lado cara foi sorteado: ${ladoCara} vezes e o lado coroa: ${ladoCoroa} vezes `
    return resultado;
}
console.log(calcularCaraCoroa(7));