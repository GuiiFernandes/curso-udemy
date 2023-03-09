console.log('REVISANDO OBJETOS:');
//Objeto é um tipo de dado por referência que recebe vários valores que são separados por ',' e armazenados por chaves
console.log('->Criando objetos de forma literal:');
//Forma literal é a forma mais simples de criação de dado.
//Cria-se dado de forma literal de String ('', "", ``), de array ([]), de objeto ({}), de número (o próprio número), função (function).
//Literal não diz ao JS que você está criando algo (não usa new). Ele é mais simples e intuituvo.
const pessoa = { //crio uma constante ou variável que vai receber o objeto criado e atribuo a ele o meu objeto criado de forma literal com {}
    //Dentro de chaves eu tenho o corpo ou bloco do meu objeto.
    nome: 'Guilherme', //Os objetos são formados por pares de chave e valor.
    sobrenome: 'Fernandes', //Chave é a referência dentro do objeto que eu vou usar para acessar algum valor. Enquanto valor é o dado que eu vou salvar sobre o objeto.
    //No caso desse objeto eu tenho uma chave nome com valor 'Guilherme' (string) e uma chave sobrenome com valor 'Fernandes' (string)
};
console.log(pessoa.nome); //Para acessar um valor dentro do meu objeto eu chamo o nome da constante onde armazenei o objeto '.' a chave que eu determinei para o valor que quero
console.log(pessoa['sobrenome']); //Outra forma de acessar a chave do meu objeto é com colchetes, assim como em arrays
//Eu chamo a variável que está meu objeto abro colchetes e dentro (em formato de string) eu coloco o nome da chave que quero acessar.
//A notação de ponto é menos verbosa, por isso é preferencial usá-la.
//Porém em momentos onde você precisa acessar uma chave dinâmica do seu objeto os colchetes são mais indicados.
let chave = 'nome'; //Supondo que recebo do BD o nome de uma chave que meu sistema tem que acessar.
console.log(pessoa[chave]); //dessa forma eu posso chamar pessoa[chave] que é igual a pessoa['nome'].
chave = 'sobrenome'; //se eu mudar a variável chave.
console.log(pessoa[chave]); //Quando eu chamar novamente pessoa[chave] agora ela vai ser igual a pessoa['sobrenome'];

console.log('->Criando objetos com construtor:');
//Construtor é o método new. Esse construtor também funciona com array
const pessoa1 = new Object(); //Crio a constante que vai receber meu objeto, atribuindo a ela new Object() - Parentese é obrigatório.
console.log(pessoa1); //Note que no momento eu tenho um objeto vazio.
pessoa1.nome = 'Pli'; //Ao chamar a variável que está meu objeto com a notação de ponto, o que vier depois do ponto será uma nova chave do meu objeto 
pessoa1.sobrenome = 'Leal'; //Depois eu atribuo um valor, que vai ser o valor daquela chave. Dessa forma estou criando uma nova chave para meu objeto.
console.log(pessoa1, pessoa); //Dessa forma eu tenho dois objetos com a mesma estrutura, porém criados de forma diferente.
console.log(pessoa1.nome, pessoa1['sobrenome']); //Tudo nesse objeto vai ser acessado da mesma forma que eu faço quando crio de forma literal.

//Para apagar uma chave e valor do meu objeto eu uso a notação delete
delete pessoa1.nome; //Dessa forma eu apago nome:'Pli' do meu objeto (Posso usar notação de colchete ou ponto no objeto.)
console.log(pessoa1);

console.log('->Método no objeto:');
//Objetos podem conter métodos. Que são funções dentro do objeto que executam ações
//Vantagem: Ter acesso as coisas do objeto dentro dessa função.
pessoa.falarNome = function() { //Dessa forma estou criando um método e adicionando ele ao meu objeto
    //A chave falaNome recebe como valor uma function
    console.log(`${this.nome} é o seu nome.`); //Dentro do bloco da function eu executo uma ação.
};

