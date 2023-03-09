const nome=prompt('Digite seu nome completo:');
window.document.write('Algum Texto'); // pode ser abreviado document.write
//Essa função escreve alguma coisa na sua página.
//window é o objeto janela (janela é tudo que mostra no navegador).
//document se refere ao documento html aberto no arquivo..
//Não é usual em projetos reais..

//Podemos escrever no nosso documento de outra forma mais segura
document.body.innerHTML = `Olá, <strong>${nome}</strong>.<br/>`; //O <br/> é a tag HTML para soltar a linha, o document.body.innerHTML adiciona tags também ao HTML atráves da TAG em string.
//Essa função modifica o body dentro do arquivo HTML
//Porém essa função some com o que está escrito no body substuindo o que já tem nele.

const apelido=prompt('Como você prefere ser chamado?');
const qtdLetraApelido=apelido.length
const qtdLetraNome=nome.length
//Para não substituir, posso usar o sinal de atribuição com concatenação (+=)
document.body.innerHTML += `<strong>${apelido}</strong>, tem <strong>${qtdLetraApelido}</strong> caracteres. <br/>`; //O problema desse método é que ele adiciona tudo na mesma linha e junto. Adicionamos o <br/> para resolver isso.
document.body.innerHTML += `<strong>${nome}</strong>, tem <strong>${qtdLetraNome}</strong> caracteres. <br/>`;
document.body.innerHTML += `<strong>${apelido}</strong>, <strong>${nome[1]}</strong> é a segunda letra do seu nome. <br/>`;
const letra=prompt('Digite uma letra do seu nome:');
const posicao1=nome.indexOf(letra);
const posicao2=nome.lastIndexOf(letra);
document.body.innerHTML += `A primeira letra <strong>${letra}</strong> no seu nome é o <strong>${posicao1+1}º</strong> caractere. <br/>`;
document.body.innerHTML += `A última letra <strong>${letra}</strong> no seu nome é o <strong>${posicao2+1}º</strong> caractere. <br/>`;
const ult3Letras=nome.slice(-3);
document.body.innerHTML += `As 3 últimas letras do seu nome são <strong>${ult3Letras}</strong>. <br/>`;
const listaPalavras=nome.split(' ');
document.body.innerHTML += `<strong>${apelido}</strong>, as palavras no seu nome são: <strong>${listaPalavras}</strong>. <br/>`;
const nomeMaiusculo=nome.toUpperCase();
const nomeMinusculo=nome.toLowerCase();
document.body.innerHTML += `Seu nome com letra maiúscula: <strong>${nomeMaiusculo}</strong>. <br/>`;
document.body.innerHTML += `Seu nome com letra minúscula: <strong>${nomeMinusculo}</strong>. <br/>`;