let arrayNumeros = [1,2,3,4,5,'xuxu'];
let valorPesquisa = 'xuxu';

function retornaPosicaoNumero(arrayNumeros, valor){
    for (let i = 0; i <arrayNumeros.length; i++){

        if(valorPesquisa == arrayNumeros[i]){
            console.log(i);
        }
    }
}

retornaPosicaoNumero(arrayNumeros, valorPesquisa);