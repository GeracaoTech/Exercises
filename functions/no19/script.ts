window.addEventListener('load', () => {
    
    const main = () => {
        
        const stringWithPairs: string | null = prompt('Digite sua palavra');

        if(validatePrompt(stringWithPairs)) {

            
            const resultWithEmptySpaces: string[] = convertStringToArray(stringWithPairs!);
            const resultWithoutEmptySpaces: string[] = removeEmptySpaces(resultWithEmptySpaces);
            const countPairsInArray: number = countPairs(resultWithoutEmptySpaces)

            showResults(
                stringWithPairs!, 
                getPairs(resultWithoutEmptySpaces), 
                countPairsInArray
            );
        } 
        else 
            alert('Digite algo válido');
        ;

    }

    const convertStringToArray = (
        string: string
    ): string[] => {

        const convertedStringToArray: string[]  = string.split('');
        return convertedStringToArray
    }

    const removeEmptySpaces = (
        stringArrayWithSpaces: string[]
    ):  string[] => {

        return stringArrayWithSpaces
            .map(caractere => caractere.trim())
            .filter(caractere => caractere != '')
        ;
    }

    const getPairs = (stringArray: string[]): string[] => {

        const pairs = ['a', 'e', 'i', 'o', 'u'];
        const stringPairs = stringArray.filter(
            caractere => pairs.includes(caractere.toLowerCase())
        );

        return stringPairs;
    }

    const countPairs = (stringArray: string[]): number => {

        const pairs = ['a', 'e', 'i', 'o', 'u'];
        const stringPairs = stringArray.filter(
            caractere => pairs.includes(caractere.toLowerCase())
        );

        return stringPairs.length;
    }

    const validatePrompt = (
        possibleNullableValue: string | null
    ): boolean => {

        const isValid = possibleNullableValue != null ? 
            true : false
        ;

        return isValid;
    }

    const showResults = (
        string: string, 
        stringArray: string[], 
        countPairs: number
    ): void => {

        console.log(`
            A string ${string} possue ${countPairs} vogais, sendo esta(s) ${stringArray}
        `);
    }

    main();
});