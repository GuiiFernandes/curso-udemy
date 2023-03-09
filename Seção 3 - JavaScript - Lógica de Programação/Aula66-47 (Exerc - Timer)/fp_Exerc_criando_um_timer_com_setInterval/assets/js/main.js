//Seleciono o relógio e os botões do meu timer.
const relogio = document.querySelector('.relogio');
let segundos = 0; //Crio uma variável de segundos para ser o contador do meu cronômetro
let timer; //Crio a variável timer que receber os dados do meu timer.

//Crio uma função que vai receber o valor em segundos e formatá-lo para retornar os segundos em formato de tempo.
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos*1000); //Crio a new data usando os segundos, porém como new Date aceita só milisegundos uso *1000 para transformar segundos
    return data.toLocaleTimeString('pt-BR', { //retorno a data formatada em String de tempo
        hour12: false, //Uso hora em formato de 24 horas
        timeZone: 'UTC' //Uso a timeZone UTC para tirar a distorção de -3 horas do fuso horário de Brasília.
    });
}

//Crio a função que vai contar o tempo
function iniciaRelogio() {
    //crio a variável timer para receber o resultado da função setInterval
    timer = setInterval(function() { //setInterval vai repetir uma ação de acordo com o tempo determinado
        //Dentro das chaves '{}' temos as ações.
        segundos++; //Vou adicionar +1 nos segundos
        relogio.innerHTML=criaHoraDosSegundos(segundos); //Vamos chamar a função que vai formatar o tempo do cronômetro e usar innetHTML para adicioná-lo na minha página.
    }, 1000); // Depois das chaves temos ',' e informo em milisegundos a cada quanto tempo meu JS vai repetir a ação.
}

//Dessa forma vou pegar qualquer evento de clique no meu documento
document.addEventListener('click', function(e) {
    const el = e.target; //E vou adicionar esse evento na variável el
    if (el.classList.contains('iniciar')) { //Se o elemento clicado contiver a classe 'iniciar' vou..
        relogio.classList.remove('pausado'); //retiro a classe pausado do meu relogio, essa linha só tem efeito se o relógio estiver pausado
        clearInterval(timer); //Limpo o que tiver sendo feito de cronômetro no meu navegador, isso evita que dois setIntervals sejam executados simultaneamente.
        iniciaRelogio(); //Chamo a função de inicio do relogio
    }
    if (el.classList.contains('pausar')) { //Se o elemento clicado contiver a classe 'pausar' vou..
        relogio.classList.add('pausado'); //adicionar a classe pausado ao relógio para os números ficarem vermelho
        clearInterval(timer); //Limpar as funções setInterval para o cronômetro parar...
    }
    if (el.classList.contains('zerar')) { //Se o elemento clicado contiver a classe 'zerar' vou..
        relogio.classList.remove('pausado'); //retiro a classe pausado do meu relogio.
        clearInterval(timer); //Limpar o Interval, para parar o cronometro
        relogio.innerHTML="00:00:00"; //zerar relógio no navegaor
        segundos=0; //Zerar os segundos para quando eu voltar a iniciar o cronometro ele inicie no 0, 1, 2 e assim por diante
    }
});