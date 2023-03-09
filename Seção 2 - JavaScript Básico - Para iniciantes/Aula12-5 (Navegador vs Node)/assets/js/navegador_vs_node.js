console.log(`Oi`);
// Podemos executar nosso código no codejs, direto no terminal do sistema operacional (cmd no windows) ou no navegador. 
/*
para executar esse código no windows:
1- Pesquisar cmd
2- Copiar o código após [Running] no executor abaixo.
3- colar no cmd e apertar enter.
*/
/*
No VSCode eu posso ir em terminal, onde vai mostrar a pasta geral que estou acessando (Seção 2 - JavaScript Básico - Para iniciantes, neste caso).
Seleciono a pasta do arquivo desejado com o código cd (cd aula12-5, neste caso).
Depois, executo o arquivo js desejado com o código node (node navegador_vs_node.js, neste caso).

Para limpar esse terminal basta clicar na lixeira no canto direito.

Posso executar o arquivo direto com o código node, desde que especifique a pasta do arquivo e o arquivo separados com \ (node aula12-5\navegador_vs_node.js, neste caso)
*/
/*
No navegador (Google Chrome) basta ir em inspecionar>console copiar o código e apertar enter. ("console.log(`Oi`);", neste caso)
*/

/*
Neste caso vamos juntar o html com o js. A melhor forma de unir é criando um arquivo .js e um .html com o mesmo nome, e extensões diferentes.
*/

console.log(`Conteúdo do arquivo .js`);

alert(`Olá mundo!`);
/*
VSCode e navegador, tem o mesmo motor ou enginer para executar js, mas não se comportam da mesma forma. Usar comando alert, por exemplo, que no navegador mostra um alerta clicável na página, no VSCode esse comando gera um erro, pq não existe esse elemento no NodeJs.
"alert is not defined" = essa função não está definida.
*/
/*
Por conta dessas dessa diferença usamos o navegador para manipular o dom ou os elementos da página, ou seja, para visualizar o front end.
Quando formos trabalhar com base de dados ou rotas de aplicações usaremos o NodeJs no VSCode.
*/