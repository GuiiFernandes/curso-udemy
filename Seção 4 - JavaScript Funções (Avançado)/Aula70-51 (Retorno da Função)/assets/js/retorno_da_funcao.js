console.log('->RETORNO DA FUNÇÃO:');

//return retorna o valor de uma função e termina ela

function soma1(a, b) {
    return a+b; //return serve para retornar algo onde a função foi chamada
}

console.log('->Função com return:');
let s1=soma1(5,7); //Assim eu posso armazenar o retorno da minha função dentro de uma variável
console.log('soma1:',s1); //E posso usá-lo como for melhor pra mim..

console.log('->Função sem return:');
// neste outro exemplo de função, eu não retorno nada, apenas peço para a função exibir a soma de a + b
function soma2(a,b) {
    console.log('console.log soma2:', a+b);
}
//Quando eu chamar essa função ela vai exibir o resultado da minha soma por conta do console.log
s1=soma2(5,7); //Mas o valor da soma não é armazenado na variável, pq não usei o return.
console.log('soma2:',s1); //s1=undefined
//No exemplo acima, mesmo soma2 mostrando o mesmo
//Funções que não retornam nada podem ser úteis em casos de ações, como por exemplo, a função alert() que faz aparecer algo na tela.
//Ou a função que não retorna, mas faz algo útil seria:

console.log('->Função sem return útil:');
document.addEventListener('click', mudaCor); //Nesse caso eu capturo o evento de clique e executo uma função que não retorna nada.
function mudaCor() { // Essa função pode ser feita como função anônima dentro do addEventListener
    document.body.style.backgroundColor = 'green'; //Essa função muda a cor do fundo quando eu clicar em algum lugar na página.
} //Ela é uma função útil, porém que não retorna nada.

console.log('->Função com return útil:');
//Crio uma função que cria uma pessoa e retorna um objeto com as chaves nome, sobrenome e idade
function criaPessoa(nome, sobrenome, idade) {
    return {nome,sobrenome,idade}; //Na função isso é o mesmo que {nome: nome, sobrenome: sobrenome, idade: idade},
    //Mas como as chaves tem o mesmo nome dos parâmetros, não preciso repetir o nome com :
}
const p1=criaPessoa('Gui', 'Fernandes', 30); //A função facilita a criação rápida de quantas pessoas eu precisar
console.log(p1);
const p2= {
    nome: 'Pli',
    sobrenome: 'Leal',
    idade: 29
}
console.log(p2); //Ambas tem o mesmo efeito, mas a primeira me facilita não tendo que escrever o mesmo objeto para cada pessoa que eu criar.
//Posso usar minha função para criar os objetos pra mim.

console.log('->Função que retorna outra função:');
//O JS nos permite retornar uma função sem executá-la
function falaFrase(comeco) { //Nesse caso eu tenho a função externa falaFrase que retorna a função interna falaResto
    function falaResto (resto) { //falaResto é uma função protegida dentro de falaFrase.
        return comeco + ' ' + resto; //Quando tenho uma função dentro de outra, eu consigo usar os parâmentros da externa na interna.
    }
    return falaResto; //Retorno a função sem ()
}
const olaMundo = falaFrase('Olá'); // Como eu retorno uma função dentro de falaFrase o que vai ser armazenado em olaMundo e a função interna.
//'Olá' vira o valor do meu parâmetro comeco da função armazenada em olaMundo.
console.log(olaMundo); //[function: falaResto]
//Isso significa que olaMundo é a função (falaResto), que recebe um parâmentro.
console.log(olaMundo('mundo!')); //Assumindo 'Olá' como o parâmetro começo e 'mundo!' como o parâmetro resto. Eu executo falaResto e retorno "comeco + ' ' + resto".
//Teria o mesmo efeito se eu escrevesse:
const fala= falaFrase('Oi,'); //Armazeno o que retorna de falaFrase (função resto) com parâmetro comeco="Oi," e armazeno dentro da variável fala.
const resto= fala('tudo bem?'); //Como o retorno é uma função, e já armazenei ela junto com o valor do parâmetro em fala. 
//Eu chamo fala(resto) 'fala com parâmetro resto' e armazeno o seu return dentro da variável resto.
console.log(resto); //Nesse caso executo falaResto e exibo o seu return (Oi, tudo bem? - "comeco + ' ' + resto")

console.log('->Forma útil de função que retorna outra função:');
//Crio uma função que duplica um número
function duplica(n){
    return n*2;
}
//outra que triplica um número
function triplica(n){
    return n*3;
}
//outra que quadriplica um número
function quadriplica(n){
    return n*4;
}
console.log(`resultado forma comum: duplica: ${duplica(2)}, triplica: ${triplica(2)}, quadriplica: ${quadriplica(2)}`); //Exibo o resultado de duplicar, triplica e quadriplica com o número 2.
//É uma função simples, porém com um código extenso e repetido...

//com a função dentro de outra eu simplifico minha vida:
function criaMultiplicador(mult) { //Cri a função que vai criar o meu multiplicador recebendo o parâmetro mult
    return function(n) { //retorno uma função anonima que vai ter o parâmetro n, essa é uma forma mais rápida de fazer uma função retornar outra
        return n*mult; // multiplico o número (n) x o multiplicador (mult)
    };
}
//Depois de retornar a função eu crio a partir de criaMultiplicador as funções que vão duplicar, triplicar e quadriplicar meu valor.
//Essa função é chamada de função closer (criada a partir de outra função)
const duplica1 = criaMultiplicador(2); //criaMultiplicador armazenado em duplica1 com parâmetro dois significa que:
//transformo duplica1 na função anônima dentro de criaMultiplicador com o parâmetro mult=2;
const triplica1 = criaMultiplicador(3); //transformo triplica1 na função anônima dentro de criaMultiplicador com o parâmetro mult=3;
const quadriplica1 = criaMultiplicador(4); //transformo quadriplica1 na função anônima dentro de criaMultiplicador com o parâmetro mult=4;
//para fazer as multiplicações basta chamar minha variáveis (que viraram são função) com o parametro número (n).
console.log(`resultado função que retorna função: duplica: ${duplica1(2)}, triplica: ${triplica1(2)}, quadriplica: ${quadriplica1(2)}`);
//O resultado vai ser igual da forma anterior.