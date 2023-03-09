const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const resultado=document.querySelector('.container');

for (let i=0; i<elementos.length; i++) {
    const elemento=criaElemento(elementos[i].tag);
    elemento.innerHTML+=elementos[i].texto;
    resultado.appendChild(elemento);
}

function criaElemento (tag) {
    const elemento=document.createElement(tag);
    return elemento
}