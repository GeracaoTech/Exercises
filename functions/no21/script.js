"use strict";
window.addEventListener('load', () => {
    const main = () => {
        const quantityOfNumbers = Number(prompt('Digite a quantidade de números que deseja'));
        if (quantityOfNumbers == null || isNaN(quantityOfNumbers))
            alert('Digite uma quantidade válida');
        else {
            const arrayOfNumbers = createArrayWithNumbers(quantityOfNumbers);
            const theHighestNumberInArray = highestNumberFromArray(arrayOfNumbers);
            showResult(formatArray(arrayOfNumbers), theHighestNumberInArray);
        }
    };
    const highestNumberFromArray = (arrayNumbers) => {
        const highestNumber = Math.max(...arrayNumbers);
        return highestNumber;
    };
    const createArrayWithNumbers = (arrayLength) => {
        const arrayOfNumbers = [];
        for (let i = 0; i < arrayLength; i++) {
            const number = Number(prompt('Digite um número'));
            if (isNaN(number)) {
                alert('Digite um número válido');
                i--;
            }
            else
                arrayOfNumbers.push(number);
        }
        return arrayOfNumbers;
    };
    const showResult = (arrayOfNumbers, theHighestNumberInArray) => console.log(`O maior número no array dado ${arrayOfNumbers} é o número ${theHighestNumberInArray}`);
    const formatArray = (arrayNumbers) => {
        return arrayNumbers.join(', ');
    };
    main();
});
