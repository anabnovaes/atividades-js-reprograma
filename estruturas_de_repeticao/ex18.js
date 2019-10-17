/*18. Escreva um algoritmo que printe o seguinte padrão no console:

1

22

333

4444

55555 */

function exibirPadrao(numeroVezes){
    let digitos = 0;
    for (let i =1; i<=numeroVezes; i++){
        let linha = '';
        for(let j = 1; j <=i; j++){
            linha += i;
        }
        console.log(linha);
    }
}
exibirPadrao(5);