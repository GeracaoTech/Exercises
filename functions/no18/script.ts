window.addEventListener('load', () => {

    const calcFibonnaci = (informedNumber: number): number[] => {

        let firstNumberFibonnaci: number = 0;
        let secondNumberFibonnaci: number = 1;
        let temp;
        const resultArray = [];

        for(let i = 0 ; i <= informedNumber ; i++){

            resultArray.push(firstNumberFibonnaci);
            
            temp = firstNumberFibonnaci;
            firstNumberFibonnaci = secondNumberFibonnaci;
            secondNumberFibonnaci = temp + secondNumberFibonnaci;
        }

        return resultArray;
    }

    const main = () => {
        
        const result = calcFibonnaci(
            Number(prompt('Digite um number'))
        );
    
        console.log(result);
    }

    main();
})