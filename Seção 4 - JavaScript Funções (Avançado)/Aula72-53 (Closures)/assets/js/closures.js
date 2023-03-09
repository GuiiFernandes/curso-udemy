console.log('CLOSURES');
//Está muito relacionado ao escopo léxico da função

function retornaFuncao() { //Crio uma função que vai retornar outra
    const nome='Gui'; //crio uma variável dentro do escopo dela
    return function(){ //retorno uma função anonima
        return nome; //que retorna o valor de uma variável nome.
    };
}

const funcao = retornaFuncao(); //atribuo a variável função o retorno (função anônima) de retornaFuncao
console.dir(funcao); //dir é um outro método de console que não muda nada no NodeJs, mas no navegador vai nos permitir ver a fundo uma função.
//No navegador, O Otavio viu em a função anônima tem [[Scopes]]: Scopes[3]. Mas no meu navegador não achei.
//Isso indica que a função anônima está em 3 escopos. Função anônima > retornaFuncao > Escopo Global

//closures é a habilidade da função de acessar seu escopo lexico.
//Neste caso o closure, está em retornaFuncao pq acho o valor da minha variável nele fechando o escopo..
//Mas ela também tem acesso ao Script que são as funções vizinhas
//E ao escopo global, tendo acesso a tudo que está dentro de window.

console.log('-> Closure no parâmetro da função');
function retornaFuncao2(nome) { //Crio uma função com o parâmetro nome que vai retornar outra
    return function(){ //retorno uma função anonima
        return nome; //que retorna o valor de uma variável nome.
    };
}
const funcao1 = retornaFuncao2('Pli'); //Quando eu crio uma função e atribuo um valor ao parâmetro nome, eu fecho meu escopo com o valor de nome='Pli'
//Assim meu closure vira o escopo do parâmetro da função.
const funcao2 = retornaFuncao2('Leal');
//Quando eu mudo o valor do parâmetro, o closure continua no mesmo lugar, mas ela fecha o escopo com nome='Leal'.
//Nesse caso mudamos o contexto lexico da função, mudando o valor da variável.
console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(),funcao2());
//Assim quando eu executar a função o nome vai receber o valor atribuido a ele no closure.
//Resumindo: closure é habilidade que a função tem de acessar o seu escopo lexico.