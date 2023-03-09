function meuEscopo() {
    const relogio=document.querySelector('.timer');
    const divBotao=document.querySelector('.button');
    let dadoRecup = carregaDadoSalvo('relogio');
    if (dadoRecup) relogio.innerHTML= dadoRecup
    let seg=0;
    dadoRecup=carregaDadoSalvo('seg');
    if (dadoRecup) seg=Number(dadoRecup);
    let timer;

    document.addEventListener('click', function(e) {
        const el=e.target;
        if (el.classList.contains('bc-h')) {
            if (relogio.innerHTML.slice(0,2)==="23" || relogio.classList.contains('iniciado')) return
            seg+=3600;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        }   
        if (el.classList.contains('bc-m')) {
            if (relogio.innerHTML.slice(3,5)==="59" || relogio.classList.contains('iniciado')) return
            seg+=60;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        }
        if (el.classList.contains('bc-s')) {
            if (relogio.innerHTML.slice(6)==="59" || relogio.classList.contains('iniciado')) return
            seg++;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        }
        if (el.classList.contains('bb-h')) {
            if (relogio.innerHTML.slice(0,2)==="00" || relogio.classList.contains('iniciado')) return
            seg-=3600;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        }
        if (el.classList.contains('bb-m')) {
            if (relogio.innerHTML.slice(3,5)==="00" || relogio.classList.contains('iniciado')) return
            seg-=60;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        }
        if (el.classList.contains('bb-s')) {
            if (relogio.innerHTML.slice(6)==="00" || relogio.classList.contains('iniciado')) return
            seg--;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        }
        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            rodaTimer();
            if (relogio.classList.contains('pausado')) {
                divBotao.removeChild(document.querySelector('.parar'));
            }
            criaBotao('PAUSAR','pausar','Pausar Contagem do Timer.',divBotao);
            criaBotao('PARAR','parar','Para a Contagem e zera o Timer.');
            relogio.classList.add('iniciado');
            relogio.classList.remove('pausado');
            divBotao.removeChild(document.querySelector('.iniciar'));
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer)
            divBotao.removeChild(document.querySelector('.parar'));
            criaBotao('INICIAR','iniciar','Iniciar contagem do Timer.',divBotao);
            criaBotao('PARAR','parar','Para a Contagem e zera o Timer.',divBotao);
            divBotao.removeChild(document.querySelector('.pausar'));
        }
        if (el.classList.contains('parar')) {
            clearInterval(timer);
            relogio.innerHTML="00:00:00";
            seg=0;
            salvaDado('relogio',relogio.innerText);
            salvaDado('seg',"0");
            relogio.classList.remove('iniciado');
            if (relogio.classList.contains('pausado')) divBotao.removeChild(document.querySelector('.iniciar'));
            if (!relogio.classList.contains('pausado')) divBotao.removeChild(document.querySelector('.pausar'));
            criaBotao('INICIAR','iniciar','Iniciar contagem do Timer.',divBotao);
            divBotao.removeChild(document.querySelector('.parar'));
        }
    });

    function rodaTimer() {
        timer=setInterval(function() {
            if (relogio.innerHTML==="00:00:00") {
                clearInterval(timer);
                relogio.classList.remove('iniciado');
                divBotao.removeChild(document.querySelector('.pausar'));
                divBotao.removeChild(document.querySelector('.parar'));
                criaBotao('INICIAR','iniciar','Iniciar contagem do Timer.',divBotao);
                const audio=document.createElement('audio');
                audio.setAttribute('src','./assets/sons/gravando.m4a');
                audio.volume=1.0;
                audio.play()
                return
            }
            seg--;
            relogio.innerHTML=ajustaHora(seg);
            salvaDado('seg',seg.toString());
        },1000);
    }

    function criaBotao(textB,classB,titleB) {
        const botao= document.createElement('button');
        botao.innerText=textB;
        botao.setAttribute('class', classB);
        botao.setAttribute('title', titleB);
        divBotao.appendChild(botao);
    }

    function ajustaHora(tempo) {
        const data= new Date(tempo*1000).toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
        salvaDado('relogio',data.toString());
        return data
    }

    function salvaDado(nomeBd,dado) {
        localStorage.setItem(nomeBd,JSON.stringify(dado));
    }

    function carregaDadoSalvo (nomeBd) {
        const dadoSalvo= JSON.parse(localStorage.getItem(nomeBd));
        if (dadoSalvo) return dadoSalvo
    }
}

meuEscopo();