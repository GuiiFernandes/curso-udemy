console.log('TRATANDO E LANÇANDO ERROS (TRY, CATCH, THROW):');
//Quando preciso usar um código potencialmente perigoso para ocorre um erro no meu programa, posso escrevê-lo dentro de um o bloco Try.
//O bloco Tray vai tentar executar o código e se retornar erro ele vai executar o que for pedido no catch.

try { //Insiro o código potencialmente perigoso em try
    console.log(variavel); //A variável não existe, portanto isso retorna um erro.
    //quando temos um erro, temos várias informações como onde foi o erro (linha de prog), o que foi o erro e vários outros dados.
} catch(err) { //Armazeno o erro com catch em uma variável com nome 'erro'
    console.log('ERRO!'); //Faço uma ação quando o código gera um erro.
    //as ações podem ser tratar o erro, criar uma variável ou etc...
    //Posso mostrar o erro com console.log(erro), mas isso nunca pode ser feito na prática!
    //Não posso exibir os erros internos do programa para o usuário, além de piorar a experiência é potencialmente perigoso.
    //essa variável erro armazena todos os dados do erro completo e pode adicioná-los em um .txt (arquivo de log) ou base de dados
}

console.log('-> Lançando o erro de forma simples:');
function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.'); //Throw vai lançar um erro.
        //Quando lanço um erro nada mais da função é executado.
    }
    return x+y;
}

try {
    console.log(soma(1,2)); //O que não tem erro dentro do try vai ser executado normalmente.
    console.log(soma('1',2));
} catch (error) {
    console.log(error); //Mostra apenas o texto colocado no throw pq eu lancei uma String e não o erro em si.
}
//Para lançar o erro mesmo faço:

console.log('-> Lançando o Erro com função construtora:');

function soma2(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.'); //Throw + função contrutora do próprio JS.
        //Posso usar classes de funções construtoras prontas como Error ou ReferenceError e posso criar a minha própria classe de função construtora.
    }
    return x+y;
}

try {
    console.log(soma2(1,2));
    console.log(soma2('1',2));
} catch (error) {
    console.log(error); //Agora exibo o erro completo conforme a configuração da função construtora.
    //Posso exibir esse erro no backend, mas no front exibo algo mais amigável ao usuário.
}