pessoa.falarNome(); //Para executar o método basta usar a notação de ponto e chamar a função da forma convencional.
//Uma forma mais real do que utilizar console.log dentro do método é a função retornar algo. Assim falaNome ficaria:
pessoa.falarNome = () => `${this.nome} é o seu nome.`; //Dessa forma eu uso arrow function para modificar meu método, não preciso de function, como é só uma linha de código não preciso do bloco e como essa linha já é meu retorno não preciso de return.
//Para executar essa função e exibir minha String fica um pouco diferente quando retorno do que quando imprimo dentro do método.
let seuNome = pessoa.falarNome(); //Dessa forma eu posso atribuir o retorno do método a uma variável e depois exibir esse retorno
console.log(seuNome); //Assim eu vou ter o mesmo resultado do anterior, mas eu também poderia fazer direto console.log(pessoa.falarNome()); que já exibiria a String

console.log('->Forma prática de método no objeto:');
//crio a chave idade no meu objeto e um método que vai calcular o ano de nascimento da pessoa baseada na idade dela.
pessoa.idade = 30;
pessoa.getDataNascimento = function() { //crio o método e atribuo uma função anônima.
    const dataAtual = new Date(); //Crio a data atual usando o contrutor Date.
    return dataAtual.getFullYear() - this.idade; //retorno o getFullYear da dataAtual (ano) e subtraio o valor da chave idade do meu objeto.
    //Nesse caso uso a notação this., pois quero pegar um valor do closure ( bloco pai do meu método). Se eu usar só idade não funciona pq está protegido fora do bloco da minha função.
};
console.log(pessoa.getDataNascimento()); //Depois eu só chamo meu método com um console para exibir o ano de nascimento.
//(Esse método contém um erro, porquê quando fiz 2023-30= 1993, porém nasci em 1992. Isso acontece pq ainda farei 31 anos em 2023, aí sim 2023-31= 1992.)

console.log('->For in (Iterando objetos):');
//Posso iterar objetos de forma simples com for in
for (let chave in pessoa){ //para cada chave dentro de pessoa (let em chave é crucial pois estou criando uma nova variável que vai receber o nome das chaves)
    console.log(`${chave}:`, pessoa[chave]); //Posso exibir tanto o nome da minha chave, quanto usar a notação de colchete para exibir o valor da chave.
    //O valor do método retorna [function (anonymous)], pq um método é uma função dentro da chave de um objeto. E anonymous, pq tanto arrow quanto a própria função anônima são anônimas..
}

console.log('->Funções moldes para criar objetos:');
//Quando preciso criar um objeto muitas vezes seguidas é mais fácil eu ter um molde ou fórmula que vai fazer a criação desse objeto do que ter que fazer isso de forma literal cada vez que for necessário. É até perigoso, pois posso esquecer algum dado ou método importante.
//Para resolver isso, crio um molde que vai criar o objeto para mim e tudo vai ficar dentro do padrão daquele molde que eu criar.
//Factory functions (funções fábrica) / Constructor Functions (funções construtoras) / Classes (sintaxe sugar - facilita a trabalhar em orientação a objetos)
//Esses são padrões de projetos que vc pode usar dentro do seu sistema, escolha um que você gosta mais e use apenas ele no seu sistema.
console.log('.factory function:');
//Factory Functions, são funções que retornam objetos, portanto criam eles.
function criaPessoa(nome, sobrenome) { //Crio uma função com o nome referente ao que ela vai fazer, com os parâmetros que serão os valores das minhas chaves
    return { //retorno um objeto
        nome, //com as chaves que quero ele tenha
        sobrenome, //se as chaves tem o mesmo nome do parâmetro o JS já inclui naquela chave o valor referente ao parâmetro igual, portanto não preciso fazer 'nome: nome'.
        //Dentro de um objeto literal posso transformar meu método em um atributo do objeto, eu uso a notação get antes do método
        get nomeCompleto() { //Esse método vai simular como se fosse um atributo do objeto.
            //Dessa maneira não consigo setar meu atributo e protejo meu objeto interno.
            return `${this.nome} ${this.sobrenome}` 
        }
    };
}
const p1 = criaPessoa('Cristina', 'Dehon'); //Criando o objeto, agora eu posso usar o meu método como uma propriedade.
console.log(p1.nomeCompleto);
//Sem o get também funciona porém eu chamo meu nomeCompleto assim: 'console.log(p1.nomeCompleto());'
console.log('.Constructor function:');
//Também são funções que retornam objetos, porém ela usa a notação new que muda o comportamento da função fazendo muita coisa automatica que não vemos.
function Pessoa(nome, sobrenome) { //crio a função com function, porém o nome da minha função (por convenção) deve iniciar com letra maiúscula e atribuo o meu parâmetros que serão os valores das minha chaves
    this.nome = nome; //Uso this.nomeChave para dizer que quero pegar o objeto criado pela notação new (que será utilizada na criação do objeto) 
    this.sobrenome = sobrenome; //e criar nela uma nova chave com o valor que é o argumento do meu parâmetro
}
const p2 = new Pessoa('José Carlos', 'Machado'); //Quando eu vou criar meu objeto é obrigatório o uso de new.
console.log(p2); //quando eu imprimo meu objeto, tenho um objeto literal com a diferença que ele vem acompanhado de qual construtor criou aquele objeto.

