  
// Escreva uma função comprimentoMedioPalavras que receba duas strings e devolva o comprimento médio de ambas as strings.
// Exemplo de entrada:
// console.log(comprimentoMedioPalavras('xuxu', 'bananada')); // --> 6

function comprimentoMedioPalavras(palavra1, palavra2){
    let comprimento1 = palavra1.length;
    let comprimento2 = palavra2.length;
    return (comprimento1 +comprimento2)/2

}

console.log(comprimentoMedioPalavras('xuxu', 'bananada'));