/*
Os tipos de dados em Java são divididos em duas categorias: Tipos Primitivos e Tipos de Referência.
Uma variável de tipo primitivo armazena exatamente um valor de seu tipo declarado por vez. Quando um outro valor é atribuído a uma dessas variáveis, seu valor anterior é substituído.
São primitivas as variáveis do tipo String, Number, Undifined, null, Boolean e Symbol (a última é mais avançada e vamos falar posteriormente.)
*/

//String = Texto
const nome='Gui'; //String pode ser declarado com aspas simples
console.log(typeof nome, nome);
const nome2="GuiGui"; //Aspas dupla ou
console.log(typeof nome2, nome2);
const nome3=`Guilherme`; //crase. Com crase podemos usar as templates strings (Vimos no exercício da Aula16-8).
console.log(typeof nome3, nome3);

//Number = Número
const num1=10; //Número inteiro,
console.log(typeof num1, num1);
const num2=10.52; //Número com ponto flutuante é um número decimal.
console.log(typeof num2, num2);

//Undefined = Indefinido (Não aponta para local nenhum na memória.)
let nomeAluno; //Quando declaro uma variável e não defino valor, ela recebe o tipo como indefinido.
console.log(typeof nomeAluno, nomeAluno);

//Null = Tipo Nulo (Não aponta para local nenhum na memória.)
const sobrenomeAluno=null; //null sem aspas ou crase e escrito minúsculos representa valor nulo, portanto define a variável como do tipo nulo.
//Útil para desconfigurar uma variável.
console.log(typeof sobrenomeAluno, sobrenomeAluno); //No null, o typeof aparece object. Mas vamos ver mais a frente que isso é um bug e null não é considerado object.
//A diferença de null e Undefined é que null é a forma explicita de dizer que a variável não deve apontar para um local na memória. Já Undefined é uma forma do JavaScript não apontar um local na memória para uma variável que ainda não recebeu valor.
//Portanto, eu como programador uso null para dar valor nulo para uma variável.

//Boolean = Valor Lógico (Serve para fazer valores lógicos ou desvios condicionais de programação.)
const aprovado=false; //Pode receber apenas verdadeiro (True) ou falso (False) como valor.
console.log(typeof aprovado, aprovado);

/*
Variáveis do tipo de referência estão interligadas na memória, portanto alterar o valor de uma pode influenciar na outra.
Já nas do tipo primitivo cada variável recebe seu valor e modificar uma não influencia na outra, conforme exemplos abaixo.
*/
//->Operando variável do tipo de referência:
const a = [1,2]; //Crio uma constante do tipo array (variável do tipo de referência)
const b = a; //Crio uma outra variável que recebe o valor de a com o operador de atribuição (=).
console.log(a,b); //Note que a=[1,2] e b=[1,2].
b.push(3); //Adiciono o número 3 ao array b, o que deveria deixar a=[1,2] e b=[1,2,3].
console.log(a,b); //Mas não é o que acontece visto que b tem referência em a (estão no mesmo lugar na memória), modificar b também muda a.
//resultado final a=[1,2,3] e b=[1,2,3]. Ou seja, nessa programação eu disse que:
/*
Criei uma variável a, criei um valor na memória para a.
Criei uma variável b, fiz b apontar para o mesmo valor que a aponta na memória.
Portanto, a e b apontam para o mesmo lugar na memória e tudo que eu modificar em b ou a vai modificar no outro.
*/
//->Operando variável do tipo primitivo:
let c=2; //Crio a variável c e atribuo o valor 2 a ela.
const d=c; //Crio a variável d e atribuo o mesmo valor de c a ela (ou seja, crio uma cópia)
console.log(c,d); //c=2 e d=2
c=3; //Quando eu atribuo um valor diferente para c o meu d continua com o valor de 2, pois os valores estão em locais diferentes na memória
console.log(c,d); //c=3 e d=2
/*
Note que com tipo primitivo as variáveis são independentes, portanto d recebeu o valor de c no momento que o mesmo valia 2 e portanto mudar o valor de c posteriormente não altera o valor de d, que continua 2.
*/
