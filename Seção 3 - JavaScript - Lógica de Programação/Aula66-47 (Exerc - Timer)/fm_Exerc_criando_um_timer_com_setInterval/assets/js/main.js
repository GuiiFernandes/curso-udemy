function setResultado() {

}

function criaTd() {

}

function criaTr() {

}

function meuEscopo () {
    const relogio= document.querySelector('.relogio');
    const thead=document.querySelector('.thead');
    const tbody=document.querySelector('.tbody');
    let bd=[];
    let seconds=0;
    let timer;
    let lastTime;
    let validReinicio=false;

    function formataTempo(data) {
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone:'UTC'});
    }

    function getTimeSeconds(seg) {
        let data= new Date(seg*1000);
        lastTime=data.getTime();
        return formataTempo(data)
    }

    function startTimer() {
        timer= setInterval(function() {
            seconds++;
            relogio.innerHTML=getTimeSeconds(seconds);
        },1000);
    }

    function criaTd() {
        const td=document.createElement('td');
        return td;
    }

    function setResultado(data, cronometro, parcialTime, varTime, varTimeF) {
        const tr=document.createElement('tr');
        const td1=criaTd();
        td1.innerHTML+=`${data}`;
        const td2=criaTd();
        td2.innerHTML+=`${cronometro}`;
        const td3=criaTd();
        td3.innerHTML+=`${parcialTime}`;
        const td4=criaTd();
        if (varTime<0) {
            td4.classList.add('positivo');
        } else if (varTime>0) {
            td4.classList.add('negativo');
        }
        td4.innerHTML+=`${varTimeF}`;

        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    }

    document.addEventListener('click', function(event) {
        const element = event.target;
        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startTimer();
        }
        if (element.classList.contains('parcial')) {
            let data=new Date();
            data= data.toLocaleString('pt-BR',{dateStyle:'short', timeStyle:'short'});
            const cronometro=relogio.textContent;
            let parcialTimeMs;
            let varTimeMs=0;
            let parcialTimeFormat;
            let varTimeFormat;
            if (bd!='') {
                parcialTimeMs = validReinicio ? lastTime : lastTime-bd[bd.length-1].lastTime;
                parcialTimeFormat=formataTempo(new Date(parcialTimeMs));
                varTimeMs=parcialTimeMs-bd[bd.length-1].parcialTimeMs;
                varTimeFormat = varTimeMs<0 ? `-${formataTempo(new Date (-varTimeMs))}` : `+${formataTempo(new Date (varTimeMs))}`;
            } else {
                thead.innerHTML+=
                    `<tr>
                        <th>Data</th>
                        <th>Cronômetro</th>
                        <th>Tempo</th>
                        <th>Variação Tempo</th>
                    </tr>`;
                parcialTimeMs=lastTime;
                parcialTimeFormat=formataTempo(new Date(parcialTimeMs));
                varTimeFormat="00:00:00";
            }
            bd.push({
                data: data,
                cronometro: cronometro,
                lastTime: lastTime,
                parcialTimeMs: parcialTimeMs,
                parcialTimeFormat: parcialTimeFormat,
                varTimeMs: varTimeMs,
                varTimeFormat: varTimeFormat
            });
            setResultado(data,cronometro,parcialTimeFormat, varTimeMs, varTimeFormat);
            validReinicio=false;
        }
        if (element.classList.contains('pausar')) {
            seconds && relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if (element.classList.contains('zerar-timer')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML="00:00:00";
            seconds=0;
            validReinicio=true;
        }
        if (element.classList.contains('zerar-dados')) {
            validReinicio=true;
            bd=[];
            thead.innerHTML='';
            tbody.innerHTML='';
        }
    });
}

meuEscopo();