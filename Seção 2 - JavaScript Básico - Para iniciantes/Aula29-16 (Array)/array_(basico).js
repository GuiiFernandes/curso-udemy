console.log("ARRAYS (BÁSICO)");
/*
Array são listas indexadas de coisas, coleções de coisa.
*/
const pets=['Meggye', 'Bruce', 'Jack', 'Nick']; //Arrays são criados com colchetes e seus dados são separados por vírgula.
//Arrays aceitam qualquer tipo de dados (boolean, string, number, null, etc.), porém não é uma boa prática de programação.
//Vamos tentar sempre trabalhar com o mesmo tipo de dado dentro de um array.
/*
Array aceita ser modificado mesmo a variável que o recebe sendo const.
Isso ocorre porque array é um objeto com vários valores e quando altero um valor dentro do array não estou alterando a variável, mas um valor dentro do objeto.
Se eu tentar alterar minha variável:
pets=['Mel', 'Tunico', 'Lila'] -> Isso daria erro, porquê estou atribuindo um novo valor a variável.
*/
console.log(pets);

console.log('->Índice de um Array:');
/*
Arrays são indexados, assim como as strings, porém o índice é por elemento.
Sendo, no exemplo acima:
O índice 0 = Meggye
1= Bruce
2= Jack
3= Nick
*/
console.log(pets[1]); //Bruce
console.log(pets[3]); //Nick
//Se eu tentar acessar um índice que não existe elemento no meu array retorna undefined.

console.log('->Modificar um valor de um Array:');
//Para editar um valor de um array basta chamar a variável que o recebeu e usar o colchete para modificar o indice:
pets[3]='Amora';
console.log(pets);

console.log('->Adicionar um valor ao final de um Array:');
//Uma das formas para adicionar um valor a um array basta chamar a variável que o recebeu e usar o colchete com o indice maior do array +1:
pets[4]='Nick'; //Esse método pode ser complexo, pq preciso saber qual o último índice do meu array.
console.log(pets.length); //5
//.length também mostra quantos elementos tenho no meu array, assim como nas Strings.
//Portanto posso adicionar um item ao meu array através de:
pets[pets.length]='Hamburguer';
console.log(pets);
//Porém o jeito mais fácil de adicionar um item ao array é com .push():
pets.push('Mel'); //Forma mais usada.

console.log('->Adicionar um valor ao inicio de um Array:');
//Para adicionar um valor ao inicio de um array uso .unshift()
pets.unshift('Boris'); //Ao usar essa função, os indices de todos os elementos já existentes somam 1.
//unshift pode prejudicar a performace do seu sistema por ter que mexer em todos os dados de um array.
console.log(pets);

console.log('->Remover um valor do fim de um Array:');
//Para remover um valor ao fim de um array uso .pop()
const removido = pets.pop(); //Remove 'Mel' e a salva na variável removido.
//Esta função remove o elemento e consequentemente o índice que ele está no array.
console.log(pets);
console.log(removido);

console.log('->Remover um valor do inicio de um Array:');
//Para remover um valor do inicio de um array uso .shift()
const removido2 = pets.shift(); //Remove 'Boris' e a salva na variável removido.
//Neste caso, os índices de todos os elementos são subtraidos 1.
console.log(pets);
console.log(removido2);

console.log('->delete');
//Remove um valor de qualquer lugar de um array sem modificar os índices dos demais elementos.
delete pets[3]; //Remove 'Amora' do array e não altera o indice dos demais elementos.
//Porém deixa um lugar vazio no meio do meu array.
console.log(pets);

console.log('->fatiar um array');
//.slice assim como na String fatia um array.
//Posso fazer com números positivos.
console.log(pets.slice(0,3)); // [ 'Meggye', 'Bruce', 'Jack' ]
//Mas também posso usar com números negativos
console.log(pets.slice(0,-3)); //[ 'Meggye', 'Bruce', 'Jack', <1 empty item> ]
//O -2 representa onde meu .slice vai parar nesse caso para em 'Nick'.

console.log('->TypeOf de um array');
//Array é considerado um Object pelo typeof
console.log(typeof pets); //object
//Array é um objeto indexado, porém com a diferença do Array ser indexado automaticamente. Diferente do objeto
//Porém para ter certeza que estamos trabalhando com um Array usamos:
console.log(pets instanceof Array); //Pergunto se pets é uma instancia de Array:
//Se retornar true, é porque é. Se false, pq não é um Array.