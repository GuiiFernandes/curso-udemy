console.log('FUNÇÕES IMEDIATAS (IIFE)');

//IIFE -> Immediately Invoked Function Expression
//É uma expressão de função que é invocada imediatamente.
/*
 Quando trabalhamos no browser queremos fugir do escopo global.
 Para não gerar problemas ou confusões na hora de executar o código,
 para que outras bibliotecas não atrapalhem nossas funções ou que
 não pulua o escopo global com todas as funções e variáveis.
 */

//Para fugir o escopo global crio uma função no escopo global
function qualquerCoisa() {
    console.log(12332342);
    //Crio todo o meu código dentro dela
}
//Chamo ela fora no escopo global
qualquerCoisa(); //Isso vai fazer com que a função seja executada imediatamente.

//Mas dessa forma eu crio e nomeio uma função..
//E posso fazer isso de forma mais simples com uma função anônima.
//Escrevo uma função entre parênteses
(function() {
    console.log(344234234); //Escrevo todo o meu código dentro da função
})(); //Depois chamo minha função anonima logo depois dos parênteses.
//Então essa função é executada automaticamente e nada disso toca o escopo global

console.log('-> Protegendo variáveis com IIFE:');
//Sendo assim, eu posso criar a variável dentro da função IIFE
(function(){
    const nome='Gui Fernandes';
    console.log(nome);
})();
const nome='Pli Leal';
console.log(nome);
//Dessa forma nome mesmo sendo uma constante não é afetada estando dentro ou fora da função

console.log('->IIFE aplicado na prática:');
//Crio uma função imediata para proteger o escopo global e não sofrer influencia da variável nome='Pli Leal';
(function(idade, peso, altura){
    const sobrenome='Fernandes';
    //Criei uma variável sobrenome 
    function criaNome(nome) { //Criei uma função criaNome para unir nome ao sobrenome.
        return nome+' '+sobrenome
    }

    function falaNome() { //Crio a função falaNome para executar a criação do nome
        console.log(criaNome('Gui')); //Imprimo a função criaNome,
        //Isso vai criar o nome e retornar ele em console.log.
        console.log(idade,peso,altura); //Ainda posso passar parâmetros e falar argumentos para serem usados dentro da minha IIFE
    }

    falaNome(); //chamo falaNome para executa-la
})(30,75,1.69); //Executo minha função imediata no escopo global