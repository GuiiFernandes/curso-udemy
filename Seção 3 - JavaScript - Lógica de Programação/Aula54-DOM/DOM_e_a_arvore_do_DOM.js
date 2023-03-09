const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

//O objeto global (geral) do navegador é o window.
//Ele é o pai de todos os outros elementos do HTML, ele é o topo da cadeia.
//Abaixo do window temos o document window.document

//Dentro de document temos elementos e dentro deles sempre temos outros elementos, que formam a árvore do DOM.
//Portanto, body e head são child (filhos) de html e html é filho de document e assim formamos a árvore do DOM.
//document> parent >html> parent >body> parent >section, article ou div> parent >h1> ou p e assim por diante.
//Nas camadas mais baixas temos os textos, que são No de texto child de p ou h1,2,3...

//No exercício anterior usamos a API do DOM para criar elementos dentro de HTML.
const div = document.createElement('div'); //Mas até esse momento não fizemos nada com essa div.
//Depois utilizamos o DOM novamento pra criar um outro elemento:
let tagCriada = document.createElement(tag); //Esses elementos criados não são filhos ou pai de niguém ainda, estão apenas criados na memória
//E esses elementos só passam a ser filhos/pais de alguém quando a partir da API do DOM dizemos:
tagCriada.appendChild(textoCriado); //Adicionamos o textoCriado como filho da tagCriada, por isso é indicado usar o createTextNode(texto)
//createTextNode(texto) é um nó de texto que está dentro da árvore do meu DOM.
div.appendChild(tagCriada); //Adiciono minha tagCriada, com todos os elementos já adicionado a div.

//Nesse exercício fizemos uma manipulação do DOM.

//Sabendo disso posso manipular meu DOM como eu quiser, por exemplo.
const h1 = container.querySelector('h1'); //Seleciono meu h1
//Se eu chamar h1 terei 'Título' e posso manipula-ló como eu quiser.
h1.style.backgroundColor = 'red'; //Como por exemplo mudar o fundo do meu h1.

//RESUMINDO: Ao falar de DOM, estou me referindo a uma interface de objeto do navegador que me permite manipular o elemento dentro da página.
//DOM é o objeto que permite manipular os elementos
//Árvore do DOM é a hieraquia dos elementos dentro da minha página.