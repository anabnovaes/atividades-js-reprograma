// Escreva uma função chamada credencialEhValida.
// Dado um nome e uma senha, credencialEhValida retorna true se o nome contiver mais do que 3 caracteres e a senha, pelo menos 8 caracteres. Caso contrário, retorna false.

// Exemplo:
// console.log(credencialEhValida('Xuxu', 'minhasenha'));


function credencialEhValida(usuario, senha){
    if (usuario.length> 3 && senha.length>=8){
        return 'é válida'
    }
    else{
        return 'não é válida'
    }
}
console.log(credencialEhValida('Xuxu', 'a'));