console.log('OBJECT.DEFINEPROPERTY() E OBJECT.DEFINEPROPERTIES():');
//São duas funções relacionadas com as chaves do objeto.
//Assim como Object.freeze (que bloqueia a edição de todo o objeto), defineProperty e difeneProperties pode bloquear a edição e exclusão de uma ou mais propriedades dos objeto.
//sendo Property para uma propriedade e Properties para várias.

console.log('-> Object.defineProperty()');
//Quero criar uma função que cria um produto, porém não quero que seja possível alterar o estoque do meu produto.
function Produto(nome, preco, estoque) { //Crio a função construtora com os parâmentros nome, preco e estoque.
    this.nome = nome; //crio o atributo público com this.
    this.preco = preco; //O atributo público é configurado por padrão como visualizável, editável, excluível e reconfigurável.
    //Para criar o atributo estoque bloqueado (não público / privado), vou utilizar Object.defineProperty() para bloquear sua edição, exclusão e reconfiguração.
    Object.defineProperty(this, 'estoque', { //Dentro das chaves fica: (objetoAMexer, propriedadeAMexer, propertyDescription) - a última é um objeto contendo as configurações que serão aplicadas ao meu atributo.
        //Neste caso os parênteses ficam: (this /é obejto que está sendo criado e no qual quero mexer/, 'estoque' /nome da chave da propriedade que vou criar e aplicar as configurações descritas/, {configurações} /São as configurações que será aplicada a minha propriedade 'estoque'/)
        enumerable: true, //mostra a chave? (true/false) -> Exibe ou não o atributo quando eu chamar meu objeto.
        value: estoque, //valor da chave (valor) -> Colocamos como valor de estoque o elemento que vem do parâmetro estoque 
        writable: false, //Posso alterar meu valor? (true/false) -> Coloquei que o valor não pode ser editado, portanto, se eu tentar fazer 'p1.estoque = 500' o valor manterá 3 e não será alterado
        configurable: true //Posso reconfigurar essa propriedade? (true/false) -> Se for true ao fazer outra Object.defineProperty() (dentro ou fora da criação do objeto) eu reconfiguro minha propriedade e também posso apagar a propriedade usando delete.
    });
    //Sendo assim, se eu reconfigurar:
    Object.defineProperty(this, 'estoque', {
        enumerable: false, //Agora eu não exibo minha chave ao chamar o objeto
        value: estoque, //mantenho o valor sendo o mesmo do parâmetro
        writable: true, //permito a alteração do valor do estoque
        configurable: false //E não permito mais reconfigurar minha propriedade
    });
    //Dessa forma se eu tentar reconfigurar novamente minha propriedade (na criação do objeto ou depois) gerará um erro e se eu tentar apagar minha propriedade com delete nada vai acontecer.
}
const p1 = new Produto('Camiseta', 30, 3);
console.log(p1);
console.log(Object.keys(p1)); //Mostra em um array as chaves do meu objeto cujo enumerable for true.
for (let chave in p1){ //Da mesma forma se eu iterar um objeto que tem um propriedade com enumerable false, ela não aparece no For in.
    console.log(chave);
}
console.log(p1.estoque); //Mas mesmo com enumerable sendo false eu consigo acessar o valor da minha chave..

console.log('-> Object.defineProperties()');
//Igual a .defineProperty() porém:
function Produto1(nome, preco, estoque) {
    this.preco = preco;
    Object.defineProperties(this, { //Fica: Object.defineProperties(objetoAMexes, {objeto com minhas propriedades e suas configurações});
        nome: { //Dentro desse objeto eu defino o nome da chave, ':' e coloco todas as configurações que eu quiser.
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        estoque: { //Repito essa operação para todos as propriedades que eu queira configurar.
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        }
    });
}
//Properties te dá mais controle sobre o que pode ou não ser feito com as chaves do objeto, porém é muito mais verboso.
//Por isso, é indicado para usar em situações mais sensíveis.
const p2 = new Produto1('Relógio', 500, 10);
console.log(p2);