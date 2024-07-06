"use strict";
window.addEventListener('load', () => {
    const main = () => {
        alert("Digite 'sair' para parar o loop");
        const arrayOfElements = makeArrayOfElements();
        const query = prompt('Digite o elemento que deseja procurar');
        return isElementPresentInArray(arrayOfElements, query);
    };
    const makeArrayOfElements = () => {
        const elements = [];
        while (1) {
            const element = prompt('Digite um elemento');
            if ((element === null || element === void 0 ? void 0 : element.toLowerCase()) == 'sair') {
                break;
            }
            if (element != null) {
                elements.push(element);
            }
        }
        return elements;
    };
    const isElementPresentInArray = (arrayOfElements, query) => arrayOfElements.includes(query);
    const isFind = main();
    alert(isFind ? "O elemento foi encontrado" : "O elemento não foi encontrado");
});
