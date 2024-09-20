const produto = {
    nome: 'Camiseta',
    preco: 29.99,
    quantidade: 150
  };
  
  const valorTotalEstoque = produto.preco * produto.quantidade;
  
  console.log('Valor total do estoque:', valorTotalEstoque.toFixed(2));