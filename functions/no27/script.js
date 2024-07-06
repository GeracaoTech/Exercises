"use strict";
window.addEventListener('load', () => {
    const main = () => {
        const limit = prompt('Digite até que número você quer ver os números primos');
        if (limit != null) {
            const primosArray = generatePrimos(Number(limit));
            showResult(limit, primosArray);
        }
    };
    const generatePrimos = (limit) => {
        const primosArray = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrimo(i)) {
                primosArray.push(i);
            }
        }
        return primosArray;
    };
    const isPrimo = (number) => {
        let count = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i == 0)
                count++;
        }
        return count <= 2 ? true : false;
    };
    const showResult = (limit, primosArray) => console.log(`dentre 1 e ${limit} os seguintes números são primos ${primosArray}`);
    ;
    main();
});
