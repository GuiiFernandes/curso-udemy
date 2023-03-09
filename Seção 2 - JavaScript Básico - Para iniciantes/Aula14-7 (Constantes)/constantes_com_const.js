/*Constante é uma variável que não muda seu valor.
Utiliza as mesmas regras de Let: */
//Não podemos declarar constantes com palavras reservadas: Por exemplo, "const console;". Isso gera um erro e para a leitura do código.
//Constantes precisam ter nomes significativos. Exemplo, se a constante representa o nome de um cliente podemos chamar a variável de "const nomeCliente;".
//Não podemos começar o nome de uma constante com número. Exemplo, "const 1num". Dá erro. Usar letra minúscula ajuda.
//Não podem conter espaço ou traço. Exemplo, "const nome-cliente;" gera erro.
//Para nome composto usamos camelCase, iniciamos a primeira palavra com letra minúscula e as demais com letra maíuscula, ex: "const cpfClienteNovo".
//Constantes são Case-sensitive, portanto usar letra maíuscula ou minúscula faz diferença.
//Não podemos modificar o valor de uma constante com const
//PARA DECLARAR UMA CONSTANTE UTILIZE CONST E NÃO VAR.

const nome='João'; //Constante tem que ter um valor ao declarar, escrever "const nome;" gera erro.
// nome = 'Otavio'; <- Não podemos modificar o valor de uma constante já declarada. Fazer isso também gera um erro
console.log(nome);
/*Constantes servem para não permitirem que o valor de uma variável seja mudado.
Isso ajuda muito em sistemas grandes e complexos, onde a mudança de um valor pode mudar todo o comportamento de um sistema.*/
//Posso usar constantes e variáveis para atribuir valor a novas const e let. Ex:
const primeiroNumero=5;
const segundoNumero=10;
const resultado=primeiroNumero*segundoNumero;
const resultadoDupli=resultado*2;
console.log(resultado);
console.log(resultadoDupli); //Posso também usar o resultado de uma conta para atribuir valor a outra variável. As possibilidades são infinitas.

let resultadoTripl = resultado*3;
console.log(resultadoTripl);
// Como criei a variável com let, posso mudar o valor dela mesma dizendo:
resultadoTripl=resultadoTripl+5;
console.log(resultadoTripl); //Note, como mesmo chamando console.log da mesma variável o valor é diferente. Isso acontece pq alterei o valor da minha let acima.
//Ao fazer a operação acima eu perco o valor de 150 que estava em resultadoTripl, pq o substitui.

//Dentro de aspas = String = Text
//Fora de aspas = Number = Número
//Para descubrir o tipo do dado escrevo:
console.log(typeof primeiroNumero); //typeof vai mostrar o tipo da variável.
console.log(typeof nome);

//O Tipo da variável faz uma diferença enorme na hora de usar operadores como + visto que ele é usado tanto pra somar números quanto para juntar Strings.
const sobrenome = 'Silva'
console.log(primeiroNumero+segundoNumero); //Note que esse fez 5+10
console.log(nome+' '+sobrenome); //Enquanto esse fez "João"+" "+"Silva"
console.log(nome+primeiroNumero); //Se eu chamo essa operação a enginer entende "João"+"5"
console.log(typeof(nome+primeiroNumero)); //E me devolve um dado do tipo string, mesmo primeiroNumero sendo Number.



//Para saber atalhos clicar na engrenagem e em "Atalhos do teclado".