console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1); //removendo um item da lista
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1); //removendo um item da lista
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!")
    listaDeDestinos.splice(2, 1); //removendo um item da lista
} else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque:\n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}



console.log(listaDeDestinos);