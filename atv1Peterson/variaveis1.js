//Atv1

const dobrar = numero => numero * 2;

console.log(dobrar(5));


//Atv2

function media(a, b){
   return (a + b) / 2;
}

let nota = media(8, 6);

if(nota >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Atv3

function maiorNumero(a, b){
   return Math.max(a, b);
}

console.log(maiorNumero(10, 20));

//Atv4

const converterTemperatura = celsius => (celsius * 9/5) + 32;

console.log(converterTemperatura(25));

//Atv5

const Login = (usuario, senha) => {
    const validUsername = "admin";
    const validPassword = "1234";

    if (usuario === validUsername && senha === validPassword) {
        return "Login bem-sucedido";
    } else {
        return "Credenciais inválidas";
    }
};
console.log(Login("admin", "1234"));