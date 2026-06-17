
//array de objetos
let alunos = [

{  
    id: 1,
    nome: "Goku",
    nota: 7,
    matricula: 200
},

{
    id: 2,
    nome: "Goku Black",
    nota: 10,
    matricula: 201
},
{
   id: 3,
    nome: "Vegeta",
    nota: 8,
    matricula: 202
},
{
    id: 4,
    nome: "Gohan",
    nota: 9,
    matricula: 203
}

]

//Mostrar todos os usuarios

console.log(alunos);

alunos.push(
    {
        id: 5,
        nome: "Whis",
        nota: 10,
        matricula: 204
    }
)

console.log(alunos)

alunos.pop();

console.log(alunos)

//Percorrendo arrays com for
for(let i=0; i<alunos.length; i++){
    console.log(alunos[i])
}



