"use strict";
window.addEventListener('load', () => {
    const main = () => {
        const stringWithPairs = prompt('Digite sua palavra');
        if (validatePrompt(stringWithPairs)) {
            const resultWithEmptySpaces = convertStringToArray(stringWithPairs);
            const resultWithoutEmptySpaces = removeEmptySpaces(resultWithEmptySpaces);
            const countPairsInArray = countPairs(resultWithoutEmptySpaces);
            showResults(stringWithPairs, getPairs(resultWithoutEmptySpaces), countPairsInArray);
        }
        else
            alert('Digite algo válido');
        ;
    };
    const convertStringToArray = (string) => {
        const convertedStringToArray = string.split('');
        return convertedStringToArray;
    };
    const removeEmptySpaces = (stringArrayWithSpaces) => {
        return stringArrayWithSpaces
            .map(caractere => caractere.trim())
            .filter(caractere => caractere != '');
    };
    const getPairs = (stringArray) => {
        const pairs = ['a', 'e', 'i', 'o', 'u'];
        const stringPairs = stringArray.filter(caractere => pairs.includes(caractere.toLowerCase()));
        return stringPairs;
    };
    const countPairs = (stringArray) => {
        const pairs = ['a', 'e', 'i', 'o', 'u'];
        const stringPairs = stringArray.filter(caractere => pairs.includes(caractere.toLowerCase()));
        return stringPairs.length;
    };
    const validatePrompt = (possibleNullableValue) => {
        const isValid = possibleNullableValue != null ?
            true : false;
        return isValid;
    };
    const showResults = (string, stringArray, countPairs) => {
        console.log(`
            A string ${string} possue ${countPairs} vogais, sendo esta(s) ${stringArray}
        `);
    };
    main();
});
