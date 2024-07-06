"use strict";
window.addEventListener('load', () => {
    const main = () => {
        alert("Para parar as notas digite 'sair'");
        const arrayOfStudentGrades = makeArrayWithGrades();
        const avarage = calcAverage(arrayOfStudentGrades);
        showResult(formatGradesArray(arrayOfStudentGrades), avarage);
    };
    const makeArrayWithGrades = () => {
        const studentGrades = [];
        while (1) {
            const studentGrade = prompt('Digite a nota do aluno');
            if (validateStudentGrade(studentGrade)) {
                studentGrades.push(Number(studentGrade));
            }
            else if (studentGrade?.toLowerCase() == 'sair') {
                break;
            }
            else {
                alert("Número inválido");
            }
        }
        return studentGrades;
    };
    const validateStudentGrade = (studentGrade) => {
        if (studentGrade != null) {
            if (!Number.isNaN(Number(studentGrade))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    const calcAverage = (studentGrades) => studentGrades.reduce((accumulaton, currentValue) => accumulaton + currentValue, 0) / studentGrades.length;
    ;
    const formatGradesArray = (studentGradesArray) => studentGradesArray.join(', ');
    const showResult = (formatedStudentGradesArray, avarage) => {
        console.log(`Sendo as notas do aluno ${formatedStudentGradesArray}. A sua média é de ${avarage}`);
    };
    main();
});
