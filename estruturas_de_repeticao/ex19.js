function verificarPangrana(frase){
    const alfabeto = ['a','b', 'c', 'd', 'e', 'f','g','h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
    //converter alfabeto para minusculas
	fraseMinuscula = frase.toLowerCase();


	//Percorrer alfabeto
	for (let i = 0; i < alfabeto.length; i++) {
		let letraAtual = alfabeto[i];
		
		if (!fraseMinuscula.includes(letraAtual)) return false;
	}
	return true;
};
console.log(verificarPangrana('Mi '));

//método apresentado pela Débora
function isPangram(str){
    let alfabeto = 'abcdefghijlmnopqrstuvxz';
    alfabeto = alfabeto.split('');
    str = str.toLowerCase();
    for (let i = 0; i<alfabeto.length; i++){
        if(str.indexOf(alfabeto[i])<0){
            return false;
        }
        return true;
    }
}
isPangram('mi')