console.log('REDUCE - REDUZINDO O ARRAY:');
//Reduce pode ser utilizada de várias formas, mas é mais utilizada para reduzir um array.
//Reduce é tão versátil que você consegue fazer map e filter com reduce, mas não é indicado.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Reduce usa uma função de callback igual map e filter, porém com duas diferenças
//Fica: variável = array.reduce(FuncaoCallback, valorInicialAcumulador);

console.log('//Some todos os números: (reduce)');
const total = numeros.reduce(function(acumulador, valor, indice, array) { //Reduce tem um parâmetro a mais que seus primos e tem um valor inicial para o acumulador da função de callback
    //reduce tem que obrigatoriamente retornar algo, pois o acumulador muda primeiro pelo valor inicial e depois de acordo com o que a função de callback retorna
    //Se ela não retorna nada, na primeira iteração da função de callback o acumulador vai tentar somar seu valorInicial com undefined.
    console.log(acumulador, valor); //Vou mostrando o acumulador e o valor que está sendo analisado na iteração do array
    return acumulador+=valor; //E sempre retorno meu acumulador somado ao valor do elemento da iteração
}, 0); //Valor inicial é opcional, se não for mandado ele será o valor do primeiro elemento do array.
//O papel principal do reduce então é reduzir o array a um único número, porém ele pode ser usado de inúmeras formas.

console.log('//Retorne um array com os pares: (filter)');
//Para fazermos o reduce com função de filter basta eu criar a função usando os parâmetros acumulador e valor e setar que o valor inicial do acumulador é um array vazio.
const pares = numeros.reduce((acumulador, valor) => { //Usei arrow function pra simplificar meu código
    if(valor % 2 ===0) acumulador.push(valor); //Se o módulo de valor/2 foi igual a 0, eu puxo o valor para meu acumulador.
    return acumulador; //retorno meu acumulador para as próximas iterações.
},[]); //Note que meu valor inicial do acumulador é um array vazio.
console.log(pares); //retorno o array só com os números pares.
//Poderiamos ter feito isso de forma muito mais simples com o filter. Então, não é recomendado usar o reduce para isso.

console.log('//Retorne um array com o dobro dos valores: (map)');
//Mais simples que a forma anterior, vou fazer igual, porém...
const dobro = numeros.reduce((acumulador, valor) => { //crio a variável que recebe o resultado de reduce com a função callback com parâmetros acumulador e valor
    acumulador.push(valor * 2); //puxo para o acumulador o valor do elemento que está sendo iterado multiplicado por 2
    return acumulador; //retorno meu acumulador para as próximas iterações.
},[]); //valor inicial do acumulador é um array vazio.
console.log(dobro); //Também faria isso mais facilmente com map.

//Por ser mais fácil resolver esses problemas com filter e map, usamos o reduce para reduzir o array a só um dado mesmo...
console.log('//Some os valores ímpares do array: (reduce com condição)');
const somaPar = numeros.reduce((acumulador, valor) => { //Crio a função reduce utilizando os parâmetros acumulador e valor no callback
    if(valor % 2 !== 0) acumulador += valor; //Se o resto da divisão de valor por 2 for diferente de 0 eu somo valor ao valor atual do acumulador.
    return acumulador; //Retorno meu acumulador para a próxima iteração.
}, 0); //Nesse caso é muito importante setar o valor inicial do acumulador pq se eu não utilizá-lo, o primeiro valor do array passa a ser o valor inicial do acumulador e não é analisado pela condição necessária para soma.
console.log(somaPar);

console.log('-> Reduce com objeto:');
const pessoas = [
    {nome: 'Guilherme', idade: 30},
    {nome: 'Pli', idade: 29},
    {nome: 'Alice', idade: 1},
    {nome: 'Valentina', idade: 5},
    {nome: 'Zé Carlos', idade: 70},
    {nome: 'Cristina', idade: 51}
];

console.log('//Retorne a pessoa mais velha:');
console.log('Feito por mim:');
const velho = pessoas.reduce((acumulador, obj) => {
    if (obj.idade > acumulador.idade) acumulador = {...obj}; //Se a idade do obj iterado for maior que do acumulador, acumulador recebe o valor copiado (spread para não passar por referência) do obj
    return acumulador; //retorna acumulador
});
console.log(velho);

console.log('Forma do prof:');
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador; //Se a idade que está no acumulador for maior que a idade do valor iterado, retorno o acumulador (ou seja, não altero meu acumulador pq aquela pessoa é mais velha!).
    //Se essa condição não for atendida é pq meu objeto valor tem a idade maior, então
    return valor; //Retorno o valor, ele se torna meu acumulador para a próxima iteração
});
console.log(maisVelha);
/*
ATENÇÃO: Em ambas as formas, não utilizamos valor inicial para o acumulador 
Isso pq na primeira iteração meu acumulador assume o valor do objeto de indice 0 do meu array pessoas e o valor/obj assume o valor do objeto de indice 1 do meu array pessoas.
*/