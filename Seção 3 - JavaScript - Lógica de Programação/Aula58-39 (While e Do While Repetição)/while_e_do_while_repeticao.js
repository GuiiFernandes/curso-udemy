console.log('WHILE E DO WHILE - ESTRUTURA DE REPETIÇÃO');
//Quando usamos o For geralmente sabemos o tamanho do elemento que estamos trabalhando.
//Quando usamos o While ou Do While, não sabemos quantas vezes a repetição vai ocorrer até que o laço termine.

console.log('-> WHILE:');
let controle = 0; //variável de controle
//while significa = repetir enquanto minha condição for verdadeira.
while(controle<=10) { //while (condição) - "repetir enquanto controle for menor ou igual a 10."
    console.log(controle); //ação
    controle++; //no while é obrigatório ter o contador, se não minha condição nunca fica falsa e vou ter uma repetição infinita.
}
console.log('Segue a vida...');

console.log('-> WHILE COM STRING:');
//É mais fácil fazermos analise de string ou array com for, pois sabemos quantas vezes vamos repetir.
const nome='Gui Fernandes'; //variável a analisar
let i= 0; //variável de controle do index
while(i<nome.length) { //"repetir enquanto i (index) for menor que a quantidade de caracteres de nome."
    console.log(nome[i]); //ação
    i++; //contador.
}
console.log('Segue a vida...');

console.log('-> WHILE DO MUNDO REAL:');
//O While é indicado para quando não tenho uma quantidade exata de repetições.
//Crio um sistema para sortear números aleatórios até que seja sorteado o número 10.
//O usuário pode inserir um mínimo e máximo e o sistema volta um número randonico.
function random(min, max) { //crio minha função random
    const r=Math.random()*(max-min)+min; //cálculo do random (random volta um número aleatório entre 0 e 1)
    return Math.floor(r); //retorna o número
}
//Usuário escolhe o mínimo e máximo
const min=1; //1 foi a escolha como mínimo do usuário.
const max=11; //11 foi a escolha como máximo do usuário.
let rand=random(min,max); //Chamo a função random para ver qual vai ser o primeiro número aleatório
while (rand!==10) { //repetir enquanto rand for diferente de 10, Se o primeiro random não for 10...
    rand=random(min,max); //chamo a função random e armazeno o novo número na variável rand
    console.log(rand); //Mostro rand
    console.log(rand!==10); //enquanto minha condição retornar true, o laço vai ser repetir
    //Vou repetir a operação até que o número seja 10.
}

console.log('->DO WHILE:');
//While e Do While são iguais, porém no Do, minha condição vai ser analisada no final do laço.
do { //Executa a ação
    rand=random(min,max); //chamo a função random e armazeno o novo número na variável rand
    console.log(rand); //Mostro rand
    console.log(rand===10); //enquanto minha condição retornar true, o laço vai ser repetir
} while(rand===10); //Repito o laço enquanto o número aleatório for igual a 10.
//Portanto o Do sempre executa o laço pelo menos uma vez antes de checar a condição.