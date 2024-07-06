"use strict";
window.addEventListener('load', () => {
    const calcFibonnaci = (informedNumber) => {
        let firstNumberFibonnaci = 0;
        let secondNumberFibonnaci = 1;
        let temp;
        const resultArray = [];
        for (let i = 0; i <= informedNumber; i++) {
            resultArray.push(firstNumberFibonnaci);
            temp = firstNumberFibonnaci;
            firstNumberFibonnaci = secondNumberFibonnaci;
            secondNumberFibonnaci = temp + secondNumberFibonnaci;
        }
        return resultArray;
    };
    const result = calcFibonnaci(Number(prompt('Digite um number')));
    console.log(result);
});
