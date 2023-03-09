function meuEscopo() {
    const form=document.querySelector('.form');
    const thead=document.querySelector('.thead');
    const tbody=document.querySelector('.tbody');
    const bd=[];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const data=form.querySelector('#data');
        let peso=form.querySelector('#peso');
        let altura=form.querySelector('#altura');
        let varimc;
        peso=parseFloat(peso.value);
        altura=parseFloat(altura.value);
        //VALIDAÇÃO PESO E ALTURA:
        if (peso>=20 && peso<=250 && altura>=1 && altura <=3 && data.value) {
            let imc=(peso/(altura**2)).toFixed(2);
            imc=parseFloat(imc);
            if (bd!='') {
                varimc=parseFloat(imc-bd[bd.length-1].imc);
                varimc=varimc.toFixed(2);
            } else {
                varimc=0;
                thead.innerHTML+=`<tr>
                    <th>Data</th>
                    <th>IMC</th>
                    <th>Variação IMC</th>
                    <th>Avaliação</th>
                </tr>`;
            }

            let avaliacao;
            if (imc<18.5) {
                avaliacao='Abaixo do peso';
            } else if (imc>=18.5 && imc<25) {
                avaliacao='Peso normal';
            } else if (imc>=25 && imc<30) {
                avaliacao='Sobrepeso';
            } else if (imc>=30 && imc<35) {
                avaliacao='Obesidade grau 1';
            } else if (imc>=35 && imc<40) {
                avaliacao='Obesidade grau 2';
            } else {
                avaliacao='Obesidade grau 3';
            }

            bd.push({
                data: data.value,
                peso: peso,
                altura: altura,
                imc: imc,
                varimc: varimc,
                avaliacao: avaliacao
            });
            
            tbody.innerHTML+=`<tr>
                <td>${data.value[8]}${data.value[9]}-${data.value[5]}${data.value[6]}-${data.value[0]}${data.value[1]}${data.value[2]}${data.value[3]}</td>
                <td>${imc}</td>
                <td>${varimc}</td>
                <td>${avaliacao}</td>
            </tr>`;
        } else {
            alert('Algum dado inserido é inválido!');
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();