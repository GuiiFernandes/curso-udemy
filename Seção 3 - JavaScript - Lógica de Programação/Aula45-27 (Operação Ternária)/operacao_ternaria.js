console.log('OPERAÇÃO TERNÁRIA:');
// Operador ternário pode substituir e encurtar parte do seu código onde você precise apenas de if e else.
//Os operadores são: ? e :

console.log('->Forma convencional if:');
//Um sistema que se o Usuário tem mais de 1000 pontos ele é considerado um usuário VIP, se não ele é Normal.
const pontuacaoUsuario = 999;
//A forma convencional de escrita é a abaixo:
if (pontuacaoUsuario>=1000) {
    console.log('Usuário VIP.');
} else {
    console.log('Usuário Normal.');
}

console.log('->Forma abreviada com Operação Ternária:');
//Para resumir isso, posso usar a operação ternária:
const pontuacaoUsuario2=1500;
const nivelUsuario = pontuacaoUsuario2>=1000 ? 'Usuário VIP.' : 'Usuário Normal.'; //Essa é uma operação ternária
// variável = (condição) ? 'Valor para verdadeiro' : 'Valor para Falso';
console.log(nivelUsuario);
//A Operação ternária ajuda para que façamos a mesma programação com um código mais curto.

console.log('->Fall back com ||:');
//
let corUsuario=null;
let corPadrao= corUsuario || 'Preto'; //Informalmente dizemos que estamos setando um valor padrão para uma variável.
//Eu checo a variável que pode ser modificada pelo usuário e se ela for nula, eu falo que 'Preto' é o valor padrão da minha variável.
//Essa variável sempre vai ter um valor seja o definido pelo usuário ou o padrão.
console.log(corPadrao); //note que corUsuario é null portanto, corPadrao recebe 'Preto'.
corUsuario='pink'; //quando o usuário modifica a corUsuário,
corPadrao= corUsuario || 'Preto' //corPadrao recebe corUsuario porquê ela não é mais um FALSY
console.log(corPadrao); //corPadrao retorna 'pink'.