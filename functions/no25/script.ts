window.addEventListener('load', () => {

    const main = ():boolean => {

        alert("Digite 'sair' para parar o loop");

        const arrayOfElements = makeArrayOfElements();
        const query = prompt('Digite o elemento que deseja procurar');

        
        return isElementPresentInArray(arrayOfElements, query!)
    }

    const makeArrayOfElements = () => {

        const elements: string[] = [];

        while(1) {

            const element: string | null = prompt('Digite um elemento');
            
           if(element?.toLowerCase() == 'sair') {
               break;
           }
           
           if(element != null) {
                elements.push(element);
           }
        }

        return elements;
    }

    const isElementPresentInArray = (arrayOfElements: string[], query: string): boolean => 
        arrayOfElements.includes(query)
    ;
    
    const isFind = main();

    alert(
        isFind ? "O elemento foi encontrado" : "O elemento não foi encontrado"
    );
});