// Capturar evento de submit do formulário
const form=document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso=e.target.querySelector('#peso'); //e.target = informa o elemento que está recebendo o evento, nesse caso é form.
    const inputAltura=e.target.querySelector('#altura'); //pega o que está o input altura e atribui a variável inputAltura em formato de String.

    const peso=Number(inputPeso.value); //Transforma o dado do input de String para Number
    const altura=Number(inputAltura.value); //Transforma o dado do input de String para Number

    //No input o usuário pode inserir um texto, o que inválida minha conta, se isso acontecer o peso=Number(inputPeso.value) tem valor NaN, sabendo que NaN é um FALSY podemos dizer que SE peso for False, o peso é inválido.
    if (!peso) { //if (peso) = Se o peso for True | if (!peso) = Se o peso for False
    //! = Não, portanto se lê "Se o peso NÃO for True.".
        setResultado('Peso inválido.', false); //Meu resultado é "Peso inválido.".
        return; //Uso o return porquê sempre que quero parar minha função no meio do caminho o return vai fazer isso.
    }

    if (!altura) { //Faço o mesmo para altura.
        setResultado('Altura inválida.', false); //quando eu coloco isValid como false, automaticamente adiciono a classe bad ao p.
        return;
    }

    const imc=getImc(peso, altura); //Chama a função que calcula o imc do usuário e atribui o seu retorno para a variável imc
    const nivelImc=getNivelImc(imc); //chama a função que avalia o imc e armazena o resultado dentro da variável nivelImc

    const msg=`Seu IMC é ${imc} (${nivelImc}).`; //armazena o resultado dentro da variável msg

    setResultado(msg, true); //chama a função que mostra a mensagem na tela.
});
//Sempre vamos fazer pequenas funções ao longo do código que fazem poucas coisas.
//Nesse exercício vamos dividir o mínimo possível para facilitar o entendimento.
//Posso criar funções em qualquer parte do meu código.

function getNivelImc (imc) { //Função que avalia o imc do usuário
    const nivel=['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',  'Obesidade grau 2', 'Obesidade grau 3']; //Crio um array com as possibilidades de avaliações

    //Inicio meu if com o maior valor, pois se for menor que ele já vai direto para o próximo, isso elimina a necessidade de escrever, por exemplo, if (imc>=34.9 && imc <39.9) {}
    if (imc>=39.9) { //Se o imc for maior ou igual a 39.9
        return nivel[5]; //Retorno 'Obesidade grau 3'.
    }
    //Como tenho return dentro do meu primeiro if, se essa condição for satisfeita todas as demais são ignoradas.
    if (imc>=34.9) { //Se imc for maior ou igual a 34.9 (Neste caso já sabemos que ele não é maior ou igual a 39.9)
        return nivel[4]; //retorna 'Obesidade grau 2'.
    }  //E assim por diante ....
    if (imc>=29.9) return nivel[3]; //Se o if é muito pequeno, não preciso das chaves e posso colocar a ação na mesma linha da condição ou na debaixo.
    if (imc>=24.9) return nivel[2];
    if (imc>=18.5) return nivel[1];
    if (imc<18.5) return nivel[0];
}

function getImc (peso, altura) { //Função que calcula o imc do usuário
    const imc=peso/altura**2; //crio uma variável para receber o resultado da conta
    return imc.toFixed(2); //retorno o valor com 2 casas decimais.
}

function criaP () { //função que cria um parágrafo
    const p=document.createElement('p'); //crio um parágrafo e atribuo ele a uma variável p.
    return p
}

/* 
*/

function setResultado (msg, isValid) { //função que adiciona a mensagem a página
//msg é o parâmetro da mensagem, isValid é o parâmetro que define meu fundo.
    const resultado = document.querySelector('#resultado'); //atribuo a div com id resultado a uma variável
    resultado.innerHTML = ''; //limpo a minha div resultado
    
    const p = criaP(); //Chamo a função que cria meu parágrafo

    if (isValid) { //Se a isValid for True,
        p.classList.add('paragrafo-resultado'); //Cria uma class para o paragráfo criado em p que tem fundo verde
        //add= adiciona | classList= lista de classe | p=paragrafo - "Adiciona classe no parágrafo."
    } else { //Se não, (isValid=False)
        p.classList.add('bad'); //Cria uma classe para p com fundo vermelho.
    }

    p.innerHTML=msg; // adiciono o texto dentro da minha variável p que já tem o parágrafo.
    //Até aqui nada acontece se eu enviar o fomulário.
    resultado.appendChild(p); //appendChild insere um filho a um elemento html atribuido em uma variável. Dessa forma, eu adiciono o texto armazenado em p dentro da div resultado.

}