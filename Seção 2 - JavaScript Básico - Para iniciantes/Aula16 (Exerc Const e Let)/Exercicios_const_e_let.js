const nome='Guilherme';
const sobrenome='Fernandes';
const idade=30;
const peso=83;
const alturaEmM=1.69;

let imc;
let anoNascimento;

imc=peso/(alturaEmM*alturaEmM);
anoNascimento=2022-idade;

console.log(nome+' '+sobrenome+' tem '+idade+' anos, pesa '+peso+'Kg, tem '+alturaEmM+'m de altura e seu IMC é de '+imc);
console.log(nome+' nasceu em '+anoNascimento+'.'); //Forma que soma e torna toda a frase uma string só.

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg, tem', alturaEmM, 'm de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento, '.'); //Forma que deixa as variáveis separadas e a vírgula faz com que solte um espaço entre as variáveis.

//A melhor forma e mais moderna de resolver esse exercício é a partir de uma template string (String com variáveis dentro), usando a crase para expressar e chamando a variável dentro de uma String.
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmM}m de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);