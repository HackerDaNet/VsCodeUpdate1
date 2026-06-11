let livros= ["Dom Casmurro","O Pequeno Príncipe","1984","Harry Potter"];

console.log(livros.includes("1984"));

console.log(livros.indexOf("Harry Potter"));

livros.shift();
console.log(livros);

livros.push("O Senhor dos Anéis");
console.log(livros);

livros.sort();
console.log(livros);

for(let i=0; i < livros.length; i++){
    console.log(i); //imprime o indice
    console.log(livros[i]); //imprime o valor do array na posição do indice
}

console.log(livros.length);
