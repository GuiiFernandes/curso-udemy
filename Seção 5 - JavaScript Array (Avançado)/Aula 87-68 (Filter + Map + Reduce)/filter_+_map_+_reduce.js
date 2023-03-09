console.log('FILTER + MAP + REDUCE:');
//Como unir filter com map e reduce em um único problema:

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log('//Retorne a soma do dobro de todos os pares:');
// Para fazer isso preciso separar meu problema em etapas:
// -> Filtrar os pares (filter)
// -> Dobrar os valores (map)
// -> Somar tudo (reduce)

//Para resolver posso aninha um método com o outro, sendo executado sempre da esquerda pra direita, então:
//Primeiro eu filtro os pares, dobro eles e somo tudo em uma única variável.
console.log('-> Resolvido c/ função anonima:');
const total = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor*2;
}).reduce(function(soma, valor){
    return soma += valor;
});
console.log(total);

console.log('-> Resolvido c/ arrow function:');
const total2 = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((soma, valor) => soma+=valor);
//Posso aninha um método com o outro, sendo executado sempre da esquerda pra direita, então:
//Primeiro eu filtro os pares, dobro eles e somo tudo em uma única variável.
console.log(total2);