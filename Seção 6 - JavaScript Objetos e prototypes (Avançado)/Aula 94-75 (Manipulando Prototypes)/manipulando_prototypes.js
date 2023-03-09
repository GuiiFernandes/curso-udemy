console.log('MANIPULANDO PROTOTYPE:');

//Construir um objeto literal é o mesmo que construir um objeto com new Object
//No new Object o objeto e suas chaves são criados automaticamente de acordo com a função construtora
const objA = { //new Object -> Object.prototype
    chaveA: 'A'
    // __proto__ => Object.prototype
    //Dentro de todo objeto tem uma chave __proto__ implicita. Que é criada na sua criação.
}
console.log(objA.__proto__ === Object.prototype); //Quando testamos se o proto de objA é igual a Object.prototype o retorno é true

const objB = {
    chaveB: 'B'
    //Se eu quiser que o proto do objB seja igual a objA uso a função abaixo.
    // __proto__ => objA
}

//Esse método vai setar o Prototype de objB atribuindo a ele o objA.
Object.setPrototypeOf(objB, objA); //setPrototypeOf = setar prototype de? - Dentro do parêntese tenho (objASetar, objQueSeráOPai)
console.log(objB.chaveA); //Com o objA sendo pai do objB agora posso acessar a chaveA direto do objB
//Isso acontece pq agora a chaveA está linkada/referenciada no proto de objB.
//A cadeia do objB mudou:
/*
Antes: Object.Prototype -> objB  / Object.Prototype -> objA (objB e objA eram 'irmãos')
Agora: Object.Prototype -> objA -> objB (objB é filho de objA que é filho de Object.Prototype)
*/

const objC = new Object(); //Crio o objeto a partir da função construtora
objC.chaveC = 'C'; //Crio um atributo chaveC para esse objeto
//Configuro o prototype de objC para ser o objA.
Object.setPrototypeOf(objC, objA); //Assim ele não vai poder pegar referências de objB e passa a ser seu 'irmão'.
console.log(objC.chaveA, objC.chaveB); //objC.chaveB retorna undefined, pq não acessa as chaves de objB

//Agora configuro o prototype de objC para ser o objB
Object.setPrototypeOf(objC, objB); //Assim o objC acessa tanto o objB, quanto o objA.
console.log(objC.chaveA, objC.chaveB); //Consigo imprimir as chaves dos seu objetos ascendentes
//Assim eu gero uma cadeia de objetos que podem acessar atributos e métodos dos seus ascendentes.

//Também posso criar uma cadeia infinita de objetos que acessam seus ascendentes..

//ATENÇÃO: obj.__proto__ está sendo usado só para fim didático. NÃO USAR ELE NA PRÁTICA! Ele gera problema de performace no sistema.
//Para acessar o proto de um obj uso:
const protoObjC = Object.getPrototypeOf(objC); //Captura o prototype de (objeto)
console.dir(protoObjC); //Retorna o que está dentro do proto do objeto nesse caso objB.
//Usamos getter para pegar (getProto) e setter para setar (setProto)

console.log('-> Manipulando prototype de forma prática:');
function Produto(nome, preco){ //Crio minha função construtora para criar produtos
    this.nome = nome;
    this.preco = preco;
    //Como eu sei agora utilizar o proto, não vou criar os métodos dentro da minha função construtora
}
//Mas no proto dela. Para criar faço:
Produto.prototype.desconto = function(percent) { //Acesso o proto de produto e crio o nome da função (desconto), atribuo a desconto uma função
    return this.preco * (1-(percent/100)); //Que vai retornar o preço com desconto.
};

Produto.prototype.aumento = function(percent) { //Crio também um método aumento
    return this.preco * (1+(percent/100)); //que vai retornar o preço com aumento
};

const p1 = new Produto('Camiseta', 50); //Crio um produto Camiseta com valor de 50
console.log(p1);
let precoDesc = p1.desconto(100); //Utilizo o método desconto para aplicar um desconto ao preço da minha camiseta e armazenar esse valor na const precoDesc
let precoAum = p1.aumento(100); //Utilizo o método aumento para aplicar um aumento ao preço e armazenar o resultado na const precoAum
console.log(precoDesc, precoAum); //Quando eu chamar minhas variáveis, tenho os preços atualizados pelo método

//Se eu tenho um objeto literal e quero atribuir o prototype de Produto a ele faço:
const p2 = { //Crio um objeto literal que vai ser outro produto
    nome: 'Caneca',
    preco: 15 //Só vou conseguir utilizar os métodos de Produto pq a chave tem o mesmo nome dos métodos.
};
//Seto o prototype de p2;
Object.setPrototypeOf(p2, Produto.prototype); //Atribuo ao proto de p2, o proto da função construtora Produto
//Dessa forma ela mantém os valores da sua chave e só acessa o proto de Produto.

console.log(p2.aumento(10)); //Agora eu consigo acessar o método aumento dentro de p2.
console.log(p2); //Quando olho no navegador, dentro do proto de p2 tem os métodos aumento e desconto de Produto
//Produto também vira a função construtora de p2.

console.log('-> Criando o objeto já com o proto setado:');
//Para criar um objeto vazio eu tenho mais uma forma, o Object.create
const p3 = Object.create(Object.prototype); //Dentro do parentese eu tenho que informar qual o proto do meu objeto.
console.log(p3); //Assim crio um objeto vazio com o proto padrão.

//Eu poderia criar um objeto informando que o proto dele é o Produto.prototype
const p4 = Object.create(Produto.prototype); //Dessa forma eu tenho acesso aos métodos de Produto
console.log(p4); //Porém ainda tenho um objeto sem chaves.
p4.preco = 113; //Eu teria que criar a chave preco e/ou nome, se não criar gera erro.
console.log(p4.aumento(10)); //Para usar o método no proto

//Para já criar o objeto com o proto e as chaves criadas e com as propriedades configuradas eu faço:
const p5 = Object.create(Produto.prototype, { //Sendo assim, em Object.create dentro de () eu primeiro passo o proto e depois um objeto opcional com as chaves que desejo
    nome: { //Nessa chave eu já posso configurar seu property
        enumerable: true, //Visivel
        value: 'Bermuda', //Valor
        writable: false, //Não editável
        configurable: false //Não configurável
    },
    preco: {
        enumerable: true, //Visível
        value: 80, //Valor
        writable: true, //Editável
        configurable: false //Não configurável
    }
});
console.log(p5.desconto(20)); //Agora eu consigo operar meus métodos dentro de p5