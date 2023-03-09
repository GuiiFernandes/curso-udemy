console.log('MAIS DIFERENÇAS ENTRE VAR E LET:');
//Ambas criam uma variável
//Esse é o escopo global
let nome='Luiz'; //Crio a variável
var nome2='Luiz'; //Crio a variável
console.log('Primeira declaração:',nome,nome2);
/*
Diferença:
-> let não pode ser redeclarado, var pode.
-> *Let tem escopo de bloco {um bloco é tudo que está dentro de chaves} (dentro de cada bloco a variável pode ser criada novamente.).
Var tem escopo de função, ou seja, toda vez que ela é redeclarada ela substitui o valor declarado anteriormente.
Enquanto let, quando declarado dentro de dois blocos diferentes, vai usar o valor da variável dentro do bloco onde a variável foi chamada.
-> ***Var faz elevação (hosting), ou seja, quando chamamos uma variável que posteriormente foi declarada com var, o engine do JS declara ela com var variavel; (o que a atribui um valor undefined).
Já Let dá um erro de definição da variável
*/
console.log('-> Let tem escopo de bloco e var de função:');
const verdadeira = true;
//let nome='João'; Se eu fizer isso dá erro.
nome='João'; //Mas isso funciona mudando o valor da variável
var nome2='Otávio'; //redeclaro a variável
console.log('Escopo Global:',nome,nome2);

if (verdadeira) { //escopo bloco 1
    //Aqui eu crio a variável
    let nome= 'Gui'; //let dessa forma funciona* sem substituir 'Luiz' de nome
    var nome2= 'Fernandes'; //redeclaro, mudando o valor de nome2 em todos os lugares do meu projeto.
    console.log('Bloco1:',nome, nome2);
    //Podemos aninhar um bloco dentro de outro
    if (verdadeira) { //Este é o bloco 2, que está aninhado dentro do bloco 1
        let nome= 'Pli'; //a variável é criada dentro do bloco, mantendo os valores originais fora dele.
        var nome2= 'Leal'; //redeclaro
        console.log('Bloco2 aninhado:',nome,nome2);
        /*
        Quando eu tenho declaração de uma variável let dentro de vários bloco e chamo a variável o engine do JS faz:
        1º- Busca dentro do bloco 2 (retorna 'Outra coisa'); Se não encontrar>
        2º- Busca dentro do bloco 1 (retorna 'Otávio'); Se não encontrar>
        3º- Busca dentro do escopo global (retorna 'Luiz'); Se não encontrar>
        4º- Variável não definido.
        */
    }
    console.log('(2)Bloco1:',nome, nome2); //Mesmo eu dizendo que nome='Pli', minha váriavel nome='Gui', pq está fora do Bloco2, mas dentro do Bloco1.
}
console.log('(2)Escopo Global:',nome,nome2); //Quando chamo a mesma variável no Escopo global nome='João', mas nome2='Leal' pq ela foi redeclarada com esse valor dentro do bloco2.
//Usa let nome='João' (pq é o valor da variável no bloco do escopo global) e pega var nome2='Leal' (pq foi a última redeclaração de var nome2).

console.log('-> Função e os escopos de let e var:');
var sobrenome='Fernandes';
function falaOi () { //Função tem um escopo especial, pq protege as variáveis que estão dentro dela.
    var nome= 'Gui';
    console.log(`Oi ${nome} ${sobrenome}!`); //Mesmo sobrenome estando fora da função e não sendo declarada como parâmentro dela. A engine do JS puxa a variável próxima da função.
    if (verdadeira) { //verdadeira está em torno da function porquê está no escopo global
        let nome= 'Valentina'; // dentro do bloco if o let torna a variável nome2 inascesível fora do bloco.**
        let nome2='Rubya';
        var sobrenome= 'Silva'; //redeclarei nome, assim o primeiro console.log tem sobrenome=undefined, porquê a engine do JS faz uma elevação (Hosting) na variável dentro da função.***
        console.log(`Oi ${nome} ${sobrenome}!`); //Dentro do bloco nome assume o valor de 'Valentina'
    }
    console.log(nome); // Portanto chamar console.log(nome) aqui, faz o engine entender que nome='Gui'.
    //** Chamar console.log(nome2) fora do bloco onde a variável foi declarada vai gerar erro de variável não definida.
    console.log(`Oi ${nome} ${sobrenome}.`); //Porém redeclarar var vai fazer com que ela assuma o último valor, mesmo estando dentro de outro bloco.
}
//Porém se eu fizer um console.log(nome) fora da função, aparecerá que nome não foi definida porquê ela está protegida dentro da função.

falaOi();

console.log('-> Elevação (Hosting):');//***
//Quando eu uso uma variável declarada com var antes de atribuir um valor a ela, o meu engine do JS automaticamente eleva a declaração da minha variável.
//A engine lê o código, detecta todos os lugares que estou criando a variável, vai pegar a variável e declarar ela sem valor no topo do arquivo:

//var sobrenome2; -> O engine do JS faz isso automaticamente, isso atribui valor undefined para a variável sobrenome2.
console.log(sobrenome2);

var sobrenome2='Dehon';
console.log(sobrenome2);

//Com let não ocorre o Hosting e fala o erro de definição da variável.

//Quando você cria uma Function nomeFuncao () {} também ocorre o hosting.