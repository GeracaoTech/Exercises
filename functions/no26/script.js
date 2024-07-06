"use strict";
window.addEventListener('load', () => {
    const main = () => {
        const givenStringUser = prompt('Digite a string que deseja inverter');
        if (givenStringUser !== null) {
            const stringArrayCreated = createArrayOfTheString(givenStringUser);
            const reservedStringArrayCreated = reverseArray(stringArrayCreated);
            const reversedString = joinArray(reservedStringArrayCreated);
            showResult(givenStringUser, reversedString);
        }
    };
    const createArrayOfTheString = (string) => string.split('');
    const reverseArray = (stringArray) => stringArray.reverse();
    const joinArray = (stringArray) => stringArray.join('');
    const showResult = (givenStringUser, reversedGivenStringUser) => {
        console.log(`Dada a string: ${givenStringUser}, a forma invertida é ${reversedGivenStringUser}`);
    };
    main();
});
