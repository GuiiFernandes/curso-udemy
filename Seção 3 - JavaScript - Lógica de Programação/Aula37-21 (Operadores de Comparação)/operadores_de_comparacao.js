//OPERADORES DE COMPARAÇÃO
console.log('OPERADORES DE COMPARAÇÃO:');
/*
> (maior que)
>= (maior que ou igual a)
< (menor que)
<= (menor que ou igual a)
== (igual) - Cuidado pra não confundir = (atribuição) - Checa valor* (não utiliza**)
=== (igual estrito) - Checa valor e tipo* (utiliza**)
!= (diferente)  - Checa valor* (não utiliza**)
!== (diferente estrito) - Checa valor e tipo* (utiliza**)
*/
console.log('-> >, <:');
console.log(10>5); //Essa expressão retorna um boolean (True ou False.).
//Posso também criar uma variável com o booleano de uma expressão:
const comp=5>10;
console.log(comp);
//Checa apenas uma condição.

console.log('-> >=, <=:');
const comp2=5>=10; //5 é maior ou igual a 10? R: False
console.log(comp2); //Retorna false
//Faz duas checagens, 1- se 5 é igual a 10. 2- se 5 é maior que 10.
//Utiliza a comparação lógica OU que retorna verdade mesmo uma das condições não sendo verdadeira.

const num1=5; //posso atribuir variáveis
const num2=10;
const comp3=num1<=num2; //comparar os valores delas
console.log(comp3); //Retorna True

console.log('-> ==, ===, !=, !==:');
const comp4=num1==num2; //Num1 é igual a num2? R: False (armazena False na variável comp4)
console.log(comp4);
//Porquê devo usar === e !== ao invés de == e !=:
num3='10'; //Se tenho uma variável com a string 10
const comp5= num2==num3; //Se eu tentar comparar os dois, vai retornar verdadeiro, mesmo um dado meu sendo String.
console.log(comp5); //Retorna True.
//Utilizando o operador == você faz uma coerção de tipo, onde o enginer deduz que '10'=10.
const comp6=num2===num3; //Dessa forma o JS não faz a coerção e retorna False.
console.log(comp6); //Usar == pode causar efeito colateral, não confie no enginer para fazer calculo, converta a String.
const comp7=num2!==num3;
console.log(comp7); //O diferente funciona da mesma forma..