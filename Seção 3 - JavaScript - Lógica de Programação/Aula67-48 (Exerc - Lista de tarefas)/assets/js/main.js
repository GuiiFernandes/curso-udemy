//Seleciono meus elementos da página
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//Função que vai criar o meu li para dentro das ul
function criaLi() {
    const li = document.createElement('li'); //Crio o elemento li e armazeno na variável
    return li //retorno meu li
}

//Função que cria minha tarefa
function criaTarefa(texto) {
    if (!texto) return; //Se o valor do inputTarefa não (!) for preenchido (FALSY) saio da funçã (return)
    const li = criaLi(); //Chamo a função cria li e adiciono seu retorno em outra variável li.
    li.innerText= texto; //adiciono o texto a minha li
    tarefas.appendChild(li); //coloco a soma de tudo na minha ul da página.
    limpaInput(); //Essa função vai limpar o que está escrito no meu input.
    criaBotaoApagar(li);
    //Para salvar a tarefa crio uma função nova
    salvarTarefas();
}

//função que salva a tarefa.
function salvarTarefas() {
    //1º - pegar todos os li dentro das tarefas
    const liTarefas = tarefas.querySelectorAll('li'); //armazeno na variável liTarefas todos os lis dentro de tarefas (tarefas.querySelectorAll('li')).
    const listaTarefas = []; //Crio um array vazio. Que vai receber os textos do nodelist liTarefas
    //Vou iterar a nodelist liTarefas
    for (let tarefa of liTarefas) /*para (for) cada item dentro da nodelist liTarefas ((let tarefa of liTarefas)) */ {
        //Quando eu puxo o innerText do li o texto do botão Apagar vai junto, para tirar esse texto faço: 
        let tarefaTexto= tarefa.innerText; //Atribuo o text da tarefa dentro da nodelist a variável tarefaTexto
        tarefaTexto = tarefaTexto.replace('Apagar', ''); //Substituo o texto Apagar por ''. Isso vai sumir com o texto Apagar do meu li.
        //Se eu tivesse o espaço entre minha tarefa e o botão apagar eu poderia usar .trim() para tirá-lo. Ficaria: "tarefaTexto = tarefaTexto.replace('Apagar', '').trim()"; Mas como usei margin no botão Apagar não tive esse problema..
        listaTarefas.push(tarefaTexto); //Adiciono o tarefaTexto na minha lista de tarefas.
    }
    /* Vou criar um JSON de texto da minha listaTarefas para que eu possa armazenar esse JSON em algum lugar e puxar depois.
    JSON é formato de texto que utilizamos para salvar dados entre sistemas. Vamos falar mais sobre mais a frente.
    */
    const tarefasJSON = JSON.stringify(listaTarefas); //Criei uma string do meu array em formato de JSON. Essa String posso pegar depois e converter em array novamente.
    //Agora posso pegar esse texto salvar em algum lugar do meu navegador e depois puxar para manipulá-lo como quiser, nesse caso converter para array novamente.
    //localStorage é um local no navegador onde posso salvar coisas, é uma mini base de dados dentro do navegador.
    //No localStorage só consigo salvar String, por isso precisei converter meu array para uma String em formato JSON antes de armazenar no meu localStorage
    localStorage.setItem('tarefas', tarefasJSON); //noLocalStorage.SalvarItem('nomeParaRecuperarOValor*', valorASalvar);
    //* O nome do local é a key que vai ficar armazenado o valor, é por ele que vamos recuperar o tarefasJSON depois.
    /*Quando eu armazeno minhas tarefas no localStorage, apagá-los não faz com que sejam atualizados.
    Para isso preciso chamar minha função de salvarTarefas também quando remover uma tarefa.** */   
}

//Com minhas tarefas salvas no localStorage, vou criar uma função para recuperá-las quando abrir o site novamente.
function adicionaTarefasSalvas() {
    //Para trazer o itens do localStorage para a página primeiro chamo os itens e armazeno em uma variável tarefas
    const tarefas = localStorage.getItem('tarefas'); //.getItem('Key/NomeDeRecuperacao') pega o item no localStorage
    //Agora precisamos converter o texto do localStorage armazenado em tarefas
    const listaTarefas = JSON.parse(tarefas); //JSON.parse(oQueConverter) converte um arquivo em JSON em um objeto JavaScript.
    //Para colocar os itens salvos de volta na página vamos chamar um for of para todas as tarefas na listaTarefas
    if (!listaTarefas) return
    for (let tarefa of listaTarefas) { //para cada tarefa em listaTarefas
        criaTarefa(tarefa); //Crio uma tarefa em minha página.
    }
}

adicionaTarefasSalvas();

//função que cria um botão para apagar a tarefa
function criaBotaoApagar(li) { //Precisa receber um li, que vai dizer onde vou adicionar esse botão.
    //li.innerText+=' '; //Adiciono um espaço no fim do texto do meu li.
    //Não usei a programação acima, porquê adicionei 10px de margin lateral ao meu botão apagar no css.
    const botaoApagar = document.createElement('button'); //crio um elemento button para o meu document e armazeno ele na variável botaoApagar
    botaoApagar.innerText='Apagar'; //Adiciono o texto 'Apagar' dentro do meu botão
    //Para adicionar a função apagar a meu botão primeiro vou setar uma classe para ele
    //Eu poderia usar botaoApagar.classList.add('apagar'), mas com setAttribute podemos setar qualquer outro atributo como o href
    botaoApagar.setAttribute('class', 'apagar'); //ondeQueroSetar.setAttribute('atributoQueQueroSetar', 'valor");
    //Posso usar setAttribute para colocar um texto que será exibido quando eu passar o mouse no botão
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //Neste caso, eu quero setar o atributo title com o texto que vai ser exibido quando passar o mouse no botão.
    li.appendChild(botaoApagar); //Adiciono meu botão finalizado como filho de li
}

//Função que limpa meu input
function limpaInput() {
    inputTarefa.value=''; //Coloca o valor do input como vazio
    inputTarefa.focus(); //Focus é um evento HTML de clicar no input.
}

//Capturo o evento de click no botão.
btnTarefa.addEventListener('click', function(e){
    criaTarefa(inputTarefa.value);   
});

//Captura o evento de pressionar o ENTER.
inputTarefa.addEventListener('keypress', function(e) { //No vou capturar (addEventListener) o evento (e) de pressionar a tecla (keypress) do input de texto (inputTarefa)
/*
 Existem vários eventos de pressionar botões os principais são:
 keypress = quando a tecla é pressionada
 keyup = Quando a tecla é solta
 keydown = quando a tecla está pressionada

 Cada tecla tem seus dados e podem ser vistos quando fazemos o console log do evento capturado (console.log(e)).
 Os principais são a Key (key: "Enter") e keyCode (keyCode: 13)
*/  
    //Portanto, se keyCode do evento (e.keyCode) for igual (===) a 13 (code do ENTER)
    if (e.keyCode === 13) criaTarefa(inputTarefa.value); //Chamo a função que cria a tarefa com o parâmetro do valor do input
});

//Vou capturar qualquer botão que eu clicar na tela
document.addEventListener('click', function(e) {
    const el=e.target; //capturo o clique
    //Se (if) o que eu clicar conter a classe apagar (el.classList.contains('Apagar')) vou apagar o pai (el.parentElement.remove()) 
    if (el.classList.contains('apagar')) el.parentElement.remove(); //Apagar o pai vai fazer com que o filho também seja apagado, então o texto e o botão são apagados.
    salvarTarefas(); //** Agora sempre que eu apagar uma tarefa as tarefas salvas no localStorage também vão atualizar.
});