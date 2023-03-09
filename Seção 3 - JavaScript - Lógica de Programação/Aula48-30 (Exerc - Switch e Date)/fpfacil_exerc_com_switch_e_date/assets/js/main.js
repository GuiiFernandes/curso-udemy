const h1=document.querySelector('.container h1'); 
const data = new Date();
//Ler a documentação Date no MDN para fazer dessa forma.
const opcoes = { //Crio um Objeto com dateStyle e TimeStyle para configurar meu date.
    dateStyle: 'full',
    timeStyle: 'short'
};


h1.innerHTML=`<p>`+data.toLocaleString('pt-BR', opcoes)+`</p>`; //Uso data.toLocaleString para configurar minha data para o padrão pt-BR, com parâmetros do objeto opcoes para que a data seja completa (full) e o tempo curto (short)

//Outra forma é colocando o objeto opções dentro de opcoes dentro do toLocaleString
h1.innerHTML+=`<p>`+data.toLocaleString('pt-BR', {dateStyle:'full',timeStyle:'short'})+`</p>`;
//Fazer como o professor usando "h1.innerHTML=data.toLocaleDateString" com opcoes igual feito acima não funciona no navegador do Chrome.

//outra forma passada por um colega nas respostas da página
h1.innerHTML+=`<p>`+(new Intl.DateTimeFormat('pt-BR',{dateStyle:'full',timeStyle:'short'}).format(data))+`</p>`