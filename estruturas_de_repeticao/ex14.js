/*14. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1.
 Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
 Faça um algoritmo que dado um número calcule o fatorial do mesmo.*/
function calcularFatorial(fatorial){
    let valorFator = 1;
    for (let i = fatorial - 1;  i >= 1; i--){

     fatorial *= i;
    }
    return fatorial;
}
console.log(calcularFatorial(10));