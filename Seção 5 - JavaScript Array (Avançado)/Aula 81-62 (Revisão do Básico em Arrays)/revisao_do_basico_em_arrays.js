console.log('REVISÃO DO BÁSICO EM ARRAY');
//Criar array:
const nomes=['Gui','Pli','Valentina', 'Alice']; //Essa é a forma literal de criação de array
//Indexado  [  0  ,  1  ,     2     ,    3   ]
//Posso alterar um dado pelo indice:
nomes[2]='Cristina';
console.log(nomes);
//Posso deletar um nome sem alterar o indíce do meu array

console.log('-> Alterando Array:');
delete nomes[2];
console.log(nomes);

console.log('-> Criando Array com função construtora:');
//Posso criar um array utilizando um construtor. (é muito pouco utilizado)

const nomes2 = new Array('JC', 'Rubya','Fabiano','Gininha');
//Mas funciona para qualquer coisa (String, objetos, funções, números, etc), posso criar da forma literal ou com construtor
console.log(nomes2);

console.log('-> Valor por referência no Array:');
//Array são dados por referência.
const novo = nomes; //Dessa forma eu atribuo nomes a novo, mas tudo que eu fizer em um reflete no outro.
novo.pop(); //Sendo assim se eu tirar um elemento de novo
console.log(nomes); //Ele também sai de nomes

console.log('-> Spred/Rest no Array:');
//Os dados de um array também pode ser copiado pelo rest/spred operator:
//Spred e rest são o mesmo operador.
const novo2=[...nomes2]; //Crio um novo array de forma literal com ... e o nome do array que quero copiar
//Dessa forma o ... vai pegar os dados de nomes2 e espalhar (spred) dentro de novo2.
novo2.pop(); //Agora o que faço em novo2, não reflete em nomes2
console.log(novo2,nomes2);

console.log('-> Pegando o tamanho do Array:');
//Para pegar o tamanho do array uso .length
console.log(nomes.length); //Lembrando que length não é um método, mas um atributo. Por isso não usa ()
//length fala o tamanho do array, é diferente dos índices.

console.log('-> removendo elemento do Array:');
//Para remover no fim do array uso .pop()
const removido= nomes2.pop(); //Posso adicionar o dado removido a uma variável.
console.log(nomes2,removido);
//Para remover do inicio do array uso .shift()
const removido2= novo2.shift(); //Remover com shift vai mudar o indice de todos os elementos do meu array.
console.log(novo2,removido2);

console.log('-> Adicionar elemento ao Array:');
//Adicionando ao final do array:
nomes2.push('Maggye'); //Push é muito utilizado
console.log(nomes2);
//Para adicionar no inicio do array:
nomes2.unshift('Bruce'); //unshift assim como shift é pouco utilizado
//Porquê desloca todos os indices do array e em um array grande vai trazer problema de performace para o programa
console.log(nomes2);

console.log('-> Fatiar o Array:');
//Para fatiar o array uso slice
const novo3= nomes2.slice(1,3); //.slice(inicio*,fim*) *do fatiamento
//O indice do fim não é incluido
console.log(novo3);
//É mais intuitivo usar no fim o número negativo. Ele vai dizer quantos elementos você não quer selecionar no seu array
const novo4= nomes2.slice(0,-2); //Dessa forma, os dois últimos elementos de nomes2 não será adicionado a novo4.
console.log(novo4);

console.log('-> convertendo string em Array e vice-versa:');
//Para converter string em array uso .split()
const nome='Guilherme Fernandes Silva';
//Dentro de .split('x'), onde x é o caractere de separação da minha string, ou seja, toda vez que eu tiver x na string eu começou um novo elemento no array
const nomes3=nome.split(' ');
console.log(nomes3);
//Para unir um array em uma string só utilizo .join()
const nome2=nomes3.join(' e '); //Assim como em .split(), em join o que está dentro de () é o caracteres que vai separar os elementos do Array dentro da String.
console.log(nome2);
//O caractere de separação pode ser qualquer um.