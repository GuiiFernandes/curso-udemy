console.log('FUNÇÕES FÁBRICAS (FACTORY FUNCTIONS):');
//Função fábrica ou Factory Functions, são funções que retornam objetos. Já vimos isso anteriormente.
//Vimos que:
function criaPessoa(nome,sobrenome) { //crio uma função com os atributos do meu objeto como parâmetro.
    return { //Retorno um objeto com os parâmetros como atributo do meu objeto.
        nome, sobrenome
    };
}

const p1 = criaPessoa('Gui','Fernandes'); //Crio uma pessoa
console.log(p1); //Exibo esse objeto.

console.log('->Função dentro de objeto, dentro de uma função fábrica:');
function criaPessoa2(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) { //atribuo a um parâmetro do meu objeto uma função com um parâmetro chamado assunto
            return `Oi ${nome} ${sobrenome}, o que você quer saber sobre ${assunto}?`; //Quando tenho uma função dentro de objeto chamo de método.
        } //Essa função retorna um texto com os atributos do objeto e o parâmetro da nossa função do objeto.
    }; //Nesse exemplo, é mais performático eu acessar os dados através do parâmetro da função, mas para a didatica
    //Vamos usar o this. para acessar o atributo do meu objeto. Mas eu não precisaria dele.
}

const p2=criaPessoa2('Gui','Fernandes');
console.log(p2); //Quando imprimo p2, o atributo fala vai retornar uma function.
console.log(p2.fala('JS')); //Agora sim, eu chamo p2. minha função e coloco 'JS' como dado para o parâmetro assunto.

//Se eu tentar acessar um atributo do meu objeto que não está especificado como parâmetro da minha função preciso usar this. para acessar ex.:
console.log('->Acessando um atributo do objeto dentro da função fábrica:');
function criaPessoa3(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala(assunto) { //tirando a palavra function é uma forma mais curta de escrever esse método
            return `${nome}, você tem ${this.peso}Kg e está ${assunto}.` //Nesse exemplo se eu não uso a palavra this, vou ter um erro de peso não está definido (peso is not defined)
        },
        peso: 70
    }
}
const p3=criaPessoa3('Pli','Leal');
console.log(p3.fala('Falando de JS'));
//this sempre se refere a pessoa que chamou o método, this.peso igual a p3.peso.
//Quem está chamando fala, que pediu para o método ser executado foi o p3, por isso this.=p3.
const p4=criaPessoa3('Gina','Leal');
console.log(p4.fala('Falando de JS')); //Se eu crio um p4, o this. assume p4.
//this. sempre vai se referir a quem chama o método. Se for window, this. assume window, pode assumir um evento de click, body do html, etc...

console.log('->Exemplo prático de funções fábrica (feito pelo prof.):');
//crio a função fábrica
function criaImc(nome,sobrenome,a,p){ //nesse caso, tenho os parâmetros a e p que vão ser atribuidos aos atributos altura e peso do meu objeto
    return { //retorno um objeto
        nome,
        sobrenome,
        altura: a, //altura recebe a
        peso: p, //peso recebe p
        imc() { //crio um método que calcula o imc
            const indice=this.peso/(this.altura**2); //chamo meus atributos peso e altura para calcular o imc
            //Neste exemplo se eu não colocar o this. peso e altura vão dar not defined. Pq esses atributos não são parâmetro da minha função fábrica portanto não podem ser acessadas no objeto sem usar o this.
            return indice.toFixed(2); //retorno meu indice com 2 casas decimais
        }
    };
};
const p5=criaImc('Pli','Leal',1.7,67); //Quando crio a pessoa, consigo acessar meu imc chamando a variável.método
const p6=criaImc('Gininha','Leal',1.65,73);
console.log(p5.imc()); //Dessa forma imprimo o valor do meu imc
console.log(p6.imc());

console.log('->Exemplo prático de funções fábrica (feito por mim):');
//Nesse meu exemplo uso o this para acessar um método dentro de outro método
function criaPessoa4(nome,sobrenome,altura,peso){ //crio a função fábrica
    return { //retorno objeto
        nome,
        sobrenome,
        altura,
        peso,
        fala() { //Tenho um método fala que vai retornar os dados do usuário, o imc e se esse imc é bom ou ruim
            const imc=this.imc(); //Como imc também é um atributo do objeto, eu preciso chamar ele com o this. Se não dá um erro de que imc não pode ser inicializado.
            //atribuo a variável imc o array retornado por imc()
            return `${nome} ${sobrenome}, tem ${altura}m e ${peso}Kg e uma IMC de ${imc[0]}. Seu imc é considarado ${imc[1]}`; //Acesso ele através do indice para compor minha frase que será exibida ao usuário.
        },
        imc() { //IMC vai calcular o IMC
            const indice=(peso/(altura**2)).toFixed(2);
            let avaliacao;
            if (indice<18.5 || indice>24.9) { //Vai avaliar se ele é bom ou ruim
                avaliacao='Ruim';
            } else {
                avaliacao='Bom';
            }
            return [indice,avaliacao]; //E retornar um array contendo o indice e a avaliacao
        }
    };
};

const p7=criaPessoa4('Rúbya','Silva',1.6,65);
const p8=criaPessoa4('Gui','Fernandes',1.69,69);
console.log(p7.fala()); //Quando eu chamar o meu método fala dentro da pessoa criada, ele automaticamente acessa imc, calcula e avalia, retorna e adiciona na frase e retorna a frase já formulada que é exibida através do console.log.
console.log(p8.fala());

console.log('->MANIPULANDO O MÉTODO DENTRO DO OBJETO:');
function criaImc2(nome,sobrenome,a,p){
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        //Para transformar meu método em um atributo do objeto, eu uso a notação get antes do método imc()
        get imc() { //get é um Getter que vai só obter o valor do método.
            const indice=this.peso/(this.altura**2);
            return indice.toFixed(2);
        },
        //Em vários casos eu vou precisar unir meus atributos para poder usar de forma fácil no meu projeto.
        //Como por exemplo, criar o nome completo da minha pessoa.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`; //Neste caso como eu quero acessar o atributo do meu objeto é obrigatório o uso do this.
            //Não usá-lo significa que eu estou acessando o parâmetro da minh função fábrica que não pode ser alterada dentro dos meus métodos. 
        },
        //* Para conseguir modificar o nome e sobrenome do meu objeto eu preciso usar um Setter que vai voltar meu nomeCompleto para função, executar uma ação e trazer novamente para um atributo
        set nomeCompleto(valor) { //Quando eu chamo set, significa que se eu atribuir algum valor (p9.nomeCompleto='Alice Moura Fernandes';) ao atributo transformado por get eu vou armazenar esse dado dentro do parâmetro valor.
            valor= valor.split(' '); //Meu dado vai vir como string 'Alice Moura Fernandes', e eu uso o .split para separar os dados pelo espaço e armazená-lo em um array, portanto valor vira um array e não é mais só uma string
            this.nome=valor.shift(); //.shift, vai pegar o primeiro dado do meu array, atribuir a this.nome e excluir ele do meu array valor;
            this.sobrenome=valor.join(' '); //.join, pega o resto do meu array e atribui a sobrenome separando os dados por um espaço (' ').
        }
    };
};

console.log('->Getter no imc:');
const p9=criaImc2('Alice','Fernandes',0.6,5); //Sendo assim, quando eu criar minha pessoa
console.log(p9.nome); //Assim como eu posso acessar os atributos do meu objeto usando p9.atributo
console.log(p9.sobrenome);
console.log(p9.imc); //Eu também acesso p9.imc, pq o get transformou meu método em atributo.
//Neste caso, se eu chamar p9.imc() retornará um erro dizendo que imc não é uma função.

console.log('->Getter e Setter no Nome, sobrenome e nomeCompleto:');
p9.nomeCompleto='Valentina Moura Fernandes'; //Só atribuindo o valor ao atributo do meu objeto não muda o valor do meu atributo mesmo usando this. ao criar o nome completo. Para isso eu preciso do Setter que vai *
console.log(p9.nomeCompleto);
console.log(p9.nome); //Assim o nome assume o valor 'Valentina'
console.log(p9.sobrenome); //sobrenome assume 'Moura Fernandes'

//A vantagem de usar uma Função fábrica é que apesar do código da função ficar extenso, depois usá-lo por infinitas vezes fica muito rápido.