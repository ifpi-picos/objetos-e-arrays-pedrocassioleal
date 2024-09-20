
function imprimirPrimeiroUltimoNome(nomeCompleto) {
    // Dividir o nome completo em um array de palavras
    let nomes = nomeCompleto.split(" ");

    // Obter o primeiro nome
    let primeiroNome = nomes[0];

    // Obter o último nome
    let ultimoNome = nomes[nomes.length - 1];

    // Imprimir o primeiro e o último nome
    console.log("Primeiro Nome:", primeiroNome);
    console.log("Último Nome:", ultimoNome);
}

// Exemplo de uso
imprimirPrimeiroUltimoNome("João Vitor de Oliveira");