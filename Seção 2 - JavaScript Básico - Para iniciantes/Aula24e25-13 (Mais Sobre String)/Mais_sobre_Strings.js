//String é um dado de texto.
//             0123456789
let umaString='Um \'texto\'';
// A barra invertida antes de um caractere permite que ele escape da leitura padrão e apareça como parte da string e não como abertura ou fechamento do texto.
//Para usar barra invertida dentro do texto tenho que fazer "\\", onde uma vai ser o escape e a segunda será exibida.
console.log(umaString);

// Strings são indexadas, então cada caractere de uma String tem um valor que dá esquerda pra direita que começa no 0, 1, 2, 3 até o infinito.
//Sendo assim, posso chamar o elemento de um índice específico de uma String.
console.log(umaString[4]); //t
//Se eu pegar um índice que está fora da quantidade de caractere da minha String ou negativo, retorna undefined.
console.log(umaString[15]); //undefined
console.log(umaString[-2]); //undefined

//Outra forma de pegar um elemento é com charAt:
console.log(umaString.charAt(1)); //m - Neste caso valor negativo ou fora do Range da String retorna um valor vazio.
//. Vai me mostrar as funções possíveis com uma string.

//Função de concatenação:
console.log(umaString.concat(' em', ' um', ' lindo dia.')); //função de concatenar não é muito usual.
console.log(umaString+' em um lindo dia.'); //podemos usar + para a mesma função
console.log(`${umaString} em um lindo dia.`); //Template String é a forma melhor de fazer essa concatenação.

//Posso buscar qual o indice inicia uma palavra:
console.log(umaString.indexOf('texto')); //4 (caso não encontre retorna -1)
//Posso pedir para encontrar o indice de um caractere a partir de um indice definido.
console.log(umaString.indexOf('o',3)); //8
//Posso começar a leitura dos indices de trás pra frente com lastIndexOf:
console.log(umaString.lastIndexOf('o')); // Retorna 8 também, mas a leitura começa no fim (9) e finaliza no indice do inicio (0).
console.log(umaString.lastIndexOf('o',3)); //Neste caso estou dizendo para começar a contagem no 3, então ele finaliza no 0. Sendo assim retorna -1.

console.log('-> Match:');
//match retorna os dados pesquisados dentro de uma String.
console.log(umaString.match(/[a-z]/g)); //Usa a expressão regular [a-z] para buscar. Expressão regular precisa de um curso a parte de tão grande.
//Neste exemplo buscamos no texto todos os caracteres que estão entre a e z minúsculos e adicionamos em um array com "g".
console.log(umaString.match(/[a-z]/));
//Sem o g retorna o primeiro valor lido no texto que aceita a condição imposta.

//search retorna o indice onde o primeiro valor satisfaz a condição de busca.
console.log(umaString.search(/[a-z]/)); //Como retorna o primeiro indice da condição, o g não faz diferença.
console.log(umaString.search(/x/)); //Nesse caso retorna 6, pq é o indice de onde está a letra x.
//Muito similar oa indexOf, mas aceita expressões regulares.

//replace é interessante pq pode ou não usar expressões regulares.
//replace troca partes de textos de acordo com a sua necessidade..
console.log(umaString.replace('Um', 'Outro')); //Outro 'Texto'
console.log(umaString.replace(/Um/, 'Outro')); // também funciona com expressão regular
//Uma coisa interessante é substituir partes especificas de um texto, por exemplo:
let duasString = 'O rato roeu a roupa do Rei de Roma.'
console.log(duasString.replace(/r/, '#')); //Neste exemplo o primeiro r minúsculo do texto vai ser substituido por #
console.log(duasString.replace(/r/g, '#')); //Com o g, substitui todos os r minúsculos do texto.
//Caso não seja encontrado retorna um valor -1.

//length não é uma função, é um atributo que retorna o tamanho de uma string.
console.log(duasString.length); //35 caracteres, mas o indice começa no 0, então temos até o indice 34.

//slice é uma função que pega parte da minha string:
console.log(duasString.slice(2,6)); //Nesse caso pega indice 2=r até indice 6=" ", mas o final pega o penúltimo caractere.
//rato
//No Slice posso usar valor negativo
console.log(duasString.slice(-3)); //Isso significa que estou usando length-3 / 35-3=32
console.log(duasString.slice(32)); //A expressão de cima é o mesmo que essa de baixo.
//Ou seja, começa no index 32 até o final.
console.log(duasString.slice(-5,-1)); //Podemos dizer que ele volta a contagem do indice do final para o inicio negativamente, conforme abaixo:
//                                              -5-4-3-2-1
//      ... -5-4-3-2-1 0123456789 ...
//'...Rei de R o m a . O rato roeu a roupa do Rei de Roma. ...'
//-5=R / -4=o / -3=m / -2=a / -1=.

//substring tem a mesma função de slice, porém é digitado de uma forma maior. Abaixo temos o mesmo que no último slice:
console.log(duasString.substring(duasString.length-5,duasString.length-1)); //slice faz essa mesma coisa.

//split divide uma string dentro de um array de acordo com uma caractere escolhido
console.log(duasString.split(' ')); //O valor que divide não aparece.
console.log(duasString.split(' ',2)); //2 é um limite de vezes que isso vai acontecer.

console.log(duasString.toUpperCase()); //Deixa toda String em maiúsculo
console.log(duasString.toLowerCase()); //Deixa toda String em minúsculo

//w3School javascript e mdn javascript tem muita documentação sobre tudo que dá pra fazer com string. Na ECMA Script também, mas é bem complexo, formal e em inglês.