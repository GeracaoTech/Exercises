window.addEventListener('load', () => {

    let valorParcela = + prompt('Digite o valor da parcela');
    let parcelasPagas = + prompt('Digite o total de parcelas pagas');
    let totalParcelas = + prompt('Digite o total de parcelas ao todo');

    let resultadoTotal = valorParcela * totalParcelas;
    let resultadoDevedor = valorParcela * (totalParcelas - parcelasPagas);

    alert(
        `
            Valor total do consórcio: R$ ${resultadoTotal.toFixed(2)}
            Saldo devedor: R$ ${resultadoDevedor.toFixed(2)}
        `
    );
});