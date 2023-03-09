const validacao = validaCpf();
validacao.inicia();

function validaCpf () {
    return {
        inicia(){
            this.pressionaBotao();
            this.btnEnviar();
        },

        btnEnviar() {
            document.addEventListener('click', (e) => {
                const el= e.target;
                if (el.classList.contains('btn-validar')){
                    this.cpf= document.getElementById('cpf');
                    this.validacao();
                    
                }
            });
        },

        pressionaBotao() {
            document.addEventListener('keyup', (e) => {
                if (e.keyCode===13) {
                    this.cpf = document.getElementById('cpf');                    
                    this.validacao();
                }
            });
        },

        validacao() {
            if (this.cpf.value.length === 11 && Number(this.cpf.value) !== NaN) {
                let cpfArray = this.calculo(Array.from(this.cpf.value).slice(0,-2));
                cpfArray = this.calculo(cpfArray);
                let cpfcriado = '';
                for (let n of cpfArray){
                    cpfcriado += n;
                }
                console.log(cpfcriado, this.cpf.value, cpfcriado === this.cpf.value);
                if (cpfcriado === this.cpf.value) {
                    alert('CPF VÁLIDO!');
                } else {
                    alert('CPF INVÁLIDO!');
                }
            } else {
                alert('CPF digitado incorretamente!');
            }
        },

        calculo(cpfArray) {
            let cont = cpfArray.length === 9 ? 10 : 11;
            const cpfAtual = cpfArray.map(valor => {
                let novoValor = Number(valor)*cont;
                cont -= 1;
                return novoValor;
            });
            const soma = cpfAtual.reduce((soma, valor) => soma += valor, 0);
            cpfArray.push(`${11-(soma % 11)>9 ? 0 : 11-(soma % 11)}`);
            return cpfArray;
        }
    }
}