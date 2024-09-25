let listaDeCompras = [];

// Função para adicionar um item à lista de compras
function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`${item} foi adicionado à lista de compras.`);
}

// Função para remover um item da lista de compras
function removerItem(item) {
    let index = listaDeCompras.indexOf(item);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${item} foi removido da lista de compras.`);
    } else {
        console.log(`${item} não foi encontrado na lista de compras.`);
    }
}

// Função para visualizar todos os itens da lista de compras
function verLista() {if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
    } else {
        console.log("Itens na lista de compras:");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    }

    // Exemplo de uso:
    adicionarItem("Maçã");
    adicionarItem("Leite");
    adicionarItem("Pão");
    verLista(); // Exibe a lista de compras

    removerItem("Leite");
    verLista(); // Exibe a lista de compras atualizada

    removerItem("Chocolate"); // Tenta remover um item que não está na lista
    verLista(); // Exibe a lista de compras atualizada