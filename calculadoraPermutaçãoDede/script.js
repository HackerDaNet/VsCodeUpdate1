function fatorial(n) {
    let resultado = 1;


    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }


    return resultado;
}


function calcular() {
    const n = Number(document.getElementById("n").value);
    const resultadoEl = document.getElementById("resultado");


    if (n === 0) {
        resultadoEl.textContent =
            "Esse é carta rara, corrije o erro que lá fora é selva.";
        return;
    }


    if (n === 67) {
        resultadoEl.textContent =
            `Aqui é o resultado MEEUUUU: ${fatorial(n)} Farmou aura jogador`;
        return;
    }


    if (n === 69) {
        resultadoEl.textContent =
            `Aqui é o resultado MEEUUUU: ${fatorial(n)} pô lá ele meu`;
        return;
    }


    resultadoEl.textContent = `Aqui é o resultado MEEUUUU: ${fatorial(n)}`;
}