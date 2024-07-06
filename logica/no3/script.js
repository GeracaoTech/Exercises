window.addEventListener('load', () => {

    let produtoValor = + prompt("Digite o valor do produto");

    descontoProdutoValor = produtoValor * 10 / 100;
    
    produtoValorComDesconto = produtoValor - descontoProdutoValor;

    alert
    (
        `
            Preço do Produto: R$ ${produtoValor.toFixed(2)} \n
            Desconto de 10%: R$ ${descontoProdutoValor.toFixed(2)} \n
            Preço do Produto com desconto: R$ ${produtoValorComDesconto.toFixed(2)}
        `
    );
});