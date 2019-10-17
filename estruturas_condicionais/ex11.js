
/*11. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. 
Em um triângulo válido, a soma dos três ângulos é igual a 180º.*/

function determinarTriangulo(angulo1, angulo2, angulo3){
    if (angulo1+angulo2+angulo3 === 180){
      return 'Os ângulos digitados formam um triângulo válido';
    }
    else{
      return 'Os ângulos não formam um triângulo';
    }
  }
  
  console.log(determinarTriangulo(100,40,30))
  