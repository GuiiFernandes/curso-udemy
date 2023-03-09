console.log('IF, ELSE IF E ELSE (2):');

const numero=10;

if (numero>=0 && numero<=5) {
    console.log('O número está entre 0 e 5.');
} else if (numero>=6 && numero<=8) {
    console.log('O número está entre 6 e 8.');
} else if (numero>=9 && numero<=11) { //verdadeira
    console.log('O número está entre 9 e 11.'); //Mesmo ambas sendo verdadeiras apenas a primeira é executada. E pula para o próximo código para fora do if
} else if (numero>=10 && numero<=15) { //verdadeira
    console.log('O número está entre 10 e 15.');
} else {
    console.log('O número NÃO está entre 0 e 11.');
}
//Fora de uma condição posso ter outra que avalia outra coisa independente.
if (numero===10){ 
    console.log('Número é 10.');
} else {
    console.log('O número não é 10.')
}

console.log('... Aqui vai o resto do seu código.') //Você pode continuar escrevendo seu código depois da condição.

//If, else if e else são dependentes, se a condição if for satisfeita a sua ação é executada e todo o resto é ignorado.
//Se não, ele lê o primeiro else if, se a condição for satisfeita a sua ação é executada e todo resto ignorado, mesmo se outras forem vedadeiras.
//Ele roda todos os else if tentando atender alguma condição, se nenhuma condição for aceita a ação de else é executada.