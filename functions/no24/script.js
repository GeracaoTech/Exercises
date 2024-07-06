"use strict";
window.addEventListener('load', () => {
    const main = () => {
        alert("Para parar de digitar os números digite 'sair'");
        const arrayOfNumbers = makeArrayOfNumbers();
        const pairsNumbersArray = filterPairs(arrayOfNumbers);
        showResult(arrayOfNumbers, pairsNumbersArray);
    };
    const makeArrayOfNumbers = () => {
        const numbers = [];
        while (1) {
            const number = prompt('Digite um número');
            if (validateNumber(number)) {
                numbers.push(Number(number));
            }
            else if (number?.toLowerCase() == 'sair') {
                break;
            }
            else {
                alert("Número inválido");
            }
        }
        return numbers;
    };
    const validateNumber = (studentGrade) => {
        if (studentGrade != null) {
            if (!Number.isNaN(Number(studentGrade))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    const filterPairs = (arrayOfNumbers) => arrayOfNumbers.filter(number => number % 2 == 0);
    const showResult = (arrayOfNumbers, arrayOfPairsNumbers) => {
        console.log(`Dado o array ${arrayOfNumbers}. Os seguintes números são pares ${arrayOfPairsNumbers}`);
    };
    main();
});
