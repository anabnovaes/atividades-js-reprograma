/*4. Faça uma função que dado um número, retorne a classificação do ângulo.
(Ângulo agudo: ângulo com medida maior que 0° menor que 90°; 
Ângulo reto: ângulo com medida igual a 90°; 
Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; 
Ângulo raso: ângulo com medida igual a 0° ou 180°; 
Ângulo Côncavo: ângulo com medida entre 180° e 360°; 
Ângulo completo: ângulo com medida igual a 360°)*/

let valorAngulo = parseInt(prompt('Digite o valor do ângulo'));

function classificacaoAngulo(angulo){
  if (angulo>0 && angulo<90){
    return 'Ângulo agudo';
  }
  else if (angulo === 90){
    return 'Ângulo reto';
  }
   else if (angulo>90 && angulo<180){
    return 'Ângulo obtuso';
  }
  else if (angulo === 0 || angulo === 180){
    return 'Ângulo raso';
  }
  else if (angulo>180 && angulo<360){
    return 'Ângulo Côncavo';
  }
  
   else if (angulo ==360){
    return 'Ângulo Completo';
  }
   else {
   return 'Ângulo inválido';
}

}

console.log(classificacaoAngulo(valorAngulo));