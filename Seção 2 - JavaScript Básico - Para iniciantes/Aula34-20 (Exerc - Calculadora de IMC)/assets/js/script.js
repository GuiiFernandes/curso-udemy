function meuEscopo() { //Função que protege meu escopo global.
    const form=document.querySelector('.form'); //cria a variável que refere ao formulário HTML
    const resultado=document.querySelector('.resultado'); //cria a variável que se refere a área de resultados.
    const pessoas=[]; //cria o array que vai receber os objetos dos campos preenchidos.

    function recebeEventoForm (evento) { //função que captura os dados e evita o envio do formulário quando um evento acontece.
        evento.preventDefault(); //preventDefaut previne que o evento padrão do navegador aconteça.
        const data=form.querySelector('#data');
        const nome=form.querySelector('#nome');
        const sobrenome=form.querySelector('#sobrenome');
        const peso=form.querySelector('#peso');
        const altura=form.querySelector('#altura');
        pesoNumber=Number(peso.value);
        alturaNumber=Number(altura.value);
        let imc=pesoNumber/(alturaNumber**2);
        imc=Number(imc.toFixed(2));
        let varimc=0;
        
        if (pessoas!='') {
            varimc=Number(imc-pessoas[pessoas.length-1].imc);
            varimc=Number(varimc.toFixed(2));
        }

        pessoas.push({
            data: data.value,
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: pesoNumber,
            altura: alturaNumber,
            imc: imc
        });

        resultado.innerHTML+=
        `<p>${data.value[8]}${data.value[9]}-${data.value[5]}${data.value[6]}-${data.value[0]}${data.value[1]}${data.value[2]}${data.value[3]} - ${nome.value} ${sobrenome.value} - ${pesoNumber} Kg - ${alturaNumber} m - ${imc} - (${varimc})</p>`;
    }

    form.addEventListener('submit', recebeEventoForm); //Executa a função recebeEventoForm, quando o botão de submit é apertado no form.
}
meuEscopo(); //chama minha função no escopo global