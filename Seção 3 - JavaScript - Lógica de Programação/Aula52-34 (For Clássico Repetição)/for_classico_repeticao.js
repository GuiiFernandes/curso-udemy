console.log('FOR - CLÁSSICO - ESTRUTURA DE REPETIÇÃO');
//For clássico é chamado assim pq é usado da mesma maneira em várias linguagens de programação.
//Na programação abaixo vemos uma repetição obvia para mostra as linhas.
console.log('-> Imprimir dados repetidos de forma completa:');
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

console.log('-> Imprimir os mesmos dados com o For:');
//A estrutra de repetição pode simplificar essa programação:
//usamos i que siginifica index
for (let i = 0; i<=5; i++) /*(Variável de controle*; condição de final*; incremento ou decremento da variável**) */ {
    console.log(`Linha ${i}`);
} //bloco do for não tem ';' no final.

//For, a estrutura de repetição, significa que a engine do JS vai rodar esse bloco, repetidas vezes, por n vezes até que a condição seja satisfeita.
/*Então minha engine faz:
    i=0 -> meu i é menor igual a 5? -> Sim -> console.log -> i+1=1
    i=1 -> meu i é menor igual a 5? -> Sim -> console.log -> i+1=2
    i=2 -> meu i é menor igual a 5? -> Sim -> console.log -> i+1=3
    i=3 -> meu i é menor igual a 5? -> Sim -> console.log -> i+1=4
    i=4 -> meu i é menor igual a 5? -> Sim -> console.log -> i+1=5
    i=5 -> meu i é menor igual a 5? -> Sim -> console.log -> i+1=6
    i=6 -> meu i é menor igual a 5? -> Não -> Finalizo a repetição
*/

//*i pode iniciar ou finalizar em qualquer valor que eu quiser, ou pode receber uma variável com valor inserido pelo usuário
//**Podemos usar o incremento com valor que quisermos, por exemplo, para pular de 10 em 10 usamos 'i+=10' ou para subtrair de 2 em 2 usamos 'i-=2'.
//**Para andar negativo, tenho que inverter o valor da minha variável e condição.
/*
**Quando vou incrementar preciso:
-valor da variável de controle menor que da condição final
-condição final analisa i como menor que seu valor.
Quando quero decrementar preciso:
-valor da variável de controle maior que da condição final
-condição final analisa i como maior que seu valor.
*/

console.log('-> Usabilidade prática do For clássico:');
//Vou analisar números de 0 a 10 e retornar qual são par ou ímpares.
for (let i=0; i<=10; i++) { //para i de 0 a 10 incrementando +1
    const par= i%2===0 ? console.log(`${i} é um número par.`) : console.log(`${i} é um número ímpar.`); //Condição ternária
    //Se par dividido por 2 tiver resto 0, mostro que o número é par, se não mostro ímpar.
}

//Percorrer um array com uma lista de frutas e exibi-las com seu código
const frutas = ['Maça', 'Pêra', 'Uva', 'Banana', 'Abacaxi', 'Pessego']; //Tenho uma lista de frutas, cujo código é o indíce
for (let i=0;  i<frutas.length; i++) { //para i de 0 até o último index da minha lista (i<frutas.length) incrementando +1.
    console.log(`Cód ${i} -`,frutas[i]); //Exiba o código da fruta (i) e o nome da fruta.
}

//Existem maneira mais resumidas e modernas de repetição que essa, vamos aprender adiante..
//Mas é importante que você conheça essa.