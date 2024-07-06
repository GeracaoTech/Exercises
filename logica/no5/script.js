window.addEventListener('load', () => {

    let valorA = parseInt(prompt("Digite o primeiro valor"));
    let valorB = parseInt(prompt("Digite o segundo valor"));

    let valoresArray = [valorA, valorB];
    valoresArray.reverse();

    alert(
        `   
            Valor A: ${valoresArray[0]}
            Valor B: ${valoresArray[1]}
        `
    );
});