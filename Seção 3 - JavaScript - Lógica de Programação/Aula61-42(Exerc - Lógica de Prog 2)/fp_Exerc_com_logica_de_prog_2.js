/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne True se a imagem estiver no modo paisagem.
*/

function ePaisagem1(largura,altura) { //Crio a function que recebe largura e altura
    return largura > altura ? true : false; //retorna true ou false
}

//Se o retorno é true ou false não preciso da condição na minha função
function ePaisagem2(largura,altura) {
    return largura > altura;
}

//Em arrow function
const ePaisagem = (largura,altura) => largura > altura;
console.log(ePaisagem(1920, 1080));