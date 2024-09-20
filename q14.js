function solicitarFilmes() {
    let filmes = [];

    for (let i = 0; i < 5; i++) {
        let filme = prompt("Digite o nome do filme " + (i + 1) + ":");
        filmes.push(filme);
    }

    return filmes;
}
let filmes = solicitarFilmes();


console.log("Os filmes informados são:");
for (let i = 0; i < filmes.length; i++) {
    console.log((i + 1) + ". " + filmes[i]);
}