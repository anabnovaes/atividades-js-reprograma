// Dada uma lista de inteiros não negativos e o resultado desejado de uma soma, encontre dois números na lista cuja soma seja o resultado desejado.

// Exemplo:
// console.log(encontrarParDaSoma([3, 34, 4, 12, 5, 2], 9); // --> [4, 5]

function encontrarParDaSoma(array, soma){
    for(let i = 0; i<array.length; i++){
        for(let j = 0;j<array.length; j++){
            if(i==j){
                continue;
            }
             if (array[i] + array[j] ===soma){
               return (`[${array[i]},${array[j]}]`);
            }

        }
    }
}
console.log(encontrarParDaSoma([3, 34, 4, 12, 5, 2], 9));