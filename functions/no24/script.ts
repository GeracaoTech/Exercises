window.addEventListener('load', (): void => {
    
    const main = (): void => {
        alert("Para parar de digitar os números digite 'sair'");

        const arrayOfNumbers: number[] = makeArrayOfNumbers();
        const pairsNumbersArray: number[] = filterPairs(arrayOfNumbers);
        
        showResult(arrayOfNumbers, pairsNumbersArray);
    }

    const makeArrayOfNumbers = () => {

        const numbers: number[] = [];

        while(1) {

            const number: string | null = prompt('Digite um número');

            if(validateNumber(number)) {
                numbers.push(Number(number));
            } 
            else if(number?.toLowerCase() == 'sair') {
                break;
            }
            else {
                alert("Número inválido")
            }
        }

        return numbers;
    }

    const validateNumber = (studentGrade: string | null): boolean => {

        if(studentGrade != null) {

            if(!Number.isNaN(Number(studentGrade)) ) {
                return true;
            } 
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    const filterPairs = (arrayOfNumbers: number[]): number[] => 
        arrayOfNumbers.filter(number => number % 2 == 0)
    ;

    const showResult = (
        arrayOfNumbers: number[], 
        arrayOfPairsNumbers: number[]
    ): void => {
        console.log(
            `Dado o array ${arrayOfNumbers}. Os seguintes números são pares ${arrayOfPairsNumbers}`
        );
    }

    main();
})