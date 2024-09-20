function solicitarFilmes() {
    let filmes = [];

    for (let i = 0; i < 5; i++) {
        let filme = prompt("Digite o nome do filme " + (i + 1) + ":");
        filmes.push(filme);
    }

    console.log("Os filmes informados são:");
    filmes.forEach((filme, index) => {
        console.log((index + 1) + ". " + filme);
    });
}

solicitarFilmes();