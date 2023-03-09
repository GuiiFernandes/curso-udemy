(function() {
    function Calculadora() {
        this.display= document.querySelector('.display');

        this.inicia= () => {
            cliqueBotoes();
            pressionaEnter();
        };

        const cliqueBotoes= () => {
            document.addEventListener('click', (e) => {
                const el= e.target;
                if (el.classList.contains('btn-num')) {
                    btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    igual();
                }
            });
        };

        const pressionaEnter= () => {
            document.addEventListener('keyup', (e) => {
                if (e.keyCode===13) {
                    igual();
                }
            });
        };

        const btnParaDisplay= (valor) => {
            this.display.value += valor;
            this.display.focus();
        };

        const clearDisplay= () => {
            this.display.value='';
        };

        const apagaUm= () => {
            this.display.value=this.display.value.slice(0,-1);
        };

        const igual= () => {
            let conta= this.display.value;
            try {
                conta= eval(conta);
                if(!conta && conta!==0) {
                    alert('CONTA INVÁLIDA!');
                    return;
                }
                this.display.value = String(conta);
                this.display.focus();
            } catch(e) {
                alert('CONTA INVÁLIDA!');
                return;
            }
        };
    }
    const calculadora= new Calculadora();
    calculadora.inicia();
})();