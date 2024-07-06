window.addEventListener('load', () => {

    const main = () => {
        const givenStringUser: string | null = prompt('Digite a string que deseja inverter');

        if(givenStringUser !== null) {
            const stringArrayCreated = createArrayOfTheString(givenStringUser);
            const reservedStringArrayCreated = reverseArray(stringArrayCreated);

            const reversedString = joinArray(reservedStringArrayCreated);

            showResult(givenStringUser, reversedString);
        }
    }

    const createArrayOfTheString = (string: string): string[] => string.split('');

    const reverseArray = (stringArray: string[]): string[] => stringArray.reverse();

    const joinArray = (stringArray: string[]): string => stringArray.join('');

    const showResult = (
        givenStringUser: string, 
        reversedGivenStringUser: string
    ): void => {
        console.log(
            `Dada a string: ${givenStringUser}, a forma invertida é ${reversedGivenStringUser}`
        );
    }

    main();
});