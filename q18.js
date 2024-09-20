const carros = [
    { nome: 'Carro A', ano: 2008 },
    { nome: 'Carro B', ano: 2012 },
    { nome: 'Carro C', ano: 2015 },
    { nome: 'Carro D', ano: 2010 },
    { nome: 'Carro E', ano: 2021 }
  ];
  
  const carrosPos2010 = carros.filter(carro => carro.ano > 2010);
  
  console.log(carrosPos2010);