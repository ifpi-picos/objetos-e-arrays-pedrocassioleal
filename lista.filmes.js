let listaDeFilmes = [];

// Função para adicionar um filme à lista
function adicionarFilme(filme) {
    listaDeFilmes.push(filme);
    console.log(`"${filme}" foi adicionado à lista de filmes.`);
}

// Função para remover um filme da lista
function removerFilme(filme) {
    let index = listaDeFilmes.indexOf(filme);
    if (index !== -1) {
        listaDeFilmes.splice(index, 1);
        console.log(`"${filme}" foi removido da lista de filmes.`);
    } else {
        console.log(`"${filme}" não foi encontrado na lista de filmes.`);
    }
}
function verListaDeFilmes() {
    if (listaDeFilmes.length === 0) {
        console.log("A lista de filmes está vazia.");
    } else {
        console.log("Filmes na lista:");
        listaDeFilmes.forEach((filme, index) => {
            console.log(`${index + 1}. ${filme}`);
        });
    }
}

// Exemplo de uso:
adicionarFilme("O Poderoso Chefão");
adicionarFilme("Interestelar");
adicionarFilme("Inception");
verListaDeFilmes(); // Exibe a lista de filmes

removerFilme("Interestelar");
verListaDeFilmes(); // Exibe a lista de filmes atualizada

removerFilme("Titanic"); // Tenta remover um filme que não está na lista
verListaDeFilmes(); // Exibe a lista de filmes atualizada