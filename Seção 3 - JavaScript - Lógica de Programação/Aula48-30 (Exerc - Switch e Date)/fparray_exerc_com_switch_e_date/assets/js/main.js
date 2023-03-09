const h1=document.querySelector('.container h1'); //seleciona o h1 dentro da classe container.
const data = new Date();
h1.innerHTML=criaData(data);

function getDiaSemanaTexto(diaSemana) {
    const diasSemana=['domingo','segunda-feira', 'terça-feira', 'quarta-feira','quinta-feira','sexta-feira','sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    const meses=['janeiro','fevereiro', 'março', 'abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num>=10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}`+
        ` de ${data.getFullYear()} ${data.getHours()}:${zeroAEsquerda(data.getMinutes())}`
        );
}