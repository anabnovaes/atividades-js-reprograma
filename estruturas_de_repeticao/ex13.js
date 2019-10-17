/*13. Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados (um array) alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada. As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:

Resultado final:

Atleta: Aparecido Parente

Melhor nota: 9.9

Pior nota: 7.5

Média: 9.04
*/
let medias = [9.9,7.5,8.4,7.9, 10, 8.7,8];
let nomeAtleta = 'Aparecido Parente';


function calcularMedia(medias, nomeAtleta){
    let nota =0 ;
    let somaNotas = 0;
    let maiorNota = 0;
    let menorNota = 10;
    let mediaFinal = 0;
    for(let i = 0; i < medias.length; i++){
       nota = medias[i];
       if(maiorNota<nota){
           maiorNota = nota;
           somaNotas += nota;
       }else if(menorNota> medias[i]){
           menorNota = medias[i];
           somaNotas += nota;
       }else{
        somaNotas += nota;
       }
    }
    mediaFinal = (somaNotas-menorNota - maiorNota) / (medias.length-2);
    console.log(`Atleta: ${nomeAtleta}`);
    console.log(`Melhor nota: ${maiorNota}`);
    console.log(`Pior nota: ${menorNota}`);
    console.log(`Média : ${mediaFinal}`)
    


}
calcularMedia(medias, nomeAtleta);