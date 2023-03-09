function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpf', {get: () => cpfEnviado});
}

ValidaCPF.prototype.valida = function() {
    if (this.cpf.length !== 11 && Number(this.cpf) === NaN && this.isSequencia()) return false;
    let cpfParcial = this.cpf.slice(0,-2);
    for(let i=1; i<=2; i++) {
        cpfParcial+= this.criaDigito(cpfParcial);
    }
    console.log(cpfParcial);
    return this.cpf === cpfParcial;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    return 11-(total%11)>9 ? '0' : String(11-(total%11));
};

ValidaCPF.prototype.isSequencia = function() {
    return this.cpf[0].repeat(this.cpf.length) === this.cpf
};

function validaCpf () {
    return {
        inicia(){
            this.pressionaBotao();
            this.btnEnviar();
        },

        btnEnviar() {
            document.addEventListener('click', (e) => {
                const el= e.target;
                e.preventDefault();
                if (el.classList.contains('btn-validar')){
                    this.validacao();
                }
            });
        },

        pressionaBotao() {
            document.addEventListener('keyup', (e) => {
                if (e.keyCode===13) {
                    e.preventDefault(); 
                    this.validacao();
                }
            });
        },

        validacao() {
            this.cpf= new ValidaCPF(document.getElementById('cpf').value);
            if (this.cpf.valida()) {
                alert('CPF válido');
            } else {
                alert('CPF inválido');
            }
        }
    }
}

const validacao = validaCpf();
validacao.inicia();