"use strict";
window.addEventListener('load', () => {
    const button = document.querySelector("[rel='js-btn']");
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        main();
    });
    const calcFibonnaci = (informedNumber) => {
        let firstNumberFibonnaci = 0;
        let secondNumberFibonnaci = 1;
        let temporary;
        const resultArray = [];
        for (let i = 0; i <= informedNumber; i++) {
            resultArray.push(firstNumberFibonnaci);
            temporary = firstNumberFibonnaci;
            firstNumberFibonnaci = secondNumberFibonnaci;
            secondNumberFibonnaci = temporary + secondNumberFibonnaci;
        }
        return resultArray;
    };
    const main = () => {
        const result = calcFibonnaci(Number(prompt('Digite um number')));
        console.log(result);
    };
});
// window.addEventListener('load', function(event) {
//     console.log(event);
// });
