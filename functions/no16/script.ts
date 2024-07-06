window.addEventListener('load', () => {

    const sum = (num1: number, num2: number): number => num1 + num2;
  
    const showResult = (result: number): void => console.log(`O resultado da soma é ${result}`);

    const main = () => {
        const num1: number = Number(prompt('Digite um number'));
        const num2: number = Number(prompt('Digite um number'));

        const resultSoma = sum(num1, num2);
        showResult(resultSoma);
    }

    main();
})