/*6. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item
adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. 
A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.*/


function identificaProduto(codigoProduto,quantidadeProduto){
    switch (codigoProduto){
      case 100:
        produto = 'Cachorro quente';
        valorUnitario = 1.70;
        valorTotal = valorUnitario * quantidadeProduto;
      console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                   + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
         case 101:
            produto = 'Bauru Simples';
            valorUnitario = 2.30;
           valorTotal = valorUnitario *quantidadeProduto ;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                   + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
         case 102:
            produto = 'Bauru com ovo';
            valorUnitario = 2.60;
            valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto  : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        
        case 103:
          produto = 'Hamburguer';
            valorUnitario = 2.40;
           valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        case 104:
          produto = 'Cheeseburguer';
          valorUnitario = 2.50;
          valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        case 105:
          produto = 'Refrigerante';
            valorUnitario = 1;
           valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        
        default :
        console.log('Valor incorreto, tente novamente!')
    }
  }
  
  console.log(identificaProduto(100, 20))
  
  
  