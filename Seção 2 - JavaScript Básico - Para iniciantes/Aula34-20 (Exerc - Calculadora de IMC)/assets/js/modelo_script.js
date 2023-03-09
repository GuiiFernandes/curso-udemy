//Tudo que ocorre no navegador é um evento. Desde mover um mouse, clicar em qualquer lugar, digitar um texto, redimensionar o navegador. Tudo..
//Posso usar a programação para que alguma ação seja executada quando um determinado evento acontecer.

//Quando crio uma variável dentro do meu arquivo .js, estou criando uma variável no meu escopo global.
//Quando uso uma biblioteca externa no meu sistema, determinadas importações para o escopo global, como variáveis, podem gerar conflitos no meu sistema.
//Para resolver esse problema crio uma function para proteger o escopo do meu projeto, pois function são protegidas de influências externas.
//Só vai sair as informações que eu quiser no return da minha função.
function meuEscopo(){ //Vou criar toda minha programação dentro da função.
    /*
    Quando eu clico em um button, por padrão o navegador envia a informação e atualiza minha página.
    Para o exercício isso é ruim, pois precisamos das informações na tela para conferir se está tudo certo.
    Para que isso não aconteça precisamos criar uma função no formulário que vai impedir que a página atualize quando o evento de clique no button for feito.
    */
    const form=document.querySelector('.form'); //querySelector é a forma mais moderna de selecionar coisas do HTML em JS.
    const resultado=document.querySelector('.resultado');
    const pessoas=[];
    //Depois de selecionar o formulário, crio um "espião" para que ao acontecer um evento tão ação seja feita.
    /*
    form.onsubmit=function(evento) { //Digo que no formulário (form.), no evento de pressionar o enviar (.onsubmit), o formulário receba uma função (=function(evento)) que executa uma ação.
        evento.preventDefault(); //Nesse evento, previne o que é para acontecer por padrão. Não envie o formulário.
        alert(1); //quando o formulário for enviado aparece um alert(1).
        console.log('Foi enviado');
    }; //function com sinal de = precisa de ;.
    */
    //Existem várias formas mais fáceis de fazer isso, uma delas é conforme abaixo:
    function recebeEventoForm (evento) {
        evento.preventDefault(); //Vou chamar o mesmo método anterior. Para não enviar o formulário.
        //No exercício quero capturar o valor dos campos preenchidos pelo usuário.
        const data=form.querySelector('#data');
        const nome=form.querySelector('#nome'); //seleciono o dado do input dentro do formulário, fazendo assim o local de busca fica mais específico.
        const sobrenome=form.querySelector('#sobrenome');
        const peso=form.querySelector('#peso');
        const altura=form.querySelector('#altura');
        console.log(data,nome.value,sobrenome,peso,altura); //.value pega o valor de um input.
    }
    //addEventListener é um método para adicionar um leitor de eventos a algo.
    form.addEventListener('submit', recebeEventoForm); //Adicionamos o leitor de evento ao form. E executamos uma função qualquer, que poderia ser uma função anônima, mas vamos usar a function recebeEventoForm quando o evento submit for executado.
    //IMPORTANTE: No exemplo acima usamos on antes do evento (submit) neste caso. No método addEventListener, não precisamos do on antes do evento.
}
meuEscopo(); //Depois vou chamar minha função para executar as programações protegidas.