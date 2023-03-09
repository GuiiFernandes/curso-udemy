console.log('GETTERS E SETTERS:');
//Dentro de defineProperty são uma maneira de proteger meu atributo validando o dado fornecido para ela.

console.log('->Na função construtora:');
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    //Quando eu tiver a minha propriedade como um atributo público e quiser trabalhar com a propriedade do objeto no meu set é recomendado colocar o valor do meu parâmetro em uma variável privada.
    //let estoquePrivado = estoque; //Pq se eu usar a propriedade do objeto em um atributo público já criado eu posso criar um loop infinito. Pois, toda vez que eu chamar o meu this.estoque ele vai iniciar o Object.defineProperty(), chamar o get, o setter e então chamar this.estoque e repetir.
    //Como eu não vou trabalhar com ela, posso só usar estoque se referindo ao parâmetro da função construtora.
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Quando eu trabalho com getter e setter eu não preciso de value e nem writable no meu defineProperty
        configurable: true,
        //get vai obter o valor do meu atributo
        get: () => estoque, //Usei uma arrow function, pois nesse caso é menos verbosa. Mas poderia ser função anonima.
        //Quando eu fizer isso e exibir o meu objeto o valor de estoque vai ser [Getter] e para visualizá-lo preciso executar o getter (p1.estoque).
        //set vai validar se meu dado cumpre os requisitos para ser aceito e alterar o valor do atributo, se não cumprir, gerar um erro.
        set: function(valor) { //o elemento de valor é 500 de 'p1.estoque = 500'
            if (typeof valor !== 'number'){ //Se o tipo da variável valor for diferente de 'number'
                throw new TypeError('O valor passado não é um número!'); //Retorno um erro e paro meu código! 
            }
            estoque = valor;
        }
    });
}
const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
p1.estoque = 500; //Se eu só faço o get e tento alterar o valor do meu atributo 'p1.estoque=', ele não faz nada pq o getter só obtém o valor que eu tenho, ele não atribui a propriedade o novo valor
//Com o set, quando eu altero o valor de uma propriedade do meu objeto. Ele primeiro passa esse valor para o parâmetro valor da função de set valida e se for validada atribui esse valor a propriedade.
console.log(p1.estoque); //Se eu tento atribuir uma string para estoque agora vou ter um erro!

console.log('Na função fábrica:');
//Na função fábrica a sintaxe de getter/setter é um pouco diferente, porém o sentido é o mesmo.
function criaProduto(nome) { //Crio a função fábrica que vai criar meu objeto.
    return { //Retorno o objeto
        get nome() { //Obtenho o valor de nome, nesse caso ele vai ser 'Camiseta'.
            return nome;
        },
        set nome(valor) { //Seto que ao mudar o valor de nome, o meu set vai pegar o valor novo
            nome = valor.toUpperCase(); //Colocar ele todo maiúsculo e atribuir ao nome.
        }
    };
}
const p2 = criaProduto('Camiseta'); //Crio o produto e o valor de nome é 'Camiseta' graças ao get.
console.log(p2, p2.nome); //Note que quando chamo o p2, o atributo nome tem valor [Getter/Setter]
p2.nome = 'camiseta'; //Quando tento mudar nome para 'camiseta', meu setter pega esse valor, transforma em 'CAMISETA' e o atribui a nome
console.log(p2, p2.nome); //O valor do atributo nome agora é 'CAMISETA' e não 'camiseta'