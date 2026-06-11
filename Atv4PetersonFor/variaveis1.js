let equipeFrontend = ["Lucas", "Ana"];
let equipeBackend = ["Carlos", "Fernanda"];

//concat() junta os elementos de dois ou mais arrays e retorna um novo array
let equipeCompleta = equipeBackend.concat(equipeFrontend);
//concat() não altera os arrays originais, ele retorna um novo array com os elementos dos arrays concatenados
console.log(equipeCompleta); //imprime o novo array com os elementos dos arrays concatenados

console.log(equipeCompleta.length); //imprime a quantidade de elementos do array

equipeCompleta.forEach(function(usuario){ //percorre cada item do array e executa a função para cada item
    console.log(usuario); //imprime cada item do array
});