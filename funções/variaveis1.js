//Função tradicional

function soma(a, b){
   return a + b;
}

//console.log(soma(10, 12));

let resultado = soma(10, 12);
console.log(resultado);

//Função sem retorno

function saudacao(){
    console.log(`Olá, seja bem-vindo!`);
}

saudacao();

//Arrow Function

const multiplicar = (a, b) =>{
    return a * b;
}

console.log(multiplicar(5, 6));

//Arrow function - forma curta

const dobrar = numero => numero * 2;

console.log(dobrar(7));

//Exemplo prático - verificar idade

const verificarIdade = idade => {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(20));