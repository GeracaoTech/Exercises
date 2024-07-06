window.addEventListener('load', () => {

    let produtoValor = + prompt("Escreva o valor do produto");
    let desconto = + prompt("Escreva o percentual do desconto (apenas números)");

    descontoProdutoValor = produtoValor * desconto / 100;
    
    produtoValorComDesconto = produtoValor - descontoProdutoValor;

    alert
    (
        `
            Preço do Produto: R$ ${produtoValor.toFixed(2)} \n
            Desconto de ${desconto.toFixed(1)}%: R$ ${descontoProdutoValor.toFixed(2)} \n
            Preço do Produto com desconto: R$ ${produtoValorComDesconto.toFixed(2)}
        `
    );
});