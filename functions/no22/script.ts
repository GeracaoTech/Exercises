window.addEventListener('load', (): void => {
    
    const main = (): void => {

        alert("Para parar o loop digite 'sair'");

        const arrayOfNumbers: number[] = makeArrayOfNumbers();
        const sumOfValuesInArray: number = sumNumbersInArray(arrayOfNumbers);

        showResult (
            formatArray(arrayOfNumbers),
            sumOfValuesInArray
        );
    }

    const makeArrayOfNumbers = (): number[] => {

        const arrayNumbersReturn: number[] = [];

        while(1) {
            const number: string | null = prompt('Digite um número');

            if(number?.toLowerCase() === 'sair') break;

            // Criar validate funcion!!!
            if(!isNull(number)) {
                const convertedNumber = convertToStringToNumber(number!);

                arrayNumbersReturn.push(convertedNumber);
            }
        }

        return arrayNumbersReturn;
    }

    const sumNumbersInArray = (arrayNumbers: number[]): number => 
        arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    ;
        
    const showResult = (
        arrayOfNumbersFormated: string, 
        sumOfValuesInArray: number
    ): void => {
        console.log(
            `Dados os valores: ${arrayOfNumbersFormated}. A soma dentre eles é ${sumOfValuesInArray}`
        );
    }

    const isNull = (valueInPromp: string | null): boolean => valueInPromp == null ? true : false;

    const convertToStringToNumber = (numberString: string): number => Number(numberString);

    const formatArray = (arrayNumbers: number[]): string => arrayNumbers.join(', ');

    main();
})