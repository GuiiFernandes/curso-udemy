/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne True se a imagem estiver no modo paisagem.
*/

const a=10;
const l=10;
const modo= (a,l) => l>a ? 'Paisagem' : 'Retrato';
console.log(a-l===0 ? 'Quadrado' : modo(a,l));