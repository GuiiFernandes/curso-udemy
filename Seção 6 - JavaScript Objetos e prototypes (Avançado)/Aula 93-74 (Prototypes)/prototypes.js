console.log('PROTOTYPES:');
// Função Construtora -> molde (classe) -> Molde para criação de objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

//instância (ação de criar um objeto)
const pessoa1 = new Pessoa('Gui', 'Fernandes'); //<- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Pli', 'Leal'); //<- Pessoa = Função Construtora

console.dir(pessoa1);
console.dir(pessoa2);
//Toda vez que eu crio uma pessoa meu código cria um novo método nomeCompleto para o novo objeto Pessoa. Isso cria um grande problema de performace.
//Isso vai ocupar uma memória violenta com códigos repetitivos (Se tiver 1 milhão de pessoas tem 1 milhão de metódos nomeCompleto iguais alocados na memória.)

//Os protótipos vão te ajudar a resolver esse problema passando propriedades e métodos de um objeto para outro.
//Definição: Protótipo é o termo usado para se refir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

/*Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o top (null) até encontrar (ou não) tal membro.*/

//Para entendermos comparamos nossa função contrutora pessoa, com outra função construtora Date.
const data = new Date(); // -> Date = Função construtora.
console.dir(data);
//Quando comparo data e pessoa1 ou 2 no navegador, vemos que pessoa tem vários atributos e métodos.
//Enquanto data não. Então como acessamos:
console.dir(data.toLocaleString()); //Acessando método dentro da minha função construtora Date.
//É porquê o método não está registrado em data, mas na função construtora pai Date e pode ser acessada através do protótipo (__proto__).
//Ou seja, o método está em um objeto só, ocupando um local na memória só e pode ser acessado por todos os objetos criados com a função contrutora Date.

//Todo objeto tem a propriedade proto (ela já é criada automaticamente com o objeto e linkado na função construtora que a criou.)
//Quando chamamos a propriedade vemos que ela é um objeto.
console.dir(Pessoa.prototype); //No caso de Pessoa, o prototype é vazio.
console.dir(Date.prototype); //Já em Date, temos todos os métodos que temos acesso em Date armazenados no seu prototype.

console.log('-> Criando um prototype para minha função Construtora eu faço:');
Pessoa.prototype.estouAqui = 'Eu sou um atributo no proto!'; //Chamo o nome da minha função.prototype.nomeAtributo
//Ao fazer isso quando eu chamo novamente o prototype de Pessoas:
console.dir(Pessoa.prototype); //Os meus objetos pessoa1 e 2 passam a ter estouAqui do proto da função construtora Pessoa linkado a eles.
//Ou seja, pessoa1 e 2 acessa estouAqui na minha função construtora Pessoa.
console.dir(Pessoa.prototype === pessoa1.__proto__); //Pra mostrar que o proto de pessoa1 e 2 é o mesmo que o proto de Pessoa eu testo se ambos são estritamente iguais e o retorno é sim.

console.log('-> Criando um método no prototype da minha função Construtora eu faço:');
/*ATENÇÃO: Quando eu criar algo no proto da função construtora, ao chamar esse método/atributo dentro do objeto por ele criado, primeiro o JS procura o atributo/método dentro do objeto e não encontrando passa a procurar no proto.
No caso de pessoas, se eu criar NomeCompleto no proto de Pessoas e não tirar a criação do método dentro do objeto Pessoas, ele sempre vai executar nomeCompleto do objeto e não do proto da função construtora.*/
Pessoa.prototype.nomeCompleto2 = function() { // funcaoConstruc.prototype.nomePropriedade recebe uma função anonima ou arrow function que executa o que for necessário
    return this.nome + ' ' + this.sobrenome; //Nesse caso, retorno o nome Completo.
};
console.dir(pessoa1.nomeCompleto2()); //para chamar o método, basta invocar o objeto.nomeMetodo() / nomeMetodo é o criado na função construtora.

console.log('-> Cadeia do proto:');
/*
Dentro dos prototypes existe uma cadeia hirarquica de busca do motor do JS ela é:
data --> Date.prototype --> Object.prototype;
pessoa1 --> Pessoa.prototype --> Object.prototype;

Dentro dessas hieraquias é possível linkar/referenciar e expandir essa cadeia aumentando a herança de um para o outro.
Isso vai ficar para as próximas aulas.
*/