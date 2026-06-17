
//array de objetos
let jogo = [

{  
    id: 1,
    nome: "Goku",
    jogo_de: "Fazendeiro"
},

{
    id: 2,
    nome: "Goku Black",
    jogo_de: "Juiz"
},
{
   id: 3,
    nome: "Vegeta",
    jogo_de: "Dono de empresa"
},
{
    id: 4,
    nome: "Gohan",
    jogo_de: "Policial"
}

]

//Mostrar todos os usuarios

console.log(jogo);

jogo.push(
    {
        id: 5,
        nome: "Enaldinho",
        jogo_de: "Forja"
    }
)
//Percorrendo arrays com for
for(let i=0; i<jogo.length; i++){
    console.log(jogo[i])
}

//procurando usuario com id 3
for(let i = 0; i < jogo.length; i++){
    if(jogo[i].id === 3){
    console.log("Jogo encontrado")
    console.log(jogo[i])
    }
}

//Percorrendo arrays com for
for(let i=0; i<jogo.length; i++){
    console.log(jogo[i].nome && jogo[i].jogo_de)
}