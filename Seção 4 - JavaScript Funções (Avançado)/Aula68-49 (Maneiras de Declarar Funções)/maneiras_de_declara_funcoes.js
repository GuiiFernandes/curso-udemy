console.log('MANEIRAS DE DECLARAR FUNÇÕES:');
console.log('-> Function Hoisting:');
falaOi(); //Apenas com a função literal você pode chamar a função antes de criá-la.
//Isso ocorre por conta do Function Hoisting, que assim como var e let, eleva a função para o início do JS
//Declaração de função literal, normal ou clássica
function falaOi() {
    console.log('Oi');
}
falaOi(); //Também pode ser chamada depois.

console.log('-> Function Expression:');
//Funções são First-class objects (Objetos de primeira classe) = Pode ser tratadas como dado
//assim como:
const nome= 'Gui';
const sobrenome='Fernandes';
console.log('nome');
//podemos armazenar uma função em uma variável, o que torna a variável uma função, isso chama Function Expression:
const falaOi2= function(nome,sobrenome) { //Em Function Expression, geralmente usamos funções anônimas, mas o nome da função também pode ser expressado, porém é pouco visto pq tem pouca utilidade. const falaOi2= function nomeFunc (nome,sobrenome) {};
    console.log(`Seu nome é ${nome} ${sobrenome}?`);
    return `Oi ${nome} ${sobrenome}!`;
}; //Neste caso será executado o que for mandado dentro da função e o seu retorno é armazenado na variável.
console.log(falaOi2(nome,sobrenome)); //Sendo assim, minha variável recebe uma função e portanto passa a ser uma função.

console.log('-> Função como parâmetro de outra função (Function First-class objects):');
//Ao saber que funções são First-class objects e que ela formam Function Expression, temos uma arma poderosa em mãos que é usar uma função de parâmetro de outra função:
function perguntaIdade (funcao) { //Nesse caso vou receber uma função como parâmetro
    const nome='Pli';
    const sobrenome= 'Leal';
    const oi= funcao(nome,sobrenome); //E chamá-la dentro da minha função usando o nome dos parâmetros e inserindo os parâmetros necessários para ela.
    //Como a função retorna algo, se eu não armazená-la dentro de uma variável o seu retorno não será visto.
    console.log(oi); //console.log para exibir o retorno da função parâmetro
    console.log(`${nome}, qual sua idade?`); //Ação da função perguntaIdade que será executada normalmente.
};
perguntaIdade(falaOi2); //Ao chamar a função perguntaIdade coloco em parêntese a função que eu quero que seja parâmetro, porém sem os parênteses tradicionais de função.
//Por essa usabilidade da função como um dado natural, ela é chamada de First class object.
//Quando uso setInterval(function(){}, 1000); estou  usando a função anonima function() como dado.

console.log('-> Arrow function:');
//Forma abreviada de uma função:
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
//Gera diferença da função clássica quando usada com this. 
funcaoArrow();

console.log('-> Function dentro de Objeto:');
const obj = { //crio objeto
    //a forma clássica é criar o atributo e depois de ":" declarar a função
    falar: function() {
        console.log('Vamos fazer seu cadastro?');
    },
    //Ou posso fazer da forma mais moderna que é atribuir a função direto ao atributo
    perguntaNome() {
        console.log('Qual o seu nome?');
    }
};

obj.falar(); //Como a função é o atributo de um objeto, chamo objeto.função(parâmetros);
obj.perguntaNome(); //o nome da função é o nome do atributo.