console.log('forEach:');
//Mais uma estrutura de repetição específica para iterarmos array

const a1 = [10, 20, 30];

console.log('->Iterando com for of:');
for(let valor of a1) { //Para cada valor em a1
    console.log(valor); //Imprima o valor
}

console.log('->Iterando com forEach (função anonima):');
//ForEach tem estrutura igual a filter, map e reduce, porém ele não retorna nada, apenas itera sobre os valores.
a1.forEach(function(valor, indice, array){ //No caso do forEach eu não preciso criar uma variável que vai receber um return pq vou só iterar o array.
//forEach manda como argumento dos parâmetros opcionais da minha função de callback valor, indice do array e o array completo
    console.log(valor, array[indice], indice, array); //podemos pegar o valor usando array[indice], mas não é muito útil já que temos valor.
});

console.log('-> Reduce com forEach (arrow function):');
//Podemos simular a função reduce com forEach, mas é bem mais performático usar o reduce
let total = 0; //Crio uma variável total
a1.forEach(valor => total += valor); //itero com forEach somando o valor do array ao total.
console.log(total);