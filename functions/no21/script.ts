window.addEventListener('load', () => {

    const main = () => {

        const quantityOfNumbers: number | null = Number(prompt('Digite a quantidade de números que deseja'));

        if(quantityOfNumbers == null || isNaN(quantityOfNumbers)) 
            alert('Digite uma quantidade válida')
        ;
        else {
            const arrayOfNumbers = createArrayWithNumbers(quantityOfNumbers);
            const theHighestNumberInArray = highestNumberFromArray(arrayOfNumbers);

            showResult(formatArray(arrayOfNumbers), theHighestNumberInArray);
        }
    }

    const highestNumberFromArray = (
        arrayNumbers: number[]
    ): number => Math.max(...arrayNumbers);
    
    const createArrayWithNumbers = (arrayLength: number) => {

        const arrayOfNumbers: number[] = [];

        for(let i = 0 ; i < arrayLength ; i++) {
            const number = Number(prompt('Digite um número'));
            
            if(isNaN(number)){
                alert('Digite um número válido');
                i--;
            } 
            else
                arrayOfNumbers.push(number)
            ;
        }

        return arrayOfNumbers;
    }

    const showResult = (
        arrayOfNumbers: string, 
        theHighestNumberInArray: number
    ): void => console.log (
            `O maior número no array dado ${arrayOfNumbers} é o número ${theHighestNumberInArray}`
        );
    ;

    const formatArray = (arrayNumbers: number[]): string => arrayNumbers.join(', ');
    
    main();
});