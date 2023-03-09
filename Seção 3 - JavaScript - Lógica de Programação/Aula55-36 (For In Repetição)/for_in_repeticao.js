console.log('FOR IN - ESTRUTURA DE REPETIÇÃO');
//For in é a repetição mais simples de todas.
//For in lê os indices do array ou chaves do objeto
const frutas = ['Pera', 'Maça', 'Uva', 'Abacaxi', 'Laranja']; //Array de única dimensão (não tem outros dentro dele) é chamado de vetor

console.log('-> Iterando nossa lista com For clássico:');
for (let i=0; i<frutas.length; i++) { //Neste for fazemos um contador para contar o indice do array
    console.log(frutas[i]);
}

console.log('-> Iterando nossa lista com For in:');
for (let indice in frutas) { //Essa forma lê os indices do array
    //a variável indice pode ser o nome que eu quiser.
    console.log(indice, frutas[indice]);
}

console.log('-> Iterando objeto com For in:');
const pessoa = {
    nome: 'Gui',
    sobrenome: 'Fernandes',
    idade: 29
};
//Neste caso vou iterar cada chave (nome do atributo do objeto) do meu objeto para extrair a informação necessária
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); //posso usar pessoa['nome'] no lugar de pessoa.nome, para pegar o nome da pessoa.
}