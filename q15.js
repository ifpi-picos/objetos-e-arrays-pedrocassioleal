function solicitarFilmes() {
    let filmes = [];

    for (let i = 0; i < 5; i++) {
        let filme = prompt("Digite o nome do filme " + (i + 1) + ":");
        filmes.push(filme);
    }

    return filmes;
}

// Chamar a função para solicitar os filmes
let filmes = solicitarFilmes();

// Exibir os filmes informados no console usando um loop for...of
console.log("Os filmes informados são:");
for (let [index, filme] of filmes.entries()) {
    console.log((index + 1) + ". " + filme);
}
