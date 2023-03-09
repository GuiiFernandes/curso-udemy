console.log("PARÂMETROS DA FUNÇÃO:");
//No JS quando crio uma função sem parâmetros
function funcao() {
    console.log('Oie');
}
funcao('Valor', 1,2,3); //Mas atribuo argumento
//argumento é o nome dado ao valor inserido para suprir um parâmetro
//Nesse tipo de código, esperaria que houvesse um erro.
//Mas o JS aceita essa função e não retorna erro. Outras linguagens mais restritivas dão erro nesse tipo de código.

//Mas o que o JS faz com esses argumentos da função?

console.log("-> Arguments:");
//Arguments é uma variável especial que cria um objeto que vai armazenar/sustentar todos o argumentos atribuídos a uma função.
//Arguments só funciona em caso de Function Expression ou função clássica. Não funciona em Arrow Function
function funcao2() {
    console.log(arguments); //arguments é um objeto que recebe todos os argumentos atribuidos a função com o index ordenado do primeiro a esquerda com número 0.
    console.log(arguments[0]); //posso pegar o index de um argumento também.
}
funcao2('Valor', 1,2,3,4,'Gui','Pli');

//Trabalhar com o index dos argumentos é muito poderoso, pois me permite criar várias funções que operem com eles.
//crio a função que vai somar todos os argumentos da minha função.
function soma(a,b,c) { //mesmo eu passando os parâmetros arguments não muda em nada, apenas que a, b e c recebem os valores 1, 2 e 3 respectivamente..
    let total=0; //Atribuo um valor 0 ao total
    for (let argumento of arguments) { //para cada argumento (atributo do meu objeto) dentro do meu objeto arguments
        total += argumento; //somo o argumento ao total
    } //repito para todos os argumentos
    console.log(total); //retorno o total = 28
}
soma(1,2,3,4,5,6,7); //argumentos

console.log("-> Parâmetro sem valor:");
function valores(a,b,c,d,e,f) { //quando tenho mais parâmetros do que argumentos 
    console.log(a,b,c,d,e,f); //Minha variável retorna undefined
    //Isso acontece pq, assim como quando declaramos uma variável e não atribuímos valor, o JS cria a variável sem valor.
}
valores(1,2,3);

function soma2(a,b) { //quando tenho mais parâmetros do que argumentos 
    console.log(a+b); //E tento fazer uma operação com os parêmetros, o retorno é NaN
    //Nesse caso pq b = undefined. 2 + Undefined = NaN
}
soma2(2);

//Forma antiga de resolver esse problema.
function soma3(a,b) { //para resolver o problema de b, posso usar um curto circuito
    //b recebe b se não for FALSY OU 0.
    b= b || 4; //Se b for um FALSY, o valor é 4
    console.log(a+b); //agora meu retorno será 6
}
soma3(2);

//Forma mais moderna
function soma4(a,b=3,c=4) { //Adiciono um valor padrão para b e c
    //Porém atribui um argumento para b.
    console.log(a+b+c); //Portanto a soma fica 2+1+4
}
soma4(2,1); //O resultado vai ser 7.
soma4(6, undefined, 10); //A única forma de pular um patrâmetro e/ou usar seu valor padrão é atribuindo a ele como argumento o undefined.

console.log("-> Atribuição via desestruturação no parâmetro da função:");
function funcao3({nome, sobrenome, idade}) { //Posso receber um objeto, que tem as chaves nome, sobrenome e idade.
    //Isso vai usar os argumentos do meu objeto normalmente
    console.log(nome, sobrenome, idade); //E quero exibir os dados nessa função
}
const obj={nome: 'Gui', sobrenome: 'Fernandes', idade:30}; //Crio um objeto com os parâmetros necessários
funcao3(obj); //Chamo este objeto como parâmetro da minha função
//Poderia também ter criado um objeto literal dentro da chamada da função: funcao3({nome: 'Gui', sobrenome: 'Fernandes', idade:30});

//Posso fazer isso para array também.
function funcao4([v1,v2,v3]) { //Posso receber os valores do array como parâmetro.
    //Isso vai usar os argumentos do meu array normalmente
    console.log(v1, v2, v3); //E quero exibir os dados nessa função
}
funcao4(['Pli', 'Leal', 29]);

console.log("-> Rest Operator no parâmetro da função:");
//Suponhamos que eu queria receber um operador, um acumulador (valor inicial de soma) e varios números de argumentos
conta('+',0, 20, 30, 40, 50);
//Ao ínves de criar um array na hora de chamar minha função com os números e depois armazenar ele no parâmetro numeros
function conta(operador, acumulador, ...numeros){ //Rest operator tem que ser sempre o último parâmetro da função
    //Eu posso usar o rest para dizer 'Armazene o primeiro e segundo parâmetros em operador e acumulador e todo o resto em números
    console.log(operador, acumulador, numeros); //Isso simplifica meu trabalho
    for (let numero of numeros) { //Sendo assim eu posso iterar com for of o meu array criado no meu parâmetro
        console.log(numero);
        //Identifico meu operador e faço a conta conforme ele.
        if (operador === '+') acumulador+=numero;
        if (operador === '-') acumulador-=numero;
        if (operador === '/') acumulador/=numero;
        if (operador === '*') acumulador*=numero;
    }
    console.log(`A conta de ${operador} dos ${numeros} é ${acumulador}`);
}

console.log("-> Arguments não pode ser usado em Arrow Function:");
//Posso usar arguments em uma function expression
const conta2= function (operador, acumulador, ...numeros) {
    //Chamo meus argumentos e eles estão armazenados normalmente.
    console.log(arguments);
    //Mesmo atribuindo os argumentos a parâmetros eu consigo acessar meus argumentos.
};
conta2('+', 0, 3, 6, 9, 12);

//Porém se eu tentasse fazer essa function como arrow:
const conta3= (operador, acumulador, ...numeros) => {
    //console.log(arguments);
    //(E chamasse meu arguments dentro da função. Eu teria um erro, pois arrow functions não armazena arguments.)
    //Porém eu poderia trabalhar com a função normalmente
    console.log(operador, acumulador, numeros);
};
conta3('+', 0, 5, 10, 13, 20);

console.log("-> Rest Operator para fazer função de Arguments em Arrow Function:");
//arguments foi uma coisa "mal feita", em versões antigas do JS
//Como as ArrowFunction não aceitam arguments,
const conta4= (...argumentos) => { //Lembre que arguments é uma palavra reservada
    //Eu posso fazer a mesma coisa usando o rest jogando todos os argumentos em um único parâmetro argumento
    console.log(argumentos);
    //E depois exibir esses argumentos em array, muito similar a arguments.
};
conta4('+', 0, 4, 8, 12, 16);

//Rest funciona em qualquer tipo de função
//Portanto se eu precisar enviar um número indeterminados de argumentos para uma função o uso dele é mais indicado.