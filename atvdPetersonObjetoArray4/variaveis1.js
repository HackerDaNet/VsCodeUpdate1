
//array de objetos
let funcionario = [

{  
    id: 1,
    nome: "Goku",
    cargo: "Fazendeiro"
},

{
    id: 2,
    nome: "Goku Black",
    cargo: "Juiz"
},
{
   id: 3,
    nome: "Vegeta",
    cargo: "Dono de empresa"
},
{
    id: 4,
    nome: "Gohan",
    cargo: "Policial"
}

]

//Mostrar todos os usuarios

console.log(funcionarios);

//procurando usuario com id 2
for(let i = 0; i < funcionarios.length; i++){
    if(funcionarios[i].id === 3){
    console.log("Funcionario encontrado")
    console.log(funcionarios[i])
    }
}

