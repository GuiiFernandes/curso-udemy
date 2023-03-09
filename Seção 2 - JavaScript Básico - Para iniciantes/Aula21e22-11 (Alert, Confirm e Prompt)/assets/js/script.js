//Alert, confirm e prompt (Navegador)
//São métodos dentro do objeto window. Quando temos funções dentro de objetos chamamos de métodos. Mas são uma função como qualquer outra.


//alert('Nossa mensagem.'); //É um atalho para window.alert()
/*
window é o objeto janela e alert é o método dentro desse objeto, assim como
log é o método do objeto console. "console.log('');"
*/

//window.confirm('Deseja realmente apagar?');
// similar ao alert, o confirm cria uma caixa de confirmação que retorna um boolean (True ou False).

//prompt('Digite o seu nome:');
//Assim como confirm e alert, prompt cria uma janela, porém ela é digitável e retorna para o sistema o que o usuário digitou na caixa.

//window. é a forma completa, mas podemos abreviar o comando usando somente alert, confirm ou prompt.

/*
Existem métodos que retornam valores undefined como alert. Esse valor não tem local específico na memória.
Porém métodos como confirm e prompt que retornam, podem ter seus retornos capturados conforme exemplo abaixo.
*/

//const validacao = confirm('Deseja realmente apagar?');
//Isso captura o valor retornado do confirm e armazena na mémoria com a variável validacao.

//Posso fazer o mesmo com prompt para memorizar um valor inserido pelo usuário.
let num=prompt('Digite um número:');
let num1=prompt('Digite outro número:');
//Quando armazeno dados inseridos por usuário, por padrão ele vem como Type String. Então preciso convertê-lo em número para operar o dado.
num=parseFloat(num);
num1=parseFloat(num1);
//Depois de ajustado posso somar os valores armazenados na memória.
//const resultado=num+num1; //Criando uma nova variável de resultado
//alert(`A soma dos valores digitados é: ${resultado}`); //Utilizamos o Template String para mostrar o resultado.

//Outra forma é não usar a variável para economizar código, memória e processamento.
alert(`A soma dos valores digitados é: ${num+num1}`); //Em códigos simples isso é utilizável, mas em códigos complexos pode aumentar a dificuldade da leitura do código em caso de erro de programação.
//Criando a variável o código fica mais explicito, mais fácil de ser lido posteriormente.
//Colocando a conta dentro do alert o código fica com coisas implicitas, o que dificulta uma leitura posterior.
//Buscamos sempre criar código explicitos, pois escrevemos para um humano ler (algum outro programador, por exemplo) e não para a máquina ler.

//OUTRA FORMA:
let num3=Number(prompt('Digite um número:'));
let num4=Number(prompt('Digite outro número:'));
alert(`A soma dos valores digitados é: ${num+num1}`);