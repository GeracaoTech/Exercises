window.addEventListener('load', () => {

    const calcIMC = (
        weight: number, 
        height: number
    ): number => weight / (height ** 2);

    const showResult = (
        result: number
    ): void => console.log(`O seu IMC é igual à ${result.toFixed(2)}`);

    const main = () => {

        const weightUser: number = Number(prompt('Digite seu peso'));
        const heightUser: number = Number(prompt('Digite sua altura'));

        showResult(calcIMC(weightUser, heightUser));
    }

    main();
})