/*17. Escreva um algoritmo que printe o seguinte padrão no console:
*******

******

*****

****

***

**

*
*/

function exibeAsteriscos(numeroInclusoes){
    let arrayAsteriscos = [];
    for (let i = 0 ; i < numeroInclusoes; i ++){
        arrayAsteriscos.push('*')

    }
    for (let i = numeroInclusoes; i>0; i--){
        console.log(arrayAsteriscos.join(''));
        arrayAsteriscos.pop();

    }

}
exibeAsteriscos(10);

// utilizando o for duas vezes porém um dentro do outro

function exibeAsteriscos2(numeroInclusoes){
    for (let i = numeroInclusoes; i>0;i--){
        let linha = '';
        for (let j = 1; j<= i; j++ ){
            linha += '*'
        }
        console.log (linha);
    }
}
exibeAsteriscos2(8)