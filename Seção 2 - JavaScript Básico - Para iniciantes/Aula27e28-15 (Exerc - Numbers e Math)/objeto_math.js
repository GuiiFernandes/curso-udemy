console.log('OBJETO MATH: BIBLIOTECA DE MATEMÁTICA:');
//O objeto math é uma biblioteca já disponibilizada pelo JS com vários métodos abreviados para calculos matemáticos. E é chamado de Math
//As documentações da mdn e w3school tem bastante informações detalhadas sobre esse objeto e tem todos os seus métodos.
let num1=9.54578;
let num2=1;
let num3=-10;
let num4=5;
let num5=38.578945;
let num6=9;
let num7=-3.58795;

console.log('->.floor');
//.floor é o método de Math que arredonda o número para inteiro e para baixo.
let numArredondaBaixo = Math.floor(num1); // 9
console.log(numArredondaBaixo);

console.log('->.ceil');
//.ceil é o método de Math que arredonda o número para inteiro e para cima.
let numArredondaCima = Math.ceil(num1); //10
console.log(numArredondaCima);

console.log('->.round');
//.round é o método de Math que arredonda o número para inteiro e o mais próximo do real.
let numArredondaReal = Math.round(num1); //9.5 arredonda para cima.
console.log(numArredondaReal); //10

console.log('->.max');
//.max é o método de Math que retorna o maior número de uma série de números.
let maior = Math.max(num1,num2,num3,num4,num5,num6,num7);
console.log(maior); //38.578945

console.log('->.min');
//.min é o método de Math que retorna o menor número de uma série de números.
let menor = Math.min(num1,num2,num3,num4,num5,num6,num7);
console.log(menor); //-10

console.log('->.random');
//.random é o método de Math que retorna um número aleatório entre 0 e 1.
console.log(Math.random());
//Uma usabilidade legal é por exemplo, quando quero gerar um número aleatório inteiro entre 5 e 10 uso:
const aleatorio=Math.round(Math.random()*(10-5)+5);
/*
Dessa forma tenho o meu random * (o maior número - o menor)+ o menor)
Depois eu arredondo ele.
*/
console.log(aleatorio);

console.log('->.PI');
//.PI é o método de Math que retorna o valor de Pi.
console.log(Math.PI); //3.14...

console.log('->.pow');
//.PI é o método de Math que retorna a potencia de dois números.
potencia=Math.pow(num4,num2);
console.log(potencia); //5
//Porém é mais fácil usar o operador.
console.log(num4**num2); //5
//Para raiz quadrada posso usar operador de potência:
console.log(num6**(1/2)); //3 - Dessa forma posso fazer raiz quadrada, cúbica, etc.. Todos os expoentes.
//ou
console.log(num6**0.5); //3

console.log('->Divisão por 0');
//No JS dividir um número por 0 retorna Infinity
/*
O Java Script não só aceita como diz que essa conta é verdadeira, porém quanto mais próximo de 0 é a divisão mais o número tende a infinito
Por isso, o engine retorna infinity.
*/
console.log(num6/0); //Infinity