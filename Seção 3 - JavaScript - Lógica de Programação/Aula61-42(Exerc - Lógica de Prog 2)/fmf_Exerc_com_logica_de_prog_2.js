/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne True se a imagem estiver no modo paisagem.
*/

const a=1080;
const l=1920;
const modo= (a,l) => l>a;
console.log(a-l===0 ? 'Quadrado' : modo(a,l) ? 'Paisagem' : 'Retrato');