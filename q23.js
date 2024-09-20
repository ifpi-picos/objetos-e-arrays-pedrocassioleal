function imprimirPrimeiroNome(nomeCompleto) {
    // Dividir o nome completo em um array de palavras
    let nomes = nomeCompleto.split(" ");
  
    // Obter o primeiro nome
    let primeiroNome = nomes[0];
  
    // Imprimir o primeiro nome
    console.log("Primeiro Nome:", primeiroNome);
  }
  
  // Exemplo de uso
  imprimirPrimeiroNome("Maria Vitória de Souza");