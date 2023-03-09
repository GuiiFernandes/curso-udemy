(function() {
    function criaCalculadora() {
        return {
            display: document.querySelector('.display'),

            inicia() {
                this.cliqueBotoes();
                this.pressionaEnter();
            },

            cliqueBotoes() {
                document.addEventListener('click', (e) => {
                    const el= e.target;
                    if (el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                        
                    }
                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }
                    if (el.classList.contains('btn-del')) {
                        this.apagaUm();
                    }
                    if (el.classList.contains('btn-eq')) {
                        this.igual();
                    }
                });
            },

            pressionaEnter() {
                document.addEventListener('keyup', (e) => {
                    if (e.keyCode===13) {
                        this.igual();
                    }
                });
            },

            btnParaDisplay(valor) {
                this.display.value += valor;
                this.display.focus();
            },

            clearDisplay() {
                this.display.value='';
            },

            apagaUm() {
                this.display.value=this.display.value.slice(0,-1);
            },

            igual () {
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
            }
        };
    }
    const calculadora=criaCalculadora();
    calculadora.inicia();
})();