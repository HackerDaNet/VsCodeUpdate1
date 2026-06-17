
//array de objetos
let filmes = [

{  
    id: 1,
    titulo: "filme1",
    genero: "Teste",
    ano: 200
},

{
    id: 2,
    titulo: "filme2",
    genero: "Teste2",
    ano: 200
},
{
   id: 3,
    titulo: "filme3",
    genero: "Teste3",
    ano: 200
}

]

//Mostrar todos os usuarios

console.log(filmes);


//Acessando dados especificos
console.log(filmes[0].titulo)

console.log(filmes[1].titulo)

console.log(filmes[2].titulo)

//Percorrendo arrays com for
for(let i=0; i<filmes.length; i++){
    console.log(filmes[i])
}


for(let i=0; i<filmes.length; i++){
    console.log(filmes[i].titulo)
}


