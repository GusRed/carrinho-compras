let valorFinal;
limpar();

function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split("-")[0]; //Pega a primeira posição que é antes do hífen - 
    let valorProduto = parseInt(produto.match(/\d+/g).join(''));

    let valorQuantidade = valorProduto * quantidade;

    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorQuantidade}</span>
        </section>`;

    valorFinal = valorFinal + valorQuantidade;
    
    let carrinhoTotal = document.getElementById("valor-total");
    carrinhoTotal.textContent = `R$${valorFinal}`;

    document.getElementById("quantidade").value = "";
    document.getElementById("quantidade").placeholder = 0;
}

function limpar(){
    valorFinal = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0"
}