//FUNÇÃO GLOBAL DA PÁGINA
function meuEscopo() {
    //DECLARAÇÕES DE VARIÁVEIS
    const form=document.querySelector('.form');
    const thead=document.querySelector('.thead');
    const tbody=document.querySelector('.tbody');
    const bd=[];
    const aval=['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',  'Obesidade grau 2', 'Obesidade grau 3'];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const data=e.target.querySelector('#data');
        let peso=e.target.querySelector('#peso');
        let altura=e.target.querySelector('#altura');
        peso=parseFloat(peso.value);
        altura=parseFloat(altura.value);
        
        //VALIDAÇÃO PESO E ALTURA:
        if (!data.value) {
            alert(`Data inválida!`);
            return;
        }
        if (peso<20 || peso>250 || !peso) {
            alert(`Peso inválido!`);
            return;
        }
        if (altura<1 || altura>3 || !altura) {
            alert(`Altura inválida!`);
            return;
        }
        
        //CÁLCULO IMC
        const imc=getImc(peso,altura);

        //CÁLCULO VARIAÇÃO IMC
        let varImc=0;    
        if (bd!='') {
            varImc=getVarImc(imc,bd);
        } else {
            thead.innerHTML+=
                `<tr>
                    <th>Data</th>
                    <th>IMC</th>
                    <th>Variação IMC</th>
                    <th>Avaliação</th>
                </tr>`;
        }

        //CÁLCULO DE AVALIAÇÃO IMC
        const avalImc=getAvalImc(imc,aval);

        //ADICIONA OS DADOS AO ARRAY BANCO DE DADOS
        bd.push({
            data: data.value,
            peso: peso,
            altura: altura,
            imc: imc,
            varImc: varImc,
            avalImc: avalImc
        });

        //INSERE OS DADOS NA PÁGINA
        setResultado(data.value,imc,varImc,avalImc,aval);
    });

    //FUNÇÃO QUE CRIA O DADO (TD) DA TABELA
    function criaTd() {
        const td=document.createElement('td');
        return td
    }

    //FUNÇÃO QUE CRIA A LINHA (TR) DA TABELA
    function criaTr() {
        const tr=document.createElement('tr');
        return tr
    }

    //FUNÇÃO QUE INSERI O RESULTADO NA PÁGINA
    function setResultado(data,imc,varImc,avalImc,aval) {
        const tr= criaTr();

        const td1= criaTd();
        td1.innerHTML+=`${data[8]}${data[9]}/${data[5]}${data[6]}/${data[0]}${data[1]}${data[2]}${data[3]}`;

        const td2= criaTd();
        td2.innerHTML+=`${imc}`;

        const td3= criaTd();
        if (varImc<0) {
            td3.classList.add('positivo');
        } else if (varImc>0) {
            td3.classList.add('negativo');
        }
        td3.innerHTML+=`${varImc}`;

        const td4= criaTd();
        if (avalImc==aval[0] || avalImc==aval[1]) {
            td4.classList.add('positivo');
        } else if (avalImc==aval[2] || avalImc==aval[3]) {
            td4.classList.add('alerta');
        } else if (avalImc==aval[4] || avalImc==aval[5]) {
            td4.classList.add('negativo');
        }
        td4.innerHTML+=`${avalImc}`;

        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    }

    //FUNÇÃO QUE CALCULA O IMC
    function getImc(peso,altura) {
        const imc=peso/altura**2;
        return imc.toFixed(2);
    }

    //FUNÇÃO QUE CALCULA A VARIAÇÃO DO IMC
    function getVarImc (imc,bd) {
        const varimc=parseFloat(imc-bd[bd.length-1].imc);
        return varimc.toFixed(2);
    }

    //FUNÇÃO QUE AVALIA O IMC
    function getAvalImc (imc,aval) {
        const avaliacao=aval;

        if (imc>=39.9) return avaliacao[5];
        if (imc>=34.9) return avaliacao[4];
        if (imc>=29.9) return avaliacao[3];
        if (imc>=24.9) return avaliacao[2];
        if (imc>=18.5) return avaliacao[1];
        if (imc<18.5) return avaliacao[0];
    }
}

//CHAMA FUNÇÃO GLOBAL NA PÁGINA.
meuEscopo();