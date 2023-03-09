//OPERADORES LÓGICOS
console.log('OPERADORES LÓGICOS:');
/*
&& - AND - E (Todas as expressões precisam ser verdadeiras para retornar true.)
|| - OR - OU
! - NOT - NÃO
*/

console.log('-> &&:');
console.log(true && true); //O && serve para dizer que só vai retornar verdadeiro se todas as expressões forem verdadeiras.
console.log(true && true && true); //Pode ter quantas condições eu quiser
console.log(true && true && true && false); //Quando uma condição é falsa, meu retorno é falso.

console.log('-> ||:');
const dinheiro=true; //Nesse caso criei várias variáveis que recebem o valor da minha expressão (Tenho dinheiro? R: True)
const sol=false; //(Tem sol? R: false)
const roupa= false; //(Tenho Roupa pra sair? R: True)
const carro= true; //(Tenho carro? R: False) 
const expressaoOr1 = sol || carro; //No caso do OU, se uma das expressões forem verdadeiras já retorna true.
console.log(expressaoOr1);
const expressaoOr2 = dinheiro || carro; //Se todas forem verdadeiras retorna true.
console.log(expressaoOr2);
const expressaoOr3 = roupa || sol; //Se todas forem verdadeiras retorna true.
console.log(expressaoOr3); //Só vai retornar false se todas as expressões forem false.

console.log('-> Operadores de comparação e lógicos na prática (forma simples):');
const login='Gui'; //Informação do campo preenchido pelo usuário
const senha='123456'; //Informação do campo preenchido pelo usuário

const validLogin=login==='Gui'; //'Gui' é o login salvo no banco de dados que vai ser comparado com o campo preenchido pelo usuário
console.log(validLogin); //Retorna true, pq o usuário digitou o login correto.
const validSenha=senha==='654321'; //'654321' é a senha salva no banco de dados e será comparado com o que foi preenchido pelo usuário
console.log(validSenha); //Retorna false, pq o usuário digitou a senha diferente.
const entrar=validLogin && validSenha; // Se login e senha forem validados (retornar true), entrar recebe true e o usuário acessa o sistema.
console.log(entrar); //Como a senha foi digitada errada, retorna false. Podemos criar uma mensagem de alert quando o envio não for válido..

//De forma resumida isso seria escrito:
const vaiLogar= login=='Gui' && senha=='123456'; //Dessa vez retorna True para vai logar, pois os dois campos digitados estão corretos.
console.log(vaiLogar);

console.log('-> !:');
//Operador de negação. Inverte a expressão.
console.log(!false); //Quando eu nego false, retorna seu inverso.
//Posso negar mais de uma vez e ter !!false = false -> primeiro ele nega false, vira true, aí ele nega true e volta a ser false.
//Se eu tentar colocar !!!false ele automaticamente deixa só !false, porque ambos são a mesma coisa.