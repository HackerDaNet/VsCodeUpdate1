//Criando arrays
let pedidos= ["Hambúrguer","Batata Frita","Refrigerante"]
console.log(pedidos);

pedidos.push("Milk Shake");
console.log(pedidos);

pedidos.shift();

console.log(pedidos.length);

for(let pedido of pedidos){ 
    console.log(pedido); //imprime cada item do array
}

for(let pedido in pedidos){
    console.log(pedido)
    console.log(pedidos[pedido]) //imprime o indice e o valor do array
}