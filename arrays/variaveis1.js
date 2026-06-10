//Criando arrays
let usuario = [10, "Carlos", "Maria"]
console.log(usuario);

//Acessando elementos do array
console.log(usuario[1]);

//Adicionando item no final da arrays
//push()

usuarios.push("Pedro");
console.log(usuarios);

//remove o ultimo item do array
//pop()

usuarios.pop();
console.log(usuarios);

//Remove o primeiro item do array
//shift()

usuarios.shift();
console.log(usuarios);

//Mostra a quantidade de itens
//length

console.log(usuarios.length);

//Verifica se é um item existente
//includes()
console.log(usuarios.includes("Maria"));

//mostra a posição de cada item
//indexOf()
console.log(usuarios.indexOf("Maria"));

//remove ou adiciona itens
//splice()
usuarios.splice(0, 1);
console.log(usuarios);

//copia parte do array
//slice()

//sintaxe
//array.slice(inicio, fim)

let usuarios2 = [10, "Carlos", "Maria", "Pedro", "Joao"];

let novaArray = usuarios2.slice(0, 2);  
console.log(novaArray);

//inverter a ordem dos itens
//reverse()
usuarios2.reverse();
console.log(usuarios2);

//ordena em ordem alfabética ou numérica
//sort()

usuarios2.sort();
console.log(usuarios2);

//forEacg
//percorre o array
usuarios2.forEach(function(usuario){ //percorre cada item do array e executa a função para cada item
    console.log(usuario); //imprime cada item do array
});

/* usuarios -> arrays
forEach() -> percorrer todos elementos
function(usuario) -> função executada para cada elemeneto do array
usuario -> variavel temporaria do array, cada elemento do array é atribuido a essa variavel a cada iteração
console.log(usuario) -> imprime cada elemento do array
*/

//for OF
//OUTRA FORMA DE PERCORRER
//O for... of percorre os valores do array e ignora os indices pegando apenas os valores do array
for(let usuario of usuarios2){ 
    console.log(usuario); //imprime cada item do array
}

//FOR IN
// MAIS UTILIZADO
//O for... in percorre os indices(posições), ou seja, os numeros que representam a posição dos itens do array, e a partir desses indices podemos acessar os valores
//Podemos acessar o valor e o indice do array
for(let indice in usuarios){
    console.log(indice)
    console.log(usuarios[indice])
}


//FOR TRADICIONAL
//MAIS UTILIZADO
//elementos que existem no array
//O length informa a quantidade de itens do array, ou seja, o numero total de elementos, e o for tradicional percorre os indices do array, ou seja, os numeros que representam a posição dos itens do array, e a partir desses indices podemos acessar os valores
for(let i=0; i < usuarios.length; i++){
    console.log(i); //imprime o indice
    console.log(usuarios2[i]); //imprime o valor do array na posição do indice
}

//join()
//TRANSFORMA O ARRAY EM TEXTO
//O método join(" - ") percorre todos os
//elementos e coloca " - " entre eles

let nomes = usuarios2.join(" - ")
console.log(nomes);

//concat()
//JUNTA ARRAYS
let admin = ["Admin1", "Admin2"]; //concat() junta os elementos de dois ou mais arrays e retorna um novo array
let sistema = usuarios2.concat(admin); //concat() não altera os arrays originais, ele retorna um novo array com os elementos dos arrays concatenados
console.log(sistema); //imprime o novo array com os elementos dos arrays concatenados