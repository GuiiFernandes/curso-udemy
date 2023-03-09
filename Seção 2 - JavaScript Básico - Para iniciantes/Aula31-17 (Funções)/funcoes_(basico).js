console.log('FUNÇÕES:');
//Funções executam ações, você inseri um valor nela e ela retorna, ou não, um valor.
// Para se criar uma função eu uso function nomeDaFuncao(parâmetros) {*as chaves serve para escrever o que a função vai fazer}
console.log('-> Declaração clássica de função:');
function saudacao(nome) { //O parametro indica uma variável que vai vir do código para alimentar a função
    //Tudo que está dentro das chaves de um função está protegido, pertence a função e não podem ser acessadas de fora dela.
    console.log(`Bom dia ${nome}!`); //crio uma função que mostra no console uma frase.
    return 123456; //Return é necessário para que uma função retorne algo, se não tiver return a função será executada, mas ao tentar atribuir o resultado da função a uma variável, o valor será undefined.
} //função não precisa de ";", exceto em duas ocasiões.*
//Para chamar a função uso o nomeDaFuncao(), o parentese é essencial para paramêtros e para dizer que a função será executada.
let nome='Guilherme'; //Posso criar a variável nome que pode receber uma inserção de dado.
saudacao(nome); //É isso que executa o que está dentro da minha função.
//A variável nome dentro do parentese é o parametro que vai alimentar a execução da função.
//A função é reutilizável.
saudacao('Pli');

console.log('-> Return');
function saudacao2(nome) {
    console.log(`Bom dia ${nome}!`); //crio uma função que mostra no console uma frase.
    return 123456; //Return marca o fim da função, nada que for escrito abaixo de return é executado.
    console.log(`Olá mundo`); //Esse código não é executado.
}
const variavel = saudacao2('Gui'); //Posso armazenar o resultado de uma função dentro de uma variável.
console.log(variavel); //Sem o Return o Bom dia será mostrado porquê é parte da função, mas é o return que faz a variável exibir 123456 no console.log.
console.log('-> Return - Forma correta');
//A forma correta de fazer a função acima é:
function saudacao3(nome) {
    return `Bom dia ${nome}!`; //A função retorna a String
}
const variavel2 = saudacao3('Bruce'); //Armazeno o resultado de uma função dentro de uma variável.
console.log(variavel2); //Agora a minha variável recebeu o valor de return e mostra a frase de forma correta.

console.log('-> Funcao soma');
function soma(num1=1,num2=2) { //Neste exemplo tenho dois parâmetros, que eu digo serem iguais a 1 e 2, caso não venha algum dado externo para ser o seu parâmetro.
    const resultado=num1+num2 //Crio uma constante que soma os dois números recebidos do parâmetro
    return resultado //Retorno o resultado
}
const a=2; //Crio uma const que pode receber um valor que pode ser inserido pelo usuário
const b=3; //Crio outra const que pode receber um valor que pode ser inserido pelo usuário
console.log(soma(a,b)); //Exibo na tela o return da função.
console.log(soma()); //Retorna NaN porquê a função não insere parâmetros, então num1 e num2 é undefined.
//Como eu disse na função que num1=1 e num2=2 e não inseri um parâmetro o valor vai ser 3.
console.log(soma(4)); // Quando mando só um parâmetro, vou dizer que o valor 4 é para ser atribuido ao primeiro parâmetro (num1) e portanto num2 recebe o valor dado na função (2). Resultado=6
console.log(soma('Guilherme ', 'Fernandes')); //Quando recebe Strings essa função vai concatenar.
//Funções é interessante pois um programa é uma junção de funções que conversam entre si e formam um sistema.
/*
Uma função é um corpo independente dentro de uma linha de código.
Portanto, tudo que for declarado ou feito dentro dela não influencia o fluxo natural do código.
Posso redeclarar constante no código prinpal que já foi declarada dentro de uma função.
Não consigo acessar variáveis que estão declaradas apenas na função.
etc..
*/

console.log('-> Funcao dentro de variável:');
const raiz2=function (n) { //Isso é uma função anônima.
    return n**0.5;
}; //*Quando atribuo uma função a uma variável é a única forma de expressar uma função que precisa finalizar com ";".
console.log(raiz2(9)); //O modo de uso é igual, a única diferença é a forma que criamos.

console.log('-> Funcao "Arrow Function":');
const raiz3= (n) => { //É a forma mais moderna e recebe esse nome por conta do símbolo "=>" que parece uma flecha.
    return n**(1/3);
}; //*Quando atribuo uma função a uma variável é a única forma de expressar uma função que precisa finalizar com ";".
console.log(raiz3(8));

console.log('-> Funcao "Arrow Function" abreviada:');
//Arrow function veio para facilitar a vida do programador e essa função poderia ser escrita simplesmente com:
const potenciaQuadrado= n => n**2; //Elimino (), {} e return.
console.log(potenciaQuadrado(3)); //9

//Geralmente é recomendado que uma função tenha só uma especialidade, faça uma função específica.