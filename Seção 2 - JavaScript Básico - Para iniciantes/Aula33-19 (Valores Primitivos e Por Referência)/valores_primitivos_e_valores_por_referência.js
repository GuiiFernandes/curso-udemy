console.log('DIFERENÇA DE DADOS PRIMITIVOS E POR REFERÊNCIA:');
/*
Primitivos (Valores Imutáveis) - String, Number, Boolean, undefined e null (já vimos) + bigint e symbol (ainda vamos ver)
Referência (Valores Mutáveis) - Array, Oject e Function (já vimos)
*/
console.log('-> Dado Primitivo tem valor imutável:');
let nome='Guilherme';
nome='Gui';
console.log(nome);
//No caso acima Gui e Guilherme são dados primitivos imutáveis, mas mudar o valor de nome não muda o dado em sim, apenas troca o valor que está dentro de uma variável.
//O que seria imutável é em relação ao dado indexado. Por Exemplo:
//Em array o índice refere a posição de um elemento dentro do array, na string refere a posição de um caractere dentro da String.
console.log(nome[0]); //Portanto quando chamo meu índice 0 de nome, o console me retorna 'G'.
nome[0]='R'; //Em array quando eu atribuo um novo elemento ao índice ele substitui o elemento existente. Já na String isso não acontece.
console.log(nome[0], nome); //Note que o índice 0 da String que está em nome continua sendo 'G'. Isso acontece pq a String é um dado primitivo e portanto imutável.
console.log('-> Dado por Referência tem valor mutável:');
const array=['Gui', 'Pli', 'Meg']; // Crio o valor de um array
array[0]='Bruce'; //Modifico o índice 0 do meu array, assim como não funcionou no dado primitivo.
console.log(array[0], array); //Note que a alteração foi feita com sucesso, mesmo minha variável sendo declarada com const
//Quando uso dado estou me referindo especificamente ao valor, variável é só uma caixa que contém um valor.

console.log('-> Dado Primitivo cria uma cópia quando uma variável recebe o valor de outra:');
let a='A';
let b=a; //b só vai depender de a para criar um valor para ela.
//Depois de copiado b tem seu valor definido e não depende mais de a para nada.
a='Abacaxi';
console.log(a,b); //Mesmo mudando o valor de a, b continua sendo 'A'.
console.log('-> Dado por Referência usa um valor alocado em determinado local da memória como referência, portanto alterando o dado se altera a todas as variáveis que o usam como referência:');
//Quando o valor não é primitivo:
let arraya=[1,2,3];
let arrayb=arraya; //Quando eu digo isso, estou dizendo que arrayb vai apontar para o mesmo lugar na memória onde arraya está armazenado.
console.log(arraya,arrayb); //Note que tanto arraya quanto arrayb tem o mesmo valor.
arraya.push(4);
arrayb.push(5);
//No caso do array, quando eu modifico o array alocado em uma variável, necessariamente ele altera o array alocado na outra.
console.log(arraya,arrayb);
arrayb.pop(); //Mesmo mexendo só em arrayb
console.log(arraya); //arraya muda.
//Para copiar o valor de a para uma nova variável e ser totalmente independente você usa [..a]:
let arrayc=[...arraya];
arrayc.push('Gui'); //Dessa forma mudar c não altera a e nem b.
console.log(arraya,arrayb,arrayc); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ] [ 1, 2, 3, 4, 'Gui' ]
//Isso acontece com object também!
const pessoa1={
    nome:'Gui',
    sobrenome:'Fernandes',
};
const pessoa2=pessoa1;

console.log(pessoa1,pessoa2); //As duas pessoas tem o mesmo nome e sobrenome.
pessoa2.nome='Pli'; //Mudo o nome de pessoa2 e pessoa1 também muda
console.log(pessoa1,pessoa2); //Ambos continuam iguais com o Novo nome.
const pessoa3={...pessoa1}; //Crio uma cópia do Object
pessoa3.nome='Gui'; //Mudo o nome desse Object
console.log(pessoa1,pessoa2,pessoa3); //Ele é o único que altera, pois é uma cópia em um local independente na memória.

//Nos primitivos quando uso = crio uma cópia, nos por referência crio uma relação (aponto) para um dado alocado em um local específico na memória.