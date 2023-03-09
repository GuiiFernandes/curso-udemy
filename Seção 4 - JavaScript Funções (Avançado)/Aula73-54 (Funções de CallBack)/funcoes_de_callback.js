console.log('FUNÇÕES DE CALLBACK:')
//São funções executadas quando uma ação ocorre
function f1(){ //Crio 3 funções que vão monstrar algo no meu console.
    console.log('f1');
}
function f2(){
    console.log('f2');
}
function f3(){
    console.log('f3');
}
//Quando eu as chamar será executado em ordem f1, f2 e f3.
f1();
f2();
f3();
console.log('Olá mundo!');
//O problema é que quando trabalhamos na web, temos várias ações que podem demandar tempos diferentes de processamento.
//Nesse caso, temos funções de callback (exemplo abaixo)
console.log('-> Exemplo Funções de Callback:');
function a1(){ //Crio 3 funções com setTimeout que vão monstrar algo no meu console quando o tempo determinado esgotar.
    setTimeout(function(){ //a1 configurei para mostrar com 500 milisegundos
        console.log('a1');
    }, 5);
}
function a2(){
    setTimeout(function(){ //a2 com 1000 milisegundos (1 segundo)
        console.log('a2');
    }, 10);
}
function a3(){
    setTimeout(function(){ //a3 com 800 milisegundos
        console.log('a3');
    }, 8);
}
//Quando eu as chamar as funções a odem de exibição na tela muda. Será exibido:
a1(); //2º
a2(); //4º
a3(); //3º
console.log('Olá mundo!'); //1º

setTimeout(function(){
    console.log('-> Funções de Callback em ordem aleatória:');
},11);
//primeiro crio a função que vai criar o tempo aleatório de impressão do dado.
function rand(min=15, max=20) { //random com tempo entre 1000 ms (1 seg) e 3000 ms (3 seg)
    const num=Math.random()*(max-min)+min; //randon dá um número entre 0 e 1, multiplico pela subtração de maximo com mínimo
    return Math.floor(num); //.floor arredonda o número para baixo.
    //O prof colocou, mas é desnecessário visto que max-min*random() sempre vai dar um número inteiro.
}
//Com a função random atribuida ao tempo de setTimeout nunca vamos saber o que vai ser impresso primeiro, exceto 'Olá mundo!'. Que sempre vai ser o primeiro.
function b1(){
    setTimeout(function(){
        console.log('b1');
    }, rand()); //substituo o tempo pela função rand() para poder deixar a exibição em tempo aleatório
}
function b2(){
    setTimeout(function(){
        console.log('b2');
    }, rand());
}
function b3(){
    setTimeout(function(){
        console.log('b3');
    }, rand());
}
//A cada vez que eu chamar as funções, a odem de exibição na tela será aleátoria. Exceto por 'Olá mundo!', que está configurada pra exibir primeiro.
b1();
b2();
b3();
setTimeout(function(){
    console.log('Olá mundo!');
},11);

setTimeout(function(){
    console.log('-> Usando o callback para ordenar processos:');
},21);
//Para resolver esse problema de exibição/execução posso usar o que chamamos de função de Callback
function c1(callback){ //para isso basta atribuir uma variável callback que vai receber a próxima função a ser executada
    setTimeout(function(){
        console.log('c1');
        if (callback) callback(); //Aí eu verifico se existe algo em callback
        //Se existir eu executo o que estiver em callback
    }, rand(25, 30));
}
function c2(callback){
    setTimeout(function(){
        console.log('c2');
        if (callback) callback();
    }, rand(25, 30));
}
function c3(callback){
    setTimeout(function(){
        console.log('c3');
        if (callback) callback();
    }, rand(25, 30));
}
//Sendo assim, se eu quiser que minhas funções sejam executadas na ordem: c1, c2, c3 e 'Olá Mundo!' basta que:
c1(function() { //Chamo minha função c1 e dentro do seu parâmentro crio uma função anônima que vai chamar c2
    //Quando eu entrar em c1, meu sistema vai verificar se meu callback existe e se tiver uma função armazenada nele vai executá-la
    c2(function(){ //Assim c2 é executado logo após imprimir c1.
        //Faço o mesmo dentro de c2, vou criar uma função dentro de que vai chamar c3
        c3(function(){ //E assim sucessivamente
            console.log('Olá Mundo!'); //Até o fim, quando imprimo 'Olá Mundo!'
            //Assim eu crio uma corrente que onde c3 nunca será executado antes de c2 e c1. Isso é chamado de callback Hell.
        });
    });
});

setTimeout(function(){
    console.log('-> Utilizando Callback sem criar callback Hell ou árvore de natal:');
},99);
//Com o callback Hell posso criar infinitos callback criando uma corrente infinita, vulgo arvoré de natal.
//Para não criar essa árvore podemos usar o Callback da seguinte forma:
function d1(callback){
    setTimeout(function(){
        console.log('d1');
        if (callback) callback();
    }, rand(100, 150));
}
function d2(callback){
    setTimeout(function(){
        console.log('d2');
        if (callback) callback();
    }, rand(100, 150));
}
function d3(callback){
    setTimeout(function(){
        console.log('d3');
        if (callback) callback();
    }, rand(100, 150));
}

d1(d1Callback); //Chamo c1 e atribuo uma função c1Callback que vai chamar minha função c2.
//para chamar d1Callback não preciso dos () depois do nome da função.
function d1Callback() { //crio minha função c1Callback
    d2(d2Callback); //E dentro dela chamo minha função c2 com o parâmetro de uma nova função que vai chamar meu c3
}

function d2Callback(){ //Faço isso novamente
    d3(d3Callback);
}

function d3Callback(){ //Crio uma função final que vai chamar meu 'olá mundo!'
    console.log('Olá mundo!');
}
//Essa forma tem um resultado idêntico da anterior porém sem criar uma callback Hell ou árvore de natal.