/*
O QUE NEW FAZ QUE NÃO VEMOS:
1o - cria um objeto vazio e torna ele o closure da função construtora. atribuindo this ao objeto.
2o - retorna o this para o objeto vazio. fazendo um 'return this'
3o - atribui o nome da função construtora ao objeto criado por ela.
*/

console.log('->Alterando e travando alteração em objeto:');
/*
Quando eu crio um dado e atribuo ele a uma constante eu digo que:
A variável p1 que aponta para um endereço na memória que tem um valor armazenado.
Quando eu uso const eu digo que eu não posso fazer com que minha variável aponte para outro endereço na memória.
Porém, ao atribuir um objeto para p1 eu estou dizendo que:
A variável p1 que aponta para um endereço na memória que tem um objeto (com vários valores dentros) armazenado.
Quando eu uso 'p1.nome = 'Outro nome'' e mudo o valor, eu estou dizendo que:
Eu vou alterar o valor dentro de um objeto que está em um endereço na memória apontado por p1, ou seja, eu não estou mudando o endereço, mas um valor dentro do objeto que está naquele endereço.
Valores passados por referência vão ter apenas uma referência da memória onde estão atribuidas a variável. Então quando eu altero o valor do objeto eu não estou alterando a referência da memória, mas o valor dentro do objeto que está naquela referência.
O que não posso fazer aqui é 'p1 = 'Outra coisa''. Aí eu estou mudando o referência/endereço da memória onde está armazenado meu novo valor e terei um erro.
*/
//Em algum momento você pode querer travar o obejto para não ser alterado. Para isso usamos:
Object.freeze(p2);
p2.nome='Zé Buceta'; //Dessa forma, se eu tentar mudar qualquer atributo ou método do meu objeto
console.log(p2); //Ele não será mudado e continua imprimindo a mesma coisa.

//Posso também travar qualquer objeto que venha de um construtor:
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); //Chamando o freeze dentro da função contrutora, sempre que criar um objeto com essa função ele estará bloqueado para edição.
}
const p3 = new Pessoa2('Valentina', 'Fernandes');
p3.nome = 'Alice'; //Dessa forma a mudança de nome não será aplicada.
delete p3.sobrenome; //Não consigo excluir nada do meu objeto
p3.fala = () => console.log('Oi'); //Nem criar métodos para meu objeto.
//p3.fala(); //Chamar esse método vai gerar um erro pq ele não vai ser criado em p3
console.log(p3);
//Travar a edição de um objeto na sua construção é muito perigoso, pq não será possivel criar, deletar ou editar métodos e atributos do meu objeto.
//Então para travar eu tenho que criar tudo que eu preciso ter no meu objeto antes de travá-lo.
//Isso também funciona com Array