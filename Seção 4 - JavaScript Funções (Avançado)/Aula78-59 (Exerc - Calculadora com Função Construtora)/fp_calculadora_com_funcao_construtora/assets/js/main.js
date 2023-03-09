//Vamos recriar nossa calculadora usando funções construtoras.
function Calculadora() { //Crio minha função calculadora
    this.display = document.querySelector('.display'); //Pego o meu .display

    this.inicia = () => { //Crio o método que inicia minha calculadora
        this.capturaCliques(); //Chamo os métodos que capturam clique
        this.capturaEnter(); //E que capturam o Enter
    };
    this.capturaCliques = () => { //Crio o método de capturar o clique
        document.addEventListener('click', event => { //quando houver o evento de clique eu executo uma arrow function salvando o que eu cliquei em event
            const el= event.target; //Pego o target do evento e salvo em el.
            if (el.classList.contains('btn-num')) this.addNumDisplay(el); //Se el contém a classe btn-num eu executo o método addNumDisplay com o parâmetro el.
            if (el.classList.contains('btn-clear')) this.clear(); //Se el contém a classe btn-clear eu executo o método clear
            if (el.classList.contains('btn-del')) this.del();  //Se el contém a classe btn-del eu executo o método del
            if (el.classList.contains('btn-eq')) this.realizaConta(el); //Se el contém a classe btn-eq eu executo o método realizaConta com o parâmetro el.
        });
    };
    this.capturaEnter = () => { //Crio o método para capturar o Enter.
        document.addEventListener('keyup', e =>{ //quando houver o evento de keyup eu executo uma arrow function salvando o botão em e
            if (e.keyCode!== 13) return; //Se o keycode de e for diferente de 13 (enter) eu faço um retorno para sair do método
            this.realizaConta(); //Se eu não sair do método no if acima eu realizo a conta com o método realizaConta.
        });
    };
    this.addNumDisplay = el => { //Crio o método que adiciona o número clicado no display usando o parâmetro el
        this.display.value+= el.innerText  //display vai adicionar ao que já tem + o texto de el
        this.display.focus(); //coloco o foco no display para não ficar no botão clicado e adicionar o botão novamente quando eu clicar em enter.
    };
    this.clear = () => this.display.value=''; //Crio o método clear, arrow function que limpa o display
    this.del = () => this.display.value= this.display.value.slice(0,-1); //Crio o método del, arrow function que substitui o que está no display pelo que está no display subtraido do último caractere. display.slice(de: 0, a: *fim*-1).
    this.realizaConta= () => { //Crio o método realizaConta
        try { //Se tiver algum erro dentro da minha conta executo o catch
            const conta = eval(this.display.value); //Faço o eval do que está no meu display para fazer com que meu display seja executado como um código JS.
            if(!conta) { //Se conta foi Falsy (NaN, undefined, null, etc..)
                alert('Conta inválida'); //Mostro o alerta de erro
                return; //Finalizo meu método
            }
            this.display.value=conta; //Se eu não finalizar o meu método no if acima, eu coloco o resultado de conta no display
        } catch(e) { //Se houver algum erro durante o processo de conta
            alert('Conta inválida'); //mostro um alerta de erro
            return; //e saio do método.
        }
    };
}

const calculadora= new Calculadora(); //Estou falando para o JS usar o meu molde (função construtora) para criar um novo objeto de calculadora.
calculadora.inicia(); //Chamo o método inicia para deixar o meu JS alerta para a ação do meu usuário.