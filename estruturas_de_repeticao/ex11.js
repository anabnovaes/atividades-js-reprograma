/*11. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. 
Faça um programa que implemente uma caixa registradora rudimentar.
 O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. 
 Um valor zero deve ser informado pelo operador para indicar o final da compra. 
 O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco.
 Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. */

let valoresCompra = [20, 10.55, 1, 12, 0];
let valorPago = 50;
function calcularCompra(valoresCompra) {
    let ValorAPagar = 0;

    for (let i = 0; i < valoresCompra.length; i++) {
        if (valoresCompra[i] == 0) {
            break;
        } else {
            ValorAPagar += valoresCompra[i];
        }

    }
    return ValorAPagar;
}
let valorTotal = calcularCompra(valoresCompra);
console.log('Total : R$' + valorTotal);
console.log('Dinheiro: R$' + valorPago);
let troco = valorPago- valorTotal;
console.log(`Troco R$ : ${troco.toFixed(2)}`);