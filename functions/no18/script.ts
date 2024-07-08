window.addEventListener('load', (): void => {

    const button: HTMLBodyElement | null = document.querySelector("[rel='js-btn']");

    button?.addEventListener('click', (): void => {
      main();  
    })

    const calcFibonnaci = (informedNumber: number): number[] => {

        let firstNumberFibonnaci: number = 0;
        let secondNumberFibonnaci: number = 1;
        let temporary;

        const resultArray: number[] = [];

        for(let i = 0 ; i <= informedNumber ; i++) {

            resultArray.push(firstNumberFibonnaci);
            
            temporary = firstNumberFibonnaci;
            firstNumberFibonnaci = secondNumberFibonnaci;
            secondNumberFibonnaci = temporary + secondNumberFibonnaci;
        }

        return resultArray;
    }

    const main = () => {
        
        const result = calcFibonnaci(
            Number(prompt('Digite um number'))
        );
    
        console.log(result);
    }
});


// window.addEventListener('load', function(event) {
//     console.log(event);
// });