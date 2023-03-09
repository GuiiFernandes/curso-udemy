/*
Quando temos um texto com vários nomes repetidos podemos usar vaviáveis para usar uma mesma sentença para vários casos.
No texto:
"João nasceu em 1984.
Em 2000 João conheceu Maria.
João casou-se com Maria em 2012.
Maria teve um filho com João em 2015.
O filho de João se chama Eduardo."
Temos o nome joão repetido várias vezes, por isso podemos colocar João em uma variável e toda vez que precisarmos, chamamos a variável para expressar João.
*/
let nome = 'João'; //String
//Podemos usar var para criar variável também, mas é um jeito mais antigo.

console.log(nome, `nasceu em 1984.`);
console.log(`Em 2000`, nome, `conheceu Maria.`);
console.log(nome, `casou-se com Maria em 2012.`);
console.log(`Maria teve um filho com`, nome, `em 2015.`);
console.log(`O filho de`, nome, `se chama Eduardo.`);

let nome2; //Posso chamar uma variável e não especificar uma variável para ela.
// Isso vai reservar o nome da variável, mas vai dar a ela um valor indefinido "undefined".
nome2 = 'Qualquer valor'; //Assim eu inicializo minha variável
// Em vários momentos pode ser interessante, definir a variável, para depois atribuir um valor a ela.
console.log(nome2);
nome2 = 'Outro valor'; //Posso mudar o valor da variável e
console.log(nome2); //E chamar ela novamente com o novo valor.
//Porém se eu declar a variável novamente "let nome2;" aparece um erro de syntax.

//Não podemos declarar variáveis com palavras reservadas: Por exemplo, "let console;". Isso gera um erro e para a leitura do código.
//Variáveis precisam ter nomes significativos. Exemplo, se a variável representa o nome de um cliente podemos chamar a variável de "let nomeCliente;".
//Não podemos começar o nome de uma variável com número. Exemplo, "let 1num". Dá erro. Usar letra minúscula ajuda.
//Não podem conter espaço ou traço. Exemplo, "let nome-cliente;" gera erro.
//Para nome composto usamos camelCase, iniciamos a primeira palavra com letra minúscula e as demais com letra maíuscula.
//Variáveis são Case-sensitive, portanto usar letra maíuscula ou minúscula faz diferença.
//Não podemos redeclarar variáveis com let
//PARA DECLARAR UMA VARIÁVEL UTILIZE LET E NÃO VAR.