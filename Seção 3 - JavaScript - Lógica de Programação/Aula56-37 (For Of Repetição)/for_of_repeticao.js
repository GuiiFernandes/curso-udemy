console.log('FOR OF - ESTRUTURA DE REPETIÇÃO');
//For of é especifico para objetos iteráveis como String ou array.

const nome='Gui Fernandes';
//Como essa String tem indice podemos iterá-la.

console.log('-> For clássico para iterar String:');
for (let i=0; i<nome.length; i++) {
    console.log(nome[i]);
}

console.log('-> For in para iterar String:');
for (let i in nome) {
    console.log(nome[i]);
}

//Nas duas repetições acima preciso utilizar o indice para executar meu comando
console.log('-> For of para iterar String:');
//O for of não usa o indice e usa o valor dele de cara.
//E pode ser usado para String, vetor, array, matriz, etc..
for (let caracter of nome) { //Nesse for, o indice vai ser ignorado e o valor de cada indice de nome vai ser atribuido a caracter.
    console.log(caracter);
}

const nomes=['Gui','Pli','Valentina','Cristina'];
console.log('-> For clássico para iterar Array:');
for (let i=0; i<nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('-> For in para iterar Array:');
for (let i in nomes) {
    console.log(nomes[i]);
}
//A vantagem  de usar for clássico e for in é que você consegue utilizar o valor do indice na repetição preservando-o em i e o valor da variável de controle nomes[i].
console.log('-> For of para iterar Array:');
for (let nome of nomes) {
    console.log(nome);
}

console.log('-> For Each para iterar Array:');
nomes.forEach(function(nome,index,array) /*Recebo: function(valor,indice,array completo) */ {
    console.log(index,nome,array);
}); //Neste caso precisamos de ';'.
//Vamos ter aula específica sobre.

//Objetos só aceitam For in
/*
For clássico - geralmente usamos com iteráveis (array ou String)
For in - Retorna o índice ou chave (string, array ou objetos)
For of - Retorna o valor em si, usamos com iteraveis (array ou String).
*/