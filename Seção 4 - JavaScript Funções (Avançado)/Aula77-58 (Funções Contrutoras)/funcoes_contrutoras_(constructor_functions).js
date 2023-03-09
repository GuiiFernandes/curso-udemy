console.log('FUNÇÕES CONSTRUTORAS:');
//Assim como a função fábrica, criam novos objetos.
//A diferença é que a função fábrica é uma função normal que retorna um objeto. Enquanto a função construtora já faz muita coisa automatica. Ela já cria e retorna o objeto.

//Para criar uma função construtora por convensão iniciamos o nome com letra maíuscula.
function Pessoa(nome, sobrenome) { //informo o parâmetro normalmente da função
   this.nome = nome; //Uso this. para dizer que Pessoa.nome=nome; (uso ; na função construtora ao invés de ,)
   this.sobrenome = sobrenome; //Ou seja, estou dizendo que o atributo sobrenome, do objeto Pessoa (this.) recebe o parâmetro sobrenome.
}

const p1 = new Pessoa('Gui','Fernandes'); //Para criar uma Pessoa sou obrigado a chamar new antes de chamar a função, por isso uso o nome da função com letra maíuscula, para lembrar que preciso do new antes de criar a pessoa
const p2 = new Pessoa('Pli','Leal');
//a palavra NEW cria um objeto vazio e faz o this. apontar para esse objeto vazio e retorna implicitamente esse objeto vazio para a variável.
console.log (p1.nome,p1.sobrenome);
console.log (p2.nome,p2.sobrenome);

console.log('-> Método em função construtora:');
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
 
    this.metodo = function() { //Posso também criar um método usando this.nomeMetodo = função ou arrow function
        console.log(`${this.nome}: sou um método.`); //Dessa froma eu posso chamar o meu método no meu escopo.
    };
 }
const p3 = new Pessoa2('Cristina','Dehon');
p3.metodo(); //Aí posso chamar meu método quando precisar.

console.log('->Variável e Método Interno em função construtora:');
//Pode ser necessário criar algo (atributos ou método) interno na minha função construtora
function Pessoa3(nome, sobrenome) {
    const id = 1; //Para isso eu vou simplismente criar uma constante.
    //Esses métodos e atributos internos não podem ser chamados fora da função Pessoas3 mesmo com a notação de . p4.metodoInterno não fuciona
    //Por isso são consideredos métodos ou atributos privados
    //Enquanto métodos e atributos com this. são públicos e podem ser acessados fora da função com notação de .
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    //Para criar um método interno também crio uma constante e atribuo minha função
    const nomeCompleto = () => { //Crio meu método interno / privado
        return `${id} - ${this.nome} ${this.sobrenome}`; //Retorno a junção do meu atributo privado id e meus atributos públicos nome e sobrenome.
    };
    this.metodo = () => { //Depois posso ter um método público
        console.log(`${nomeCompleto()}: sou um método.`); //Que chama e executa meu método privado dentro da função construtora para depois externalizar o seu resultado.
    };
    //note que quando eu crio um método privado dentro de uma função construtora preciso de usar uma arrow function para manter o this. referindo ao meu objeto. Se eu usar function() {} quando eu chamar meu atributo this.nome ou .sobrenome será retornado undefined pq não existe esse atributo dentro do meu método.
}

const p4 = new Pessoa3('Valentina','Fernandes');
p4.metodo();