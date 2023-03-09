//ECMAScript 2015 (ES6) = É uma padronização da linguagem JavaScript criada pela empresa ECMA Internectional.

//var permite que você redeclare uma variável infinitas vezes, enquanto let apenas uma. Ex:
var nome='Guilherme'; //Declarei a variável com var
var nome='Gui'; // Redeclarei a variável

console.log(nome); //Não deu erro.

nome2='Pli'; //Isso funciona, cria uma variável global.
//Porém essa variável pode afetar outras variáveis do seu sistema. Por isso
//NUNCA FAÇA ISSO!
console.log(nome2);

let nome3='Meggye'; //Declarei a variável com let
//let nome3='Bruce'; //Redeclarei a variável
nome3='Bruce'; //FORMA CORRETA DE MUDAR O VALOR DE UMA VARIÁVEL.
console.log(nome3); //Gerou um erro.