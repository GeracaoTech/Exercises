window.addEventListener('load', () => {

    let notasAlunoArray = [];
    let media = 0;

    for(count = 0 ; count <= 2 ; count++) {
        notaAluno = + prompt("Digite sua nota");
        notasAlunoArray.push(notaAluno);
    }

    notasAlunoArray.forEach(nota => {
        media += nota;
    });

    media = media / notasAlunoArray.length;

    alert(`A sua média é: ${media.toFixed(1)}`);
});