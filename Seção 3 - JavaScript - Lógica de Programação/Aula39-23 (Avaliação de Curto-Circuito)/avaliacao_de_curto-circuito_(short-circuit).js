console.log('AVALIAÇÃO DE CURTO-CIRCUITO (SHORT-CIRCUIT)');
/*
&& -> Precisa que todas as expressões sejam verdadeiras para retornar true.
|| -> Precisa que todas as expressões sejam falsas para retornar false.
Portanto quando eu tenho muitas expressões, a partir do momento que eu tenho uma que contraria as regras acima, posso parar de analisar todas as outras.
Isso se chama avaliação de curto-circuito.
O JS tem a possibilidade de avaliar tudo com true ou false, mas não de forma literal:
Os valores que tem avaliação FALSY (que fingem ter valor false) são:
*false - forma literal
0
'' "" ``
null / undefined
NaN
*/
console.log('-> curto-circuito com &&:');
//Em avaliações de curto-circuito com &&, quando uma avaliação é false retorna o valor real da expressão false, caso nenhum valor seja FALSY retorna o valor da última expressão.
console.log('Gui' && 0 && 'Pli'); //Retorna 0 pq é um valor FALSY.

//Qualquer outro valor diferente dos de cima é avaliado como true.
console.log('Gui' && 'Pli'); //Retorna 'Pli', porque não tem valor FALSY.

console.log('-> exemplo simples de utilização do curto-circuito com &&:');
//Ex simples.:
function falaOi (nome) { //Tenho uma função que vai falar Oi quando o usuário fizer algo no sistema.
    return `Oi ${nome}!`;
}
let vaiExecutar=''; //Teria uma condição para executar a função, quando o usuário insere o nome dele, por exemplo.
console.log(vaiExecutar && falaOi(vaiExecutar)); //Sendo assim, se vaiExecutar for qualquer valor diferente de um FALSY ('' - nesse exemplo), ele executa a função falaOi, se não mudar o valor de vaiExecutar ele não vai mostrar nada.
vaiExecutar='Gui'; //quando modifico o valor da variável para um que não é FALSY
console.log(vaiExecutar && falaOi(vaiExecutar)); //Ele avalia vaiExecutar como true e mostra o valor da última expressão, executando a função.

console.log('-> curto-circuito com ||:');
//Em avaliações de curto-circuito com ||, quando uma avaliação é verdadeiro retorna o valor real da expressão, caso nenhum valor seja verdadeiro retorna o valor da última expressão.
console.log(0 || false || null || 'Gui' || true); //retorna 'Gui' porque OR precisa apenas uma expressão verdeira, então 'Gui' é a primeira expressão verdadeira e não quer saber mais do que vem depois, por isso retorna ela.

console.log('-> exemplo simples de utilização do curto-circuito com ||:');
//Tenho um site, onde o usuário pode escolher a cor do fundo, porém se ele não escolher eu mantenho uma cor padrão.
let corUsuario; //Sendo assim, crio uma variável sem valor para a cor do usuário
let corFundo = corUsuario || 'black'; //E uma variável da cor fundo que recebe o valor da cor inserida pelo usuário caso ela seja verdadeira ou recebe 'black' caso o usuário não selecione a cor.
console.log(corFundo); //retorna 'black' pq o usuário não definiu a cor e corUsuario=undefined.
corUsuario='red'; //Quando o usuário escolhe a cor do fundo
corFundo = corUsuario || 'black';
console.log(corFundo); //corFundo passa a retornar 'red' e não 'black'.
//Operador OR é muito utilizado para fazer avaliação de short-circuit, E já é menos utilizado.