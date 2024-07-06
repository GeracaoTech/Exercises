window.addEventListener('load', () => {
    
    const main = () => {
        alert("Para parar as notas digite 'sair'");

        const arrayOfStudentGrades: number[] = makeArrayWithGrades();
        const avarage = calcAverage(arrayOfStudentGrades);

        showResult(
            formatGradesArray(arrayOfStudentGrades),
            avarage
        );
    }

    const makeArrayWithGrades = () => {

        const studentGrades: number[] = [];

        while(1) {

            const studentGrade: string | null = prompt('Digite a nota do aluno');

            if(validateStudentGrade(studentGrade)) {
                studentGrades.push(Number(studentGrade));
            } 
            else if(studentGrade?.toLowerCase() == 'sair') {
                break;
            }
            else {
                alert("Número inválido")
            }
        }

        return studentGrades;
    }

    const validateStudentGrade = (studentGrade: string | null): boolean => {

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

    const calcAverage = (studentGrades: number[]): number => 
        studentGrades.reduce((accumulaton, currentValue) => 
            accumulaton + currentValue, 0) / studentGrades.length
        ;
    ;

    const formatGradesArray = (studentGradesArray: number[]): string => studentGradesArray.join(', ');

    const showResult = (formatedStudentGradesArray: string, avarage: number): void => {
        console.log(
            `Sendo as notas do aluno ${formatedStudentGradesArray}. A sua média é de ${avarage}`
        );
    }

    main();
})