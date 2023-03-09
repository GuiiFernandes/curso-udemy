console.log('-> .toString');
/*
Quando faço conta com número posso querer manipular um Number como String, para que eu faça isso sem modificar o tipo da variável
Uso .toString na variável.
*/
let num1 = 1; //Typeof = Number
let num2 = 2.5; //Typeof = Number
console.log(num1+num2); //Resultado = 3.5 / + com sentido de soma (1+2.5=3.5)
console.log(num1.toString()+num2); //Resultado = 12.5 / + com sentido de concatenação por causa do .toString
console.log(typeof num1); //A variável num1 ainda é Type Number, mesmo sendo usada como String acima.
/*
Para alterar o type de num1 posso usar:
num1=num1.toString(); //Assim num1 recebe num1 em formato de string.
*/

console.log('-> .toString binário');
//Para mostrar um número em formato de String de forma binária uso:
let num3=10;
console.log(num3.toString(2)); //Resultado: 1010 -> Esse é a String '10' representada em números binários.

console.log('-> .toFixed');
//Para arredondar um número uso .toFixed(), onde dentro de () fica quantas casa decimais eu quero seja exibido
let num4=10.5789551255547;
console.log(num4.toFixed(2)); //lembrando que a função não altera o valor de num4. Portanto, num4 mantém todas as casa decimais.
//Isso serve para que o usuário possa ver um valor mais redondo, mas que o valor real não seja perdido para efeito de contas.

console.log('-> .isInteger');
//Quando minha variável recebe um resultado de conta ou dado de um banco de dados. Posso querer validar se este número é Inteiro. Para isso:
let soma1=num1+num3; //soma recebe o valor de num1+num3 = 11
console.log(Number.isInteger(soma1)); //11 é um número inteiro, então Number.isInteger() retorna um boolean (true or false), nesse caso true.
let soma2=num1+num2; //Neste caso, num1+num2= 3.5, ou seja, um número não inteiro
console.log(Number.isInteger(soma2)); // Portanto, soma2 retorna false

console.log('-> .isNaN');
//Para descobrir quando o valor de uma variável é NaN (Not a Number), faço:
let temp=num1*'Olá'; //Quando tento calcular um número com uma String formada por letra ou quando algo não acontece como era de se esperar em uma operação...
console.log(temp); //...o resultado é NaN = Not a Number ou Não é um Número.
console.log(Number.isNaN(temp)); //O valor retornado é boolean assim como em isInteger e nesse caso retorna true.
//Obs.: Se minha String fosse '5', por exemplo, o JavaScript faria a conta normalmente e retornaria false no isNaN:
let temp2=num1*'5'; //O JS entende que a String '5' é um número 5 e faz num1*5=5
console.log(Number.isNaN(temp2)); //Portanto, Number.isNan(temp2) retorna false.
//Mas fazer contas usando String não é uma boa prática de programação, sendo assim, se eu sei que vou receber um número em formato de String, devo converte-lá antes de calcular. Mesmo porquê se o operador fosse + teriamos uma concatenação.

console.log('-> IEEE 754-2008, erro de calculo do JS');
//IEEE 754-2008 é o padrão de precisão de calculos do JS para números decimais. Porém essa forma possui uma imprecisão.
let num5=0.7;
let num6=0.1;
//Suponha que você quer que num5 aumente o valor somando a num6 até completar 1.
num5+=num6; //0.8
num5+=num6; //0.9
num5+=num6; //1.0
console.log(num5); //Perceba que o valor é 0.99999, portanto, se tivessemos uma condição para acontecer quando num5 chegasse a 1 ela não aconteceria.
console.log(Number.isInteger(num5)); //isInteger = False
inteiro1=num5.toFixed(2);
console.log(inteiro1); //Note que o resultado é 1.00, se for jogado o número em si é inteiro. Mas quando o engine checando os códigos de máquina (binários) da conta o isInteger retorna false.
console.log(Number.isInteger(inteiro1)); //isInteger = False

console.log('      -> Corrigindo erro com parseFloat ou Number aliado a toFixed');
//Para corrigir esse erro de forma fácil e rápido usamos parseFloat ou Number aliado ao toFixed(2):
let inteiro2=parseFloat(num1.toFixed(2)); //Assim meu resultado dá 1.
console.log(inteiro2); //Note que o resultado agora é 1.
console.log(Number.isInteger(inteiro2)); //isInteger = true. Agora sim, isInteger retornou true.

console.log('      -> Corrigindo erro com operação');
//Como o erro é a conta feita com números decimais, posso transformá-los em inteiro, fazer a conta e depois dividí-lo novamente para decimal.
let num7=0.7;
let num8=0.1;
num7=((num7*100)+(num8*100))/100; // sendo assim vou ter:
/*
((0.7*100)+(0.1*100))/100
(70+10)/100
80/100 = 0.8
*/
console.log(num7); // O resultado agora dá certo, 0.8
console.log(Number.isInteger(num7)); //isInteger retorna true.
//Porém essa forma é mais longa e deixa o código complexo.