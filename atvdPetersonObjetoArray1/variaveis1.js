//Array de objetos no javascript

//objetos
//criando um bojeto chamado usuario

let produto = {
    //propriedade: valor
    nome: "Trem",
    preco: 200,
    quantidade: 200
}

console.log(produto);



//array de objetos
let produtos = [

{  
    id: 1,
    nome: "Trem",
    preco: 200,
    quantidade: 200
},

{
    id: 2,
    nome: "Trem2",
    preco: 210,
    quantidade: 210
},
{
    id: 3,
    nome: "Trem3",
    preco: 220,
    quantidade: 220
}

]

//Mostrar todos os usuarios

console.log(produtos);

console.log(produtos[2]);


//Acessando dados especificos
console.log(produtos[0].nome)

//Percorrendo arrays com for
for(let i=0; i<produtos.length; i++){
    console.log(produtos[i].nome)
}

//Adicionando uma nova propriedade
produtos.categoria = "automotiva"

console.log(produtos.categoria)


//deletando uma propriedade
delete produtos.quantidade
console.log(produtos);

console.log(produtos);

