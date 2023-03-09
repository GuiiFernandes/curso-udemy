console.log('MÉTODOS ÚTEIS PARA OBJETOS:');
console.log('-> Spread:');
//O Spread é a forma mais simples, rápida e intuitiva de copiar os dados de um objeto/array para outro sem que eles fiquem com a mesma referência na memória
const produto = {nome: 'Caneca', preco: 1.8}; //crio um objeto produto
const produtoDetalhado = { //Crio o objeto produtoDetalhado
    ...produto, //Espalho as chaves de produto em produtoDetalhado com Spread '...'
    material: 'porcelana' //Posso também adicionar chaves, metódos, propriedas, o que eu quiser ao meu objeto
};
//fazendo dessa forma eu posso alterar os valores das chaves de produtoDetalhado
produtoDetalhado.nome = 'vasilha';
produtoDetalhado.preco = 5.5;
console.log(produto); //Sem mexer no produto original
console.log(produtoDetalhado); //E ficar com dois objetos diferentes na minha memória

console.log('-> Object.assign:');
//Outra forma de copiar sem referenciar um objeto.
const prodDetalhado = Object.assign({}, produto, {material: 'plástico'}); //.assign recebe nos parenteses (objetoDestino, objetos a copiar ou criar)
//Os objetos a copiar/criar podem ser quantos e quais você quiser armazenar dentro do objetoDestino. Depois de criado esse objeto é atribuido a prodDetalhado.
//ATENÇÃO: Se eu tentar copiar mais de um objeto com a mesma chave o que fica armazenado é o último a ser puxado, ou seja, o escrito mais a direita

console.log('-> Copiando com a propriedade do objeto:');
//A pior forma de copiar sem referenciar um objeto. Mas que pode ser útil em algum momento
const prodDetalhado2 = {nome: produto.nome, preco: produto.preco}; //Aqui você está criando um novo objeto em um novo local na memória e dentro das chaves dele atribuindo valores iguais ao de produto.

console.log('-> Object.getOwnPropertyDescriptor:');
//Esse método exibe em formato de objeto como está setados as propriedades do atributo de um objeto
const configProd = Object.getOwnPropertyDescriptor(produto, 'nome'); //Dessa forma eu vou armazenar em uma variável um objeto com as propriedades do atributo nome do meu objeto produto.
console.log(configProd); //Como nome é um atributo público ele mostra o seu valor e as propriedades writable (editável), enumerable (visualizável) e configurable (configurável/deletável) estão como true.
//Com minhas propriedades eu posso usar o defineProperty ou defineProperties para alterar a propriedade do meu atributo
Object.defineProperty(produto, 'nome', {
    writable: false //Agora eu não posso mais mudar o nome do produto.
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //Imprimo novamente para ver como ficou as propriedades de nome
produto.nome = 'Jarra'; //Ao tentar alterar o nome
console.log(produto); //Ele não pode mais ser alterado.
//ATENÇÃO: A única forma de alterar o valor de uma chave que o writable é false é:
Object.defineProperty(produto, 'nome', { //usando o próprio .defineProperty()
    value: 'Jarra' //Agora eu mudei o valor de nome.
});
console.log(produto);

console.log('-> Object.values:');
//Cria um array que armazena os valores do objeto
const valoresProd = Object.values(produto); //Armazeno em uma variável o array com os valores dos produtos. Assim com keys faz com as chaves
console.log(valoresProd);

console.log('-> Object.entries:');
//Cria um array que armazena em cada indice outro array com chaves e valores do objeto.
const dadosProd = Object.entries(produto); //Dessa forma em cada indice do array eu vou ter outro array com o atributo do meu objeto que terá no indice 0 a chave e 1 o valor
console.log(dadosProd);
//Com entries eu consigo iterar em cada chave do objeto de forma fácil
for(let entry of dadosProd){ //Itero sobre cada array, dentro do array dadosProd
    console.log(entry); //imprimo cada array.
    console.log(entry[0], entry[1]); //Assim eu mostro cada elemento do meu array entry. 0 = nome, 1 = Jarra
}
//Outra forma de iterar é por destructory, onde eu pego com colchetes os indices do meu array e atribuo as variáveis chave e valor
for(let [chave, valor] of Object.entries(produto)) { //para cada array que contém [chave e valor] do meu object.entries
    //Dessa forma eu pego o indice 0 do array criado por Object.entries (['nome', 'Jarra']) e atribuo a [chave, valor]. É o mesmo que [chave, valor] = ['nome', 'Jarra'] e depois repito com o indice 1 e com quantos indices eu tiver no array criado por Object.entries
    console.log(`${chave}: ${valor}`);
}

console.log('-> Métodos que já vimos');
const chaves = Object.keys(produto); //Cria um array com as chaves do objeto
console.log(chaves);
Object.freeze(produto); //Bloqueia a edição e exclusão total do meu objeto