console.log('HERANÇA:');
//Classes são sintaxe sugar de herança
//Herança é uma forma de usar códigos já programados em outras funções construtoras e reutilizar em novas funções
function Produto(nome, preco) { //Crio uma função construtora Produto
    this.nome = nome; //Com nome e preco dos produtos
    this.preco = preco;
}
//Para criar métodos que vão aumentar e diminuir o valor do meu produto eu uso os prototypes.
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
//Dentro de Produtos eu tenho produtos com atributos específicos dele como, por exemplo, a cor da camiseta
function Camiseta(nome, preco, cor) { //Crio uma nova função construtora para minha camiseta.
    //Como ela possui a mesma estrutura de Produto, chamo um método que tem dentro de todas as funções, .call(), para adicionar parte ou toda estrutura de Produto em Camiseta. Assim como new ele cria um objeto vazio, aponta this para esse objeto.
    Produto.call(this, nome, preco); //Dentro do parêntese do método .call eu coloco quem vai ser o this dentro da função construtora (nesse caso será o objeto que que eu criar dentro da função. This). Depois, coloco os atributos que quero que Camiseta pegue de Produto.
    //Produto.call() vai linkar automaticamente os atributos de Produto dentro dessa pasta
    this.cor = cor; //Posso também adicionar novos atributos a essa função construtora.
    //Assim Camiseta tem os atributos, nome, preço e cor.
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta'); //Crio meu objeto com o new e uso os atributos indicados no parâmetro da minha função construtora Camiseta
console.log(camiseta); //Quando eu crio a camiseta, vejo que ela foi criada pela função construtora Camiseta, com os atributos nome, preco e cor.
//Porém mesmo recebendo como herança os atributos de Produto, minha camiseta não acessa os métodos salvos no prototype de Produto. Porque cada função tem seu próprio proto.
//Portanto usar camiseta.aumento() e camiseta.desconto() não funciona aqui. Erro de função não definida.
//Para que Camiseta tenha o mesmo proto de Prduto eu faço:
//Eu faria Camiseta.prototype = Produto.prototype (mas isso vai gerar um erro). Então faço:
Camiseta.prototype = Object.create(Produto.prototype); //Falo que o proto de camiseta vai receber um objeto criado com o proto de Produto.
//Isso vai trazer os métodos por referência para o proto de Camiseta.
const camiseta2 = new Camiseta('T-shirt', 10, 'Branca'); //Agora quando eu criar outra camiseta
camiseta2.aumento(10); //Consigo utilizar os métodos que estão em Produto através da função construtora Camiseta.
console.log(camiseta2); //Quando eu abrir camiseta, vou ver que seu proto é Produto e que dentro dele eu tenho os métodos aumento e desconto. Porém, o construtor do meu objeto deixou de ser Produto e passou a ser Produto. Vamos ver a diferença quando eu crio uma Camiseta e um Produto:
const produto = new Produto('PenDrive', 30);
console.log(produto); //Dentro do proto de produto temos uma propriedade apontando para o construtor que fez esse objeto e isso pode ser muito importante em vários sistemas.
//Em camiseta2 não tenho o construtor dentro do proto, pq eu criei um objeto vazio e usei o proto de Produto como o proto do objeto vazio, por isso ele não tem o proto de Camiseta e o que aparece como construtor é o construtor que está dentro do proto de Produto.
//Para resolver isso, linko de volta o construtor de Camiseta.
Camiseta.prototype.constructor = Camiseta; //Digo que dentro do proto de Camiseta eu tenho o constructor igual a Camiseta.
console.log(camiseta2); //Agora o constructor aparece como Camiseta.
//Sempre que eu chamar agora minha camiseta2 eu tenho constructor dela sendo Camiseta junto com o proto de Produto. Então, ela pega o construtor mais fora da cadeia de proto.
//Assim como no constructor eu também posso modificar quando necessários métodos herdados. Partindo que o JS vai pegar sempre o métodos no proto mais próximo da função construtora.
//Como eu posso passar atributos específicos para minha função construtora que herda Produto, eu também posso criar métodos especifícos somente para aquela função construtora.
//Por exemplo, quero que camiseta seja reajustado por percentual enquanto os demais objetos criados por Produto, por quantia. Faço:
Camiseta.prototype.aumento = function(percentual){ //Crio um novo método no proto de Camiseta.
    this.preco = this.preco*(1+percentual/100); //Ele vai multiplicar o meu preco por 1+perc/100 e atribuir ao preco.
}
camiseta2.aumento(100); //Agora quando eu chamar aumento ele vai usar a função construtora aumento de Camiseta, pois ela está mais próxima de Camiseta dentro da cadeia de proto.
console.log(camiseta2); //Note que na função aumento de Produto quando uso o parâmetro 100 ele faria 100+preco. Agora ele faz preco*(1+100/100) = preco*(1+1) = preco*2, ou seja, aumenta 100% o valor do meu produto.

/* Quando eu chamo o método a ordem de busca é:
1º - Dentro do Objeto
2º - Dentro do proto do Objeto
3º - Dentro do proto Herdado/Cadeia em nível de herança.
Se não encontrar retorna um erro.
*/

console.log('-> Treinando com outro produto:');
//Vou criar a função construtora para criar canecas
function Caneca(nome, preco, material, estoque){ //Essa função tem como parâmetros nome, preco, material e estoque.
    Produto.call(this, nome, preco); //Herdo de Produto os atributos nome e preco
    this.material = material; //Crio o atributo público e literal material
    Object.defineProperty(this, 'estoque', { //Eu quero que meu estoque seja um atributo privado, mas que será exibido, alterado e não reconfigurável. Para isso uso defineProperty (define as propriedades) e get/set (Vai tornar meu atributo privado e só será exibido quando o método get for chamado.)
        enumerable: true, //exibível
        configurable: false, //Não reconfigurável
        get: () => estoque, //get que obtém o valor de estoque
        set: function (valor) { //set que vai validar se um novo valor pode ou não ser atribuido a estoque
            if (typeof valor !== 'number') return; //Se não for um valor do tipo Number, retorno nada e paro a alteração do valor
            estoque = valor; //Ou atribuo valor ao meu estoque.
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype); //Defino o proto de Produto sendo o proto de Caneca
Caneca.prototype.constructor = Caneca; //Defino que o Constructor de Caneca é Caneca (preciso pq a linha acima o altera para Produto)
const caneca = new Caneca('Stanley', 110, 'Aço Inox', 5); //Crio meu objeto caneca.
console.log(caneca); //Quando printo meu objeto caneca, o estoque vem com valor [getter/setter] pq agora ele é um atributo privado e só vai ser exibido quando for solicitado por get.
//No navegador quando eu abro os atributos de caneca observe que o estoque da caneca é '(...)' isso acontece pq quando eu clicar nisso o JS executa get e mostra o valor de estoque. get e set estão junto com os atributos do objeto.
//Tenho o proto do objeto e o proto de Produto abaixo (proto em cadeia).
console.log('usando o get:', caneca.estoque);
caneca.estoque = 100; //Usando o set para mudar o valor do estoque da caneca (se eu passo um valor que não number, meu estoque não muda).
console.log('usando o set (para alterar) e get (para mostrar o valor):', caneca.estoque); //Esssa forma, quando eu chamo caneca.estoque eu estou usando o get.

/* O termo "Herança" é uma conotação, o termo ideal seria "Delegação." 
Pq quando eu uso: 'Camiseta.prototype = Object.create(Produto.prototype);'
Estou dizendo que Camiseta.prototype é um novo objeto vazio que tem como protótipo o Produto.prototype
Assim, estamos adicionando Camiseta.prototype na cadeia de prototipos de Produto.
Consequentemente, tudo que não existir em Camiseta, nem no proto de Camiseta será delegado para o proto de Produto
e assim por diante na cadeia de protótipos.*/

//Quando eu digo que Camiseta.prototype é um objeto vazio eu perco o constructor de Camiseta) - Se o proto de Camiseta é um objeto vazio que tem como proto o proto de Produto, então não existe o constructor = Camiseta, mas ele delega ao Produto achar um constructor válido (propriedade obrigatória do proto de um objeto) ao Produto e se não encontrar, sucessivamente nos demais protos da cadeia.