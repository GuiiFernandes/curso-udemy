console.log('FUNÇÕES GERADORAS:');
//Tem o recurso especial de quase pausar o código
//Ela faz uma lazy avaliation ou avaliação preguiçosa e não te entrega todos os valores de uma vez na sua execução.
//Em certas situações isso é mais performático para o programa
function* geradora1() { //Para mostrar que minha função é geradora uso * em function
    //código qualquer
    yield 'Valor 1'; //Uso o yield para retornar o que eu quero da minha função

    yield 'Valor 2'; //Ao usar yield, a cada vez que eu chamar minha função com o método .next ele vai me retornar um dos yields

    yield 'Valor 3';
}

const g1=geradora1();
console.log(g1); //Se eu chamo console.log de g1 vejo que g1 é um objeto gerador.
console.log(g1.next()); //Quando eu uso o next, o retorno é um objeto que contém duas chaves. value (valor) e done (false se eu tiver outro dado a ser analisado e true se não tiver).
//em done, quando eu chegar em 'valor 3', seu done ainda será false, se eu der outro .next meu value:undefined e done:true.
//Quando eu chamar g1.next(), mesmo estando com .value, vou ter o retorno do 'valor 2' agora.
console.log(g1.next().value); //com o .value eu acesso o valor do meu objeto.
console.log(g1.value); //Porém se eu acessar .value do g1, sem o .next() retorna undefined.
console.log(g1.next()); //Quando eu chamar novamente terei o 'valor 3' e done ainda é false.
console.log(g1.next()); //Se eu chamar novamente o valor é undefined e done é true.

console.log('-> Iterando função geradora:');
//Posso também iterar sobre minha função:
const g2=geradora1(); //Crio uma variável com minha função.
for (let valor of g2) { //para cada 'valor' dentro de g2:
    console.log(valor); //Eu mostro o valor na tela.
    //dessa forma, valor recebe o .value do g2
}

console.log('-> Função geradora infinita:');
//Isso é mais perigoso, pois pode criar loop infinito.
function* geradora2() { //crio minha função geradora.
    let i=0; //Crio uma variável i com valor inicial de 0
    while(true) { //Repito enquanto true = true, ou seja, infinitas vezes
        yield i; //retorno i
        i++; //Faço um contador para somar 1 no meu i e ele mudar o valor
    }
}
const g3 = geradora2(); //atribuo geradora2 a uma constante.
for (let i=0; i<=7; i++) { //Crio uma repetição de 0 a 7 (8x), só pra facilitar meu console.log (não precisar ficar repetindo)
    console.log(g3.next().value); //Mostro os 7 yields retornados da minha função.
}

console.log('-> Função geradora que delega tarefa para outra geradora:');
//Uma função geradora pode delegar parte de sua tarefa para outra função ou outra geradora. Para isso:
function* geradora3() { //Crio uma função geradora que vai retornar os números 0, 1, 2 (poderia ser qualquer coisa, função, resultado de conta, qualquer coisa.)
    yield 0;
    yield 1;
    yield 2;
}
//logo depois crio minha função geradora4
function* geradora4() {
    yield* geradora3(); //E coloco um * no meu yield para mostrar que estou delegando e chamo minha geradora3().
    //Então antes de continuar, ele executa geradora3() e depois prossegue com o yield de geradora4()
    yield 4;
    yield 5;
}

const g4=geradora4(); //Atribuo geradora4() a constante g4
for(let valor2 of g4) { //Faço uma repetição que itera g4 (ele vai contar os yield de geradora3() como um yield de geradora4())
    console.log(valor2); //mostro o valor.
}

console.log('-> Função geradora que retorna função:');
//Uma função geradora pode gerar qualquer coisa no yield incluindo uma função
function* geradora5() { //Crio uma função geradora
    yield function() { //Atribuo para o yield retornar uma função anônima
        console.log('Vim do y1'); //Faço uma ação dentro da função anônima
    };

    yield function() { //Crio outro yield que vai retornar outra função anônima
        console.log('Vindo do y2'); //Executo outra ação dentro da função anônima
    }; //Preciso do ; nessa função
}

const g5= geradora5(); //Chamo minha função geradora
const func1= g5.next().value; //Atribuo meu g5.next().value numa constante
//Isso vai fazer com que o retorno do yield seja salvo na constante, nesse caso minha função anônima
const func2= g5.next().value;
func1(); //Depois é só chamar minha constante com () e a ação do yield da minha função geradora será executado.
func2();

//Outra forma de fazer isso é:
console.log('     -> for');
const g6 = geradora5();
for(let valor3 of g6) { //Crio um for para iterar os yields da minha função geradora.
    valor3(); //Chamo valor3, que é o yield da minha função geradora com o ().
}

console.log('-> Return dentro da Função geradora:');
//O return dentro da função encerra sua execução, portanto posso usá-lo com sentido de yield apenas se quiser para minha função.
function* geradora6() { //Crio uma função geradora
    yield function() { //Atribuo para o yield retornar uma função anônima
        console.log('Vim do y1'); //Faço uma ação dentro da função anônima
    };

    yield function() { //Crio outro yield que vai retornar outra função anônima
        console.log('Vim do y2'); //Executo outra ação dentro da função anônima
    }; //Preciso do ; nessa função

    return function() {
        console.log('Vim do Return');
    };

    //Se eu coloco um Yield aqui, ele será ignorado e gerará um erro.
}

//Se eu fizer da seguinte forma consigo salvar, acessar e executar meu return usando o .next()
const g7 = geradora6();
const func3= g7.next().value;
const func4= g7.next().value;
const func5= g7.next().value;
func3();
func4();
func5();
console.log('     -> for');
//Se eu tentar com for só retorna os yields
const g8 = geradora6();
for(let valor4 of g8) {
    valor4(); //Dessa forma o g8 não é considerado um yield da função geradora.
}