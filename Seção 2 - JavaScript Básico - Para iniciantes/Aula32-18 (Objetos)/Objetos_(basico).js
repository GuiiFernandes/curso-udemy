/*
Quando quero criar um cadastro com várias pessoas e tenho vários dados para cada pessoa,
preciso criar várias variáveis para salvar os dados de cada pessoa.
*/
console.log('OBJETOS (BÁSICO)');
const nomea = 'Guilherme';
const sobrenomea = 'Fernandes';
const idadea = 29;
const nomeb = 'Plisciliane';
const sobrenomeb = 'Leal';
const idadeb = 28;

/*
Para simplificar esse processo posso criar um objeto que contém vários atributos diferentes.
*/
//Forma literal de criar objeto:
console.log('-> Criando Objetos (Forma Literal):');
const pessoa1={ //Para criar array uso [], para criar objeto uso {}.
    //Para criar atributo dentro de um objeto não preciso de let ou const.
    nome: 'Guilherme', //Após dar o nome ao atributo uso ':' e o dado referente à aquele atributo.
    sobrenome: 'Fernandes', //Para falar outro atributo no mesmo objeto uso ',' ao invés de ';'.
    idade: 29 //No último atributo não preciso de ,.
}; //Uso ';' para fechar o objeto.

console.log(pessoa1.nome); //Para acessar o dado de um atributo dentro do objeto uso o nomeObjeto.nomeAtributo
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//Posso simplificar criando uma função que cria um objeto para mim:
console.log('-> Criando Objetos (Com função):');
function cadastraPessoa (nomeExt, sobrenomeExt, idadeExt) { //Crio a função que recebe como parâmetro externamente os dados referentes a 3 variáveis.
    return { //Retorno um objeto com {}, 
        nomeObj: nomeExt, //Digo que o atributo nomeObj desse objeto recebe o dado armazenado no parâmetro nomeExt
        sobrenomeObj: sobrenomeExt, //Faço o mesmo com as demais.
        idadeObj: idadeExt
    };
} //Funções que criam objeto tem o nome de Factory

const pessoa2 = cadastraPessoa('Plisciliane', 'Leal', 28); //Crio a variável pessoa2 = e atribuo a função cadastraPessoa com os argumentos para alimentar os parâmentros.
/*
Dessa forma crio um objeto pessoa2 sendo:
Argumento = Parâmetro
Plisciliane = nomeExt
Leal = sobrenomeExt
28 = idadeExt
*/
console.log(pessoa2.nomeObj);
console.log(pessoa2.sobrenomeObj);
console.log(pessoa2.idadeObj);
//Dessa forma crio pessoas de forma muito fácil:
const pessoa3 = cadastraPessoa('Cristina', 'Dehon', 58);
const pessoa4 = cadastraPessoa('Zé', 'Buceta', 192);
const pessoa5 = cadastraPessoa('Valentina', 'Moura', 4);
//Assim como posso chamar dados delas:
console.log(`O nome das pessoas são: ${pessoa1.nome}, ${pessoa2.nomeObj}, ${pessoa3.nomeObj}, ${pessoa4.nomeObj}, ${pessoa5.nomeObj}.`);

console.log('-> Criando Objetos (Com função - Forma simples):');
//Quando tenho parâmentros com o mesmo nome do atributo posso simplificar meu objeto:
function cadastraPessoa2(nome,sobrenome,idade) {
    return {nome,sobrenome,idade};
};
/*
Essa forma resumida significa que:
atributo = parâmetro
nome = nome
E assim por diante. 
 */
const pessoa6=cadastraPessoa2('Rúbya', 'Silva', 40);
console.log(pessoa6.nome);

console.log('-> Criando Método:');
const pessoa7={
    nome: 'Bruce',
    sobrenome: 'Wayne',
    idade: 3, //Quando crio um método dentro de um objeto preciso colocar a ',' no último atributo do objeto.
    //Um método nada mais é que uma função dentro de um objeto.
    fala() { //Para criar um método não preciso escrever 'function', apenas 'nomeFunction() {corpo do método}'.
        console.log(`Obrigado pelo cadastro ${this.nome} ${this.sobrenome}!`); //nesse caso this. significa neste objeto.
    }, //Para chamar outro método ou atributo coloco vírgula neste objeto.
    
    incrementaIdade() {
        ++this.idade; //Incrementa mais um ao valor da idade.
    }
};

pessoa7.fala();
pessoa7.incrementaIdade(); //quando chamo essa função eu altero o valor do atributo idade do objeto pessoa7.
console.log(`Parabéns ${pessoa7.nome}! Hoje é seu aniversário de ${pessoa7.idade} anos.`); //Então agora quando chamar a idade da pessoa7 o resultado será 4 e não mais 3.