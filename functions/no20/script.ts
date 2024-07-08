window.addEventListener('load', (): void => {

    const main = () => {
        const string = prompt('Digite uma palavra');
        const caractere = prompt('Digite o caractere que deseja procurar');

        const stringArray = convertStringToArray(string!);
        const quantityCaractereInArray = 
            countQuantityCaractereInArray(stringArray, caractere!)
        ;

        showResults(string!, caractere!, quantityCaractereInArray);
    }

    const convertStringToArray = (string: string): string[] => 
        string
            .split('')
            .filter(caractere => caractere.trim() != '')
        ;
    ;

    const countQuantityCaractereInArray = (
        stringArray: string[], caractere: string
    ): number => {

        let count = 0;

        stringArray.forEach(caractereInArray => {
            if(caractereInArray.toLowerCase() == caractere.toLowerCase()) count++;
        })

        return count;
    }

    const showResults = (
        string: string, 
        caractere: string, 
        quantityCaractere: number
    ): void => {
        console.log(`
            Na palavra '${string}' o caractere '${caractere}' parece ${quantityCaractere} vezes    
        `);
    }

    main();
});