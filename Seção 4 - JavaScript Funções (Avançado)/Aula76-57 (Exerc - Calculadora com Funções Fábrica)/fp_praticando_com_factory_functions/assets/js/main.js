//Como só tenho uma calculadora eu não precisaria criar uma factory function para fazê-la, mas o intuito da aula é usar a factory function

const calculadora=criaCalculadora(); //crio uma constante para criar minha calculadora
calculadora.inicia(); //chamo o método inicia no objeto da factory function da minha calculadora

function criaCalculadora() { //Crio minha factory function
    return { //retorno o objeto
        display: document.querySelector('.display'), //o atributo display vai receber o que estiver digitado no meu display
        //Uso o document.querySelector para armazenar o meu display no atributo display

        //Para melhor organização do código deixei os atributos acima e os métodos abaixo, lembrando que métodos são funções nos atributos do meu objeto.
        inicia() { //o segundo atributo do objeto da minha factory function vai ser o inicia, que vai executar
            //Uso o this pq estou me referindo a outro método do objeto
            this.cliqueBotoes(); //a função que executa ações no clique nos meus botões
            this.pressionaEnter(); //e a função que executa ações no clique do enter
        },

        cliqueBotoes() { //método que pega o clique do botão e executa a ação na minha calculadora
            document.addEventListener('click', (e) => { //pego o eventro de clique no navegador
                //nesse addEventListener usei uma arrow function pq se eu usar function(e) {} o meu this. muda para o evento do document pq é addEventListener que chama meu código.
                //Na arrow function o evento this. não muda, continua sendo o objeto da minha factory function. Portanto, se eu precisar usar o document da função e não consigo se ela for uma arrow function
                const el= e.target; //armazeno o que foi clicado em el
                if (el.classList.contains('btn-num')) { //Se el tiver a class 'btn-num', ou seja, cliquei em algum botão da minha calculadora
                    this.btnParaDisplay(el.innerText); //Eu chamo this. (objeto, por causa da arrow function) e o método que passa o valor do botão para o display
                }
                if (el.classList.contains('btn-clear')) { //Se el tiver a class 'btn-clear', ou seja, cliquei para limpar meu display
                    this.clearDisplay(); //Eu chamo this. e o método que limpa o display
                }
                if (el.classList.contains('btn-del')) { //Se el tiver a class 'btn-del', ou seja, cliquei para apagar um caractere do meu display
                    this.apagaUm(); //Eu chamo this. e o método que apaga o último caractere do meu display
                }
                if (el.classList.contains('btn-eq')) { //Se el tiver a class 'btn-eq', ou seja, cliquei em igual
                    this.fazConta(); //Eu chamo this. e o método que faz a conta da minha calculadora
                }
            });
        },
        //Para finalizar, crio um método que vai executar a conta se o usuário clicar no enter
        pressionaEnter() { 
            document.addEventListener('keyup', (e) => { //Pego o evento de soltar um botão 'keyup'
                if (e.keyCode===13) { //Se o código do botão adicionado no meu evento for 13 (enter)
                    this.fazConta(); //Executo a conta da minha calculadora
                }
            });
        },

        btnParaDisplay(valor) { //Esse método vai pegar receber o innerText do botão armazendado em el
            this.display.value += valor; //e adiciona ao que já está no display o valor
        },

        clearDisplay() { //Esse método vai simplesmente limpar meu display
            this.display.value=''; //ele pega o valor do atributo display do meu objeto e coloca o valor vazio nele
        },

        apagaUm() { //Esse método apaga um caractere do meu display
            this.display.value=this.display.value.slice(0,-1); //atribuo ao meu display o valor que já está nele menos o último caractere
            //.slice(inicio,fim). Então pego de 0 até -1 (faltando 1 para acabar minha string)
        },

        fazConta () { //Esse método vai fazer a conta da calculadora
            let conta= this.display.value; //atribuo a variável conta o valor que está escrito no meu display
            //try é um tratamento de erro
            try { //Eu vou executar o que está dentro de try até encontrar um erro.
                //eval é um método que pega uma string e executa ela como um código js
                conta= eval(conta); //vou atribuir a conta o eval do valor que foi armazenado no meu display, isso vai executar minha conta
                //O problema é que eval executa qualquer coisa em js dentro do meu código, portanto se o usuário escreve alert('Oi'), por exemplo, no meu display. Vai aparecer um alerta no meu display. Isso é perigoso porquê permite ao usuário executar um código malicioso no meu programa. Não é recomendado o seu uso. Fizemos para didática do projeto.
                if(!conta) { //Se conta retornar um NaN, undefined ou qualquer outro Falsy
                    alert('CONTA INVÁLIDA!'); //teremos um alerta que a conta é inválida 
                    return; //e damos um retorno pra encerrar meu código
                    //Esse if vai retornar inválido se o resultado da conta for 0 pq ele é um Falsy. ficou errado no código do professor.
                }
                this.display.value = String(conta); //atribuo o valor da conta no formato de string no meu display
            } catch(e) { //Se nesse processo houver algum evento de erro.
                alert('CONTA INVÁLIDA!'); //Digo que a conta é inválida
                return; //e retorno para encerrar meu código
            }
        }
    };
}