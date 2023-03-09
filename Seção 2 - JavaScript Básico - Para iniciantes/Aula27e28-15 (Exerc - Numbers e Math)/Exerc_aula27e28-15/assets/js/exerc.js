const num=Number(prompt('Digite um número:'));
/*
Para selecionar uma parte do meu HTML dentro do meu JS, posso usar a função .getElementById.
E atribuir essa parte a uma variável.
*/
const numEscolhido=document.getElementById('numEscolhido');
const texto=document.getElementById('texto');
//Exitem vários tipos de .getElementBy, classname, name, tagname, etc..
//O .getElementBy não é a melhor opção para puxar um elemento do HTML, atualmente selecionamos com as Tags do CSS.
//Feito isso posso alterar o valor do meu elemento HTML com .innetHTML chamando a variável referente a parte que desejo modificar.
numEscolhido.innerHTML=num;
//Com isso eu posso modificar todo o meu texto.
texto.innerHTML=`<p>Esse número não é um número real: ${Number.isNaN(num)}.</p>
<p>Raiz quadrada do seu número é ${num**(1/2)}.</p>
<p>${num} é inteiro: ${Number.isInteger(num)}.</p>
<p>Esse número arredondado para baixo é ${Math.floor(num)}.</p>
<p>Arredondado para cima é ${Math.ceil(num)}.</p>
<p>Esse número com duas casas decimais fica ${num.toFixed(2)}.</p>`;