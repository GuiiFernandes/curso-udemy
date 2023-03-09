console.log('SETINTERVAL E SETTIMEOUT:')

function mostraHora () { //crio uma função para mostrar a hora do sistema
    let data= new Date();
    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

console.log('->setInterval:');
//Para chamar o  setInterval não posso usar valores então tenho que criar uma função que exibe o return da função mostraHora e passá-la como referência (seu nome sem (), visto que o parêntese executa a função) ou criar uma função anonima no próprio setInterval (mais comum):
//Primeira forma:
/*
function funcaoDoInterval() {
    console.log(mostraHora());
}

setInterval(funcaoDoInterval, 1000); //setInterval (referência da função, tempo em milissegundo que quero que seja executada);
*/
const timer = setInterval(function() {console.log(mostraHora())}, 1000); //Neste caso criei a função funcaoDoInterval como uma função anônima dentro do setInterval.
//O setInterval vai executar uma ação de tempo em tempo.
//quando coloco uma função setInterval dentro de uma variável, posso usar a função setTimeout para limitar o tempo de execução da setInterval

setTimeout(function() {clearInterval(timer);}, 6000); //Crio uma função anônima e dentro dela chamo clearInterval(variável que atribui meu setInterval), e coloco o tempo que meu setInterval vai rodar (6000 milisegundos ou 6 segundos - vai mostrar 5 tempos na tela).

//Posso usar a setTimeout independente de setInterval também
setTimeout(function() {console.log('Olá mundo!');}, 8000);