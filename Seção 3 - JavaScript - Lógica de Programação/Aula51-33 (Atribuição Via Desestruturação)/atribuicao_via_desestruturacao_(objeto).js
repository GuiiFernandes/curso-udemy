console.log('ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)');
//Criamos um objeto pessoa com um objeto endereço dentro dele
const pessoa= {
    nome: 'Gui',
    sobrenome: 'Fernandes',
    idade: 29,
    endereco: {
        rua: 'Rua Antônio Benedito dos Santos',
        numero: 146
    },
    pai: 'Jorge',
    mae: 'Cristina',
    sexo: undefined,
    tipoSanguineo: 'A+',
    estadoCivil: 'Casado'
};

console.log(pessoa); //chamo a lista completa
console.log(pessoa.nome); //posso chamar um atributo do objeto
let nome2= pessoa.nome; //Dessa forma atribuo o objeto a uma variável
console.log(nome2); //Dessa forma tenho a atribuição normal
//Para fazer uma atribuição via desestruturação eu posso utilizar as chaves assim como no array.
const { nome, tipoSanguineo } = pessoa; //Passei o objeto pessoa e pedi para que o JS extraisse os atributos para as variáveis dentro das chaves.
//automaticamente o JS cria variáveis para atribuir o valor do atributo do objeto.
console.log(nome,tipoSanguineo);
console.log('-> Atribuição via desestruturação com mais dados:');
//Dessa forma posso pegar quantos atributos eu quiser.
const {sobrenome: nomeMeio, idade, sexo='Não informado'}=pessoa;
console.log(nomeMeio/* * */,idade,sexo/* ** */);
/*
*= Posso mudar o nome de uma variável, isso permite que eu manipule seu conteúdo redlecarando-a sem mexer no seu valor original.
Nesse caso, ao escrever 'sobrenome: nomeMeio' estou dizendo que estou atribuindo o valor de sobrenome a variável nomeMeio e agora vou manipular o sobrenome atráves de nomeMeio sem alterar sobrenome no objeto e sobrenome não foi definido fora do meu objeto, por isso chamar 'console.log(sobrenome)' gera um erro.

**= Quando uma variável não existe ou não tem valor no objeto o valor dela retorna undefined, posso cria-la setando um valor padrão.
Se eu tivesse o valor de sexo definido no objeto ele sobrepõe o valor padrão.
Isso funciona com array também.

Posso também unir os dois casos (* e **)
*/

console.log('-> Extraindo dados por AVD de um objeto dentro de outro objeto:');
//Se eu pegar o atributo endereço vou ter outro objeto atribuido na variável.
//Para pegar um atributo de dentro do objeto endereço faço:
const { endereco:{rua: r,numero, bairro='Não definido'},endereco, ...resto}=pessoa; //Neste caso usei o : para me referir ao atributo endereço dentro de pessoa e {rua,numero} para mostrar que quero os atribuir a uma variável o valor dessas.
//Quando eu não uso o ':' atribuo o endereço como objeto.
console.log(r,numero,bairro,endereco);
//Da mesma forma posso atribuir um novo nome a um atributo com ':'

console.log('-> usando rest para AVD:')
//...variável usa o rest para extrair o resto do objeto.
//Rest vai extrair todos os atributos que não foram definidos ainda nas {} da AVD.
console.log(resto);