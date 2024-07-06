"use strict";
window.addEventListener('load', () => {
    const main = () => {
        alert("Para parar o loop digite 'sair'");
        const arrayOfNumbers = criarArrayOfNumbers();
        const sumOfValuesInArray = sumNumbersInArray(arrayOfNumbers);
        showResult(formatArray(arrayOfNumbers), sumOfValuesInArray);
    };
    const criarArrayOfNumbers = () => {
        const arrayNumbersReturn = [];
        while (1) {
            const number = prompt('Digite um número');
            if (number?.toLowerCase() === 'sair')
                break;
            if (!isNull(number)) {
                const convertedNumber = convertToStringToNumber(number);
                arrayNumbersReturn.push(convertedNumber);
            }
        }
        return arrayNumbersReturn;
    };
    const sumNumbersInArray = (arrayNumbers) => {
        const sumOfValuesInArray = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sumOfValuesInArray;
    };
    const showResult = (arrayOfNumbersFormated, sumOfValuesInArray) => {
        console.log(`Dados os valores: ${arrayOfNumbersFormated}. A soma dentre eles é ${sumOfValuesInArray}}`);
    };
    const isNull = (valueInPromp) => valueInPromp == null ? true : false;
    const convertToStringToNumber = (numberString) => Number(numberString);
    const formatArray = (arrayNumbers) => arrayNumbers.join(', ');
    main();
});
