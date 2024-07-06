window.addEventListener('load', () => {

    let valoresArray = [0, 0, 0, 0];

    for(key = 0 ; key < valoresArray.length ; key++) {

        newValor = + prompt('Digite um valor');

        valoresArray[key] = newValor;
    }

    let produtoDosDoisPrimeiros = valoresArray[0] * valoresArray[1];
    let produtoDosDoisUltimos = valoresArray[2] * valoresArray[3];

    let result = produtoDosDoisPrimeiros + produtoDosDoisUltimos;

    alert(`O resultado é: ${result}`);
});