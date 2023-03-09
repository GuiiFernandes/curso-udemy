/*
Operadores aritméticos em ordem de importância:
1º - () (Conta dentro de parenteses)
2º - ** (Potenciação)
3º - / (Divisão), * (Multiplicação), % (Resto da Divisão) <- Quando temos dois na mesma ordem calcula o que vier mais a esquerda primeiro
4º - + (Adição e concatenação), - (Subtração)
*/

//+
const num1=5;
const num2=2;
const num3=10;
console.log(num1+num2); //Exemplo de adição
const a='5';
console.log(a+num2); //Exemplo de concatenção = União.
console.log(num1-num2); //Exemplo de subtração
console.log(num1*num2); //Exemplo de multiplicação
console.log(num1/num2); //Exemplo de divisão
console.log(num1**num2); //Exemplo de potenciação
console.log(num1%num2); //Exemplo de resto da divisão
console.log(num1+num2*num3); //Assim como na matemática, na prog. o operador de maior importancia é respeitado
//Portanto a conta fica: 10*2=20+5=25, para alterar o precedencia do *, utilizo o ().
console.log((num1+num2)*num3); // Neste exemplo fará 5+2=7*10=70
console.log(num1*num2/num3); // 5*2=10/10=1

//Operador de incremento/decremento:
// ++ = Incremento. Acrescenta mais um ao valor já existente da variável. Ex:
let contador=1; //Crio a variável contador
contador++; //Faço o incremento ++ para adicionar +1 ao valor já existente
console.log(contador); //Resultado é 2.
++contador; //O ++ pode ficar tanto pós, quanto pré. Após incrementado o valor de contador=3.
//No pré ele primeiro soma e depois executa, no pós ele executa a ação e depois incrementa.
console.log(contador++); //3. Note que mesmo com o incremento ele mostra contador=3. (Essa forma não é uma boa prática de programação.)
//Porquê ele faz console.log(contador) primeiro e depois contador++, fazendo com que contador=4.
console.log(contador); //4. Neste caso só chamamos o contador pra visualizar que realmente contador++ incrementou +1 em contador depois de mostrar contador=3.
console.log(++contador); //5. Neste exemplo, o ++contador incrementa +1 em contador=4 e mostra já o valor novo (contador=5).
//Incremento pré ou pós só faz diferença se tiver outra ação na linha de código, se usado separado do console.log não faz diferença.
// -- = Descremento. Subtrai um ao valor já existente na variável.
let decontador=10;
console.log(--decontador); //decontador=9. Funciona da mesma forma que o incremento.
//Para incremento/decremento com intervalos maior que 1 uso:
let cont=0;
cont=cont+2; //Forma longa
console.log(cont); //(cont=2)
//Posso simplificar essa conta acima com os operadores de atribuição:
cont+=2; //forma abreviada (significa: cont=cont+2)
console.log(cont); //(cont=4)
cont*=2; //posso usar a forma abreviada com qualquer operador aritmético (significa: cont=cont*2)
console.log(cont); //(cont=8)

//Tipos de dados são importante pra essa conta para não dar erro NaN - Not a Number. Ex.:
const num4=10;
const num5='Gui';
console.log(num4*num5); // Resultado NaN
//Porém se a string contiver um número o JS tenta corrigir e converte essa string em número e faz a conta.
//Consigo converter string em number de 3 formas:
//1ª
const num6=10;
let num7=parseInt('5.2'); //O parseInt transforma uma String em um número inteiro (se tiver casa decimal ela some). Sem parseInt o resultado de num6+num7=105
console.log(num6+num7); //com parseInt 10+5=15.
console.log(typeof num7) //Tipo vira Number
//2ª
num7=parseFloat('5.2'); // O parseFloat já transforma a String em um número decimal.
console.log(num6+num7); //com parseFloat 10+5.2=15.2.
console.log(typeof num7) //Tipo vira Number
//3ª (Forma mais fácil)
num7=Number('5.2'); // Number já transforma a String em um número de qualquer forma que for necessária.
console.log(num6+num7); //com parseFloat 10+5.2=15.2.
console.log(typeof num7) //Tipo vira Number
//Pra isso funcionar a String não pode ter letra, apenas número e . (decimal).