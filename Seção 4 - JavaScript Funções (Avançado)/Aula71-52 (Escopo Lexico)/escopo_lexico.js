console.log('ESCOPO LÉXICO');

const nome='Gui'; //quando eu crio uma variável em uma camada do meu escopo

function falaNome() {
    console.log(nome); //E chamo ela dentro de uma função, a função busca o valor subindo o escopo a partir da sua criação.
    // primeiro ela busca o valor de nome no seu próprio escopo
}
//Depois busca no escopo fora da função e se não achar busca no escopo acima.
//Se chegar no escopo global e não tiver uma variável com esse nome, retorna um erro de variable not defined

function usaFalaNome() { // Se crio uma função que vai usar a função acima, o escopo lexico vai fazer a mesma busca;
    falaNome(); //primeiro busca falaNome dentro do escopo de usaFalaNome,
} //Depois busca fora e quando achar executa o que está nela.

usaFalaNome(); //Quando eu chamo meu usa fala nome o resultado vai ser 'Gui'.

console.log('->Duas variáveis no escopo:');
//Usando o mesmo exemplo, quando eu tenho a variável em um escopo,
const nome2='Pli';
function falaNome2() {
    const nome2='Leal'; //E tenho ela novamente dentro da função
    console.log(nome2); //nome2 busca o valor da variável primeiro no escopo da função
    //Como encontra, ela assume o valor 'Leal';
}

function usaFalaNome2() {
    falaNome2();
}

usaFalaNome2(); //nome2 retorna o valor 'Leal'.

console.log('->Váriavel quando chama a função:');
//Agora, quando eu coloco a minha variável dentro do escopo na função usaFalaNome3 que chama a função falaNome3
const nome3='Pli';
function falaNome3() {
    console.log(nome3); //nome3 busca o valor da variável primeiro no escopo da criação da função
    //Como não encontra
}
//Ela busca fora do escopo de criação da função e acha nome3='Pli' 

function usaFalaNome3() {
    const nome3='Leal'; //Sendo assim, mesmo eu tendo a variável nome3='Leal'
    falaNome3(); //E chamando falaNome3 dentro de usaFalaNome3
    //nome3='Leal' é ignorado porquê o valor de nome3 é buscado próximo ao escopo da criação da função e não do escopo em que ela é chamada.
}

usaFalaNome3(); //nome3 retorna o valor 'Pli'.