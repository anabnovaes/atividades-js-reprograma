
/*7. Crie uma função que calcule quantos batidas por dia dá um coração,
  considerando que, ele bate a 70 bpm;*/

  function calcularBatidas(){
    let batidasDia = (70*60)*24;
    return batidasDia;
    
  }
  
  console.log('O coração realiza '+calcularBatidas()+' por dia');
  