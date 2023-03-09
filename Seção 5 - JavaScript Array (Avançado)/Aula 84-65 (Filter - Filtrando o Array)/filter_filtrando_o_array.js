console.log('FILTER - FILTRANDO O ARRAY:');
//Filter, map e reduce são as funções mais importantes do js.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log('-> n>10 forma convencional:');
//Retorne os números maiores que 10.
const numMaior10=[];
for(let n of numeros) {
    if(n>10) numMaior10.push(n);
}
console.log(numMaior10);

console.log('-> n>10 com filter (modo longo):');
//filter só está disponível para array
//Ela filtra o array sem editar o array original.
//A função de callback recebe 3 parâmetros automáticos que só de eu chamá-la no filter já aparece, não precisando de eu fazer nada.
//valor = ela itera cada um dos elementos do valor
//indice = indice dos elementos do array
//array = array completo.
function callbackFilter(valor, indice, array) { //Essa função vai servir só para o Filter, poderia ser anonima dentro do Filter, mas para entendermos vamos fazer assim.
    if (valor >10) { //Como quero retornar os número maiores que 10 eu faço uma condição para avaliar se o valor é maior que 10.
        return true;//Filter requer que retornemos um boolean true para quando você quer que o elemento seja acrescentado no novo array ou false para não acrescentar.
    } else {
        return false;
    }

}

const numerosFiltrados = numeros.filter(callbackFilter); //O método filter recebe uma função de callback que vai passar em todos os valores do array.
//Nesse caso não coloquei callbackFilter() pq eu não quero que essa função seja executada, só quero dizer ao filter que essa é a função que ela deve executar.
console.log(numerosFiltrados);

console.log('-> n>10 com filter (callback rápido):');
function callbackFilter2(valor) { //Como eu não uso o indice e o array eu não preciso deles no meu parâmetro. filter me envia, mas eu não preciso pegá-los na função.
    return valor > 10; //Como eu retorno um boolean não preciso utilizar o if, apenas testar a condição valor > 10 e retornar o resultado do seu teste
}
const numerosFiltrados2 = numeros.filter(callbackFilter2);
console.log(numerosFiltrados2); //O resultado é o mesmo.

console.log('-> n>10 com filter (callback anonimo):');
//Se você for utilizar a função de callback em outro lugar do meu código é interessante eu criá-la fora do filter, mas isso não é comum. Normalmente utilizado o callback como uma função anonima dentro dos () de .filter
const numerosFiltrados3 = numeros.filter(function(valor){
    return valor > 10;
});
console.log(numerosFiltrados3);

console.log('-> n>10 com filter (callback arrow function):');
//Além de poder usar a arrow function (valor) => {return valor>10} eu ainda posso:
//eliminar o parentese do parâmetro pq só tenho um argumento
//eliminar as chaves, o return e o ';' pq o código de execução da função tem só uma linha.
const numerosFiltrados4 = numeros.filter(valor => valor > 10); //Assim é forma mais rápida de fazer uma função de callback no meu filter.
console.log(numerosFiltrados4);

console.log('-> Parâmetros da função callback:');
const numerosFiltrados5 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    //O filter vai fazer uma repetição automatica, iterar meu array e analisar se cada item aceita a minha condição.
    //Dependendo o código posso usar o indice para excluir ou adicionar algum dado especifico do meu array.
    return valor > 10
}); //Assim é forma mais rápida de fazer uma função de callback no meu filter.
console.log(numerosFiltrados5);
//FILTER SEMPRE RETORNA UM ARRAY, COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS QUE O ORIGINAL.

console.log('-> Exemplo mais complexo e prático de Filter:');
const pessoas = [
    {nome: 'Guilherme', idade: 30},
    {nome: 'Pli', idade: 29},
    {nome: 'Alice', idade: 1},
    {nome: 'Valentina', idade: 5},
    {nome: 'Zé Carlos', idade: 70},
    {nome: 'Cristina', idade: 51}
]; //Temos um array onde cada elemento é um objeto pessoa

console.log('-Nomes com + de 5 letras:');
console.log('      forma longa:')
//Retorne as pessoas cujo nome tem mais de 5 letras:
const pessoasComNomeGrande = pessoas.filter(function(obj) {
    return obj.nome.length>5;
});
console.log(pessoasComNomeGrande);

console.log('      forma curta:')
const pessoasComNomeGrande2 = pessoas.filter(obj => obj.nome.length > 5);
console.log(pessoasComNomeGrande2);

console.log('-Pessoas com mais de 50 anos:');
console.log('      forma curta:')
//Retorne as pessoas com mais de 50 anos:
const pessoasIdosas = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasIdosas);

console.log('-Nomes que terminam com a:');
console.log('      forma longa:')
//Retorne as pessoas cujo nome tem mais de 5 letras:
const nomeTerminaA = pessoas.filter(function (obj) {
    return obj.nome.toLocaleLowerCase().endsWith('a'); //.endsWith() é um método que verifica se uma string termina com determinado(s) caractere(es).
});
console.log(nomeTerminaA);

console.log('      forma curta:')
//Retorna as pessoas cujo nome termina com a:
const nomeTerminaA2 = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminaA2);