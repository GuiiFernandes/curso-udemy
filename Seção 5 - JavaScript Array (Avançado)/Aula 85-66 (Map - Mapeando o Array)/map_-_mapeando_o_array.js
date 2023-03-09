console.log('MAP - MAPEANDO O ARRAY:');
//Map é extremamente similar a filter
//Filter filtra o array retornando um array novo igual ou menor ao original.
//Map altera os elementos do meu array original e cria um novo, retornando um array do mesmo tamanho que o original, porém com dados trocados
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//O funcionamento também é igual, função de callback, parâmetro do array para a função, a diferença é o retorno do callback.

console.log('->Map com função de callback anônima.');
//Quero dobrar os valores do meu array:
const numDobro = numeros.map(function(valor, indice, array) { //crio uma constante que vai receber meu novo array, coloco numeros.map() pra indicar o array que quero mapear
//Dentro dos parenteses crio a função de callback que vai receber do .map() os argumentos valor, indice e array para cada elemento do meu array.
    return valor*2;  //Dentro do bloco tenho uma ação que será executada pelo .map() em todos os elementos do meu array.
});
console.log(numDobro);

console.log('->Map com função de callback arrow.');
const numDobro2 = numeros.map(valor => valor*2); //crio a const que vai receber meu novo array, informo que ela recebera o mapeamento de numeros.
//E digo que a ação a ser executada para criar o novo array é dobrar o valor de cada elemento do meu array.
console.log(numDobro2);

console.log('MAP: MAPEANDO O OBJETO:');
//É muito importante saber map, filter e reduce em objetos pq muitas APIs vão te retornar um JSON com objetos.
const pessoas = [
    {nome: 'Guilherme', idade: 30},
    {nome: 'Pli', idade: 29},
    {nome: 'Alice', idade: 1},
    {nome: 'Valentina', idade: 5},
    {nome: 'Zé Carlos', idade: 70},
    {nome: 'Cristina', idade: 51}
]; //Array onde cada elemento é um objeto pessoa

console.log('//Retorne apenas uma string com o nome da pessoa');
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

console.log('//Remova a chave nome do objeto');
console.log('Forma 1: (Deletando o objeto nome)');
const idades = pessoas.map(obj => { //Crio a const idade que vai receber o array modificado de pessoas.
    //Como função de callback eu atribuo uma arrow function pegando os valores do meu array (objetos)
    //delete obj.nome; //deleto os nomes do meu objeto
    //ATENÇÃO: USANDO O DELETE VOCÊ DELETA A CHAVE NOME DO OBJETO PESSOAS. DEPOIS SE VOCÊ PRECISAR DOS DADOS DO OBJETO PESSOAS ELES NÃO EXISTIRÃO MAIS.
    return obj; //retorno o array
});
console.log(idades);

console.log('Forma 2: (Criando um array só com as idades)');
console.log('     ->função anônima:');
const idades2 = pessoas.map(function(obj) { //Crio a variavel que vai receber o novo array modificado por map.
    return {idade: obj.idade}; //Retorno um objeto com chave idade que recebe o valor do meu obj.idade
});
console.log('     ->arrow function:');
//Para arrow function existe uma peculiaridade para retornar objetos.
const idades3 = pessoas.map(obj => ({idade: obj.idade})); 
/*
ATENÇÃO:
Se eu tentar retornar um objeto em arrow function sem o return e sem as chaves do bloco da função 'obj => {idade: obj.idade}' vou ter um erro e retornará undefined
Isso acontece pq as {} assumem o papel de chave do bloco da arrow function e não de criação de um objeto.
Para resolver: Envolvo '{idade: obj.idade}' em parenteses, tornando essa parte em uma expressão que não faz parte da função em si.
Assim, as chaves são da expressão 'idade: obj.idade' e não de 'obj =>'.
*/
console.log(idades3);

console.log('//Adicione uma chave id em cada objeto');
console.log('Arrow Function retornando um novo objeto');
const cadastro = pessoas.map((obj, indice) => ({id: (indice + 1), nome: obj.nome, idade: obj.idade}));
console.log(cadastro);

console.log('Função anonima adicionando uma chave ao objeto');
const comIds = pessoas.map(function (obj, indice) {
    //obj.id = (indice + 1); //O problema é que essa forma também cria o ID dentro do objeto inicial pessoas.
    return obj;
});
console.log(comIds);
//ATENÇÃO: Sempre que eu manipulo o objeto e não uso ele para criar um novo, isso modifica o objeto original.
//Isso acontece pq objetos são passados por referência e sempre que eu mexo no obj que recebeu por referência como argumento um objeto qualquer modificação nele mexe no objeto origianal.
//Outra forma de resolver esse problema é:
console.log('Adicionando chave sem mexer no objeto original');
const comIds2 = pessoas.map((obj,i) => {
    const novoObj = {...obj}; //Crio um novo objeto usando o spread/rest
    //Dessa forma eu crio uma cópia do objeto alocando ele em outro lugar da memória.
    novoObj.id = i+1;
    return novoObj;
});
console.log(comIds2);
console.log('----');
console.log(pessoas);