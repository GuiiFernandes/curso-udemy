console.log('OBJETO DATE:');
//Assim como o objeto Math, o objeto date está disponível para ser utilizado no seu código sempre que necessário.

console.log('-> new Date():');
let data = new Date(); //A função date é uma função construtora, que ainda vamos aprender a criar.
//Para criarmos uma função construtora iniciamos ela com 'new'. Função construtora sempre começa com letra maíuscula (primeira letra).
//Quando eu chamar Date sem nenhum parâmetro, o JS vai gerar um novo objeto com a data atual (data, hora, minutos, segundos, milésimo de segundos) e salvar na variável.
//Como essa função construtora herda de outros locais várias funções que ajudam a gente a trabalhar com data.
console.log('-> Mostrando data no formato EUA de tipo String:');
console.log(data.toString());

console.log('-> new Date(valor):');
//01/01/70 é considerada o marco inicial da data 0 em JS. Chamada de Timestamp unix ou época unix. Eu digo que ela é a data 0 e se eu quiser datas maiores posso usar números > 0.
//Se eu quero datas menores, uso números < 0.
//O valor é o número de milisegundos a partir da data 0.
data = new Date(0); //Porém se eu atribuir 0 a minha função construtora
console.log(data.toString()); //Retorna 31/12/1969 - 21:00
//Isso acontece porquê o meu fuso horário é gmt-03:00, ou seja, se eu somar +3 horas a 21:00-31/12/1969 = 00:00-01/01/1970
const tresHoras=60*60*3*1000; //Crio a variável que corresponde a 3 horas em milisegundos (60 segundos * 60 minutos * 3 horas * 1000 milisegundos)
data = new Date(0+tresHoras); //atribuo a data a função construtora Date com a data 0 + a variável com 3 horas
console.log(data.toString()); //Agora sim, meu console me retorna a data 0 de forma correta.
//Se eu quiser somar 3 dias ao meu marco zero posso fazer:
const umDia=1000*60*60*24; //(1000 milisegundos * 60 segundos * 60 minutos * 24 horas)
data = new Date(0+tresHoras+3*umDia); //Somo 3 horas para acertar minha data 0 + 3*umDia para somar 3 dias.
console.log(data.toString()); //Retorna 04/01/70-00:00

console.log('->new Date(ano, mês, dia, hora, minuto, segundo, milissegundo):');
data = new Date(2022, 2, 28, 18, 52, 27, 853);
//Sendo, new Date(ano, mês index (mês janeiro)(0-11), dia, hora, minuto, segundo, milésimo). Se o milisegundos for maior que 999 vou ter mais 1 segundo.
//E assim funciona com todos os dados, exemplo, se colocar 60 segundos, soma 1 no minuto.
console.log(data.toString()); //Nesse caso não consigo visualizar o milisegundo, mas ele está lá..
//Quando eu coloco 1000
data = new Date(2022, 2, 28, 18); //Posso omitir valores da minha função construtora, isso faz com que a função retorne esses campos com valores 0.
//Nesse exemplo, omitimos milisegundos, segundos e minutos. Então esses dados terão valor 0.
console.log(data.toString()); //28/01/22-18:00:00
//Omitir o dia faz com que ele receba o primeiro dia do mês.
//Só não posso omitir o ano e o mês. Se eu omitir o mês, ele considera o ano como milésimo de segundo.

console.log('-> new Date(dataString):');
//Posso inserir uma data em formato String, desde que essa string esteja em um padrão reconhecido pelo JS.
data = new Date('2020-03-28T20:15:10.150'); //Esse é o padrão mais comum ('ano-mês-dia/T ou espaço*/Hora:minuto:segundo.milissegundo')
//*espaço é mais comum de usar que o T.
//Formatos reconhecidos: RFC2822 e ISO8601
console.log(data.toString());

console.log('-> Extraindo dados da data:');
console.log('Dia do mês:', data.getDate()); //retorna o número do dia do mês
console.log('Mês:', data.getMonth()+1); //retorna o index do mês (0-11) e +1 para retornar o mês exato.
console.log('Ano:', data.getFullYear()); //retorna o ano
console.log('Hora:', data.getHours()); //Tempo é sempre no plural. Retorna a Hora.
console.log('Min:', data.getMinutes()); //Retorna os minutos.
console.log('Seg:', data.getSeconds()); //Retorna os segundos.
console.log('Milisseg:', data.getMilliseconds()); //Retorna os milissegundos.
console.log('nº do dia da semana:', data.getDay()); //Retorna o número do dia da semana. 0=Domingo -> 6=Sábado
console.log(Date.now()); //retorna os milissingudos da data atual.


console.log('-> Prática:');
//Quero uma função que formate uma data.
function formataData(data) { //Crio uma function para formatar a data
    //Pego a data armazenada no parâmetro data e extraio cada informação necessária.
    const dia = zeroAEsquerda(data.getDate()); //O data.get puxa o número sem o 0 a esquerda, para fazer isso crio uma função
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}` //retorno minha data no formato desejado
}

function zeroAEsquerda (num) { //função que cria o 0 a esquerda em números menores que 10.
    return num>=10 ? num : `0${num}`; //Se num é maior ou igual a 10 retorno o num, se não, retorno 0num
}

const data2 = new Date(); //pego a data atual com new Date() e armazeno na variável data2
const dataBrasil = formataData(data2); //chamo minha function formataData para formatar a data armazenada em data2
console.log(dataBrasil); //exibo a data formatada.