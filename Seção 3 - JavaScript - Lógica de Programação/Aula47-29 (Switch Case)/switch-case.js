console.log('SWITCH/CASE');
//Switch é uma técnica pouco utilizada na prática
//Switch pode ser usado quando você quer avaliar apenas uma variável.

//quando crio um sistema e preciso pegar um dia da semana específico eu chamo new Date para selecionar o dia.
console.log('-> Situação para uso do Switch:');
const data= new Date('1987-04-21 00:00:00'); //Armazeno a data
const diaSemana=data.getDay(); //Extraio o dia da Semana daquela data

console.log(diaSemana); //Retorna 2, ou seja, terça-feira.
//No meu sistema meu usuário não verá o número do dia, mesmo porquê ele não sabe qual número representa qual dia.
//Para mostrar o dia em texto faço o seguinte:
let diaSemanaTexto; //Crio uma variável para receber o texto
if (diaSemana===0) { //Crio um if para saber qual o valor do dia extraido pelo getDay()
    diaSemanaTexto='Domingo'; //Se o valor for 0 o diaSemanaTexto recebe 'Domingo'
} else if (diaSemana===1)  { //Repito para todos os dias da semana.
    diaSemanaTexto='Segunda';
} else if (diaSemana===2)  {
    diaSemanaTexto='Terça';
} else if (diaSemana===3)  {
    diaSemanaTexto='Quarta';
} else if (diaSemana===4)  {
    diaSemanaTexto='Quinta';
} else if (diaSemana===5)  {
    diaSemanaTexto='Sexta';
} else if (diaSemana===6)  {
    diaSemanaTexto='Sábado';
} else {
    diaSemanaTexto='';
}
//Essa condição é perfeita para utilizar Switch
console.log(diaSemanaTexto);

console.log('-> Exemplo anterior com Switch:');
const data2= new Date('2016-06-06 00:00:00'); //Armazeno a data
const diaSemana2=data2.getDay(); //Extraio o dia da Semana daquela data
console.log(diaSemana2); //Retorna 1
let diaSemanaTexto2; //Crio a variável que vai armazenar o texto.
switch(diaSemana2) { //switch (variável de checagem) {}
case 0: //caso seja 0:
    diaSemanaTexto2='Domingo'; //diaSemanaTexto receb 'Domingo'
    break; //No switch é necessário o break para sair do código caso a condição seja verdadeira, se não o JS vai continuar lendo as demais condições.
case 1:  //repito para todos os dias da semana
    diaSemanaTexto2='Segunda';
    break;
case 2:
    diaSemanaTexto2='Terça';
    break;
case 3:
    diaSemanaTexto2='Quarta';
    break;
case 4:
    diaSemanaTexto2='Quinta';
    break;
case 5:
    diaSemanaTexto2='Sexta';
    break;
case 6:
    diaSemanaTexto2='Sábado';
    break;
default: //Para substituir o else do if uso default:
    diaSemanaTexto2='';
    //Como default é a última condição não tem necessidade do break, mas usá-la não atrapalha o código.
}
//Não usar o break faz com que o código abaixo seja executado e o valor retornado é errado.
console.log(diaSemanaTexto2);

console.log('-> Exemplo de Switch dentro de function:');
const data3= new Date('2022-04-02 00:00:00'); //Armazeno a data
const diaSemana3=data3.getDay(); //Extraio o dia da Semana daquela data
console.log(diaSemana3);

function getDiaSemanaTexto(diaSemana3) {
    let diaSemanaTexto3; //crio minha variável dentro da function
    switch(diaSemana3) {
    case 0:
        diaSemanaTexto3='Domingo';
        return diaSemanaTexto3; //Nesse caso troco o break por return
        //O return para a leitura da função. Fazendo o mesmo papel do break
    case 1:  //repito para todos os dias da semana
        diaSemanaTexto3='Segunda';
        return diaSemanaTexto3;
    case 2:
        diaSemanaTexto3='Terça';
        return diaSemanaTexto3;
    case 3:
        diaSemanaTexto3='Quarta';
        return diaSemanaTexto3;
    case 4:
        diaSemanaTexto3='Quinta';
        return diaSemanaTexto3;
    case 5:
        diaSemanaTexto3='Sexta';
        return diaSemanaTexto3;
    case 6:
        diaSemanaTexto3='Sábado';
        return diaSemanaTexto3;
    default: //Para substituir o else do if uso default:
        diaSemanaTexto3='';
        return diaSemanaTexto3;
    }
}
console.log(getDiaSemanaTexto(diaSemana3));

console.log('-> Switch em function com return abreviado (feito por mim):');
const data4= new Date('2022-12-01 15:35:27'); //Armazeno a data
const diaSemana4=data4.getDay(); //Extraio o dia da Semana daquela data
console.log(diaSemana4);

function getDiaSemanaTexto2(diaSemana) {
    let diaSemanaTexto; //crio minha variável dentro da function
    switch(diaSemana) {
    case 0:
        return diaSemanaTexto='Domingo';
    case 1:
        return diaSemanaTexto='Segunda';
    case 2:
        return diaSemanaTexto='Terça';
    case 3:
        return diaSemanaTexto='Quarta';
    case 4:
        return diaSemanaTexto='Quinta';
    case 5:
        return diaSemanaTexto='Sexta';
    case 6:
        return diaSemanaTexto='Sábado';
    default:
        return diaSemanaTexto='';
    }
}
console.log(getDiaSemanaTexto2(diaSemana4));