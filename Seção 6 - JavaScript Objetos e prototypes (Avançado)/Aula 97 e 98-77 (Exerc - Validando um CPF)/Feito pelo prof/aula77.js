function ValidaCPF(cpfEnviado) { //Crio uma função construtora que vai receber um parâmetro cpfEnviado
    Object.defineProperty(this, 'cpfLimpo', { //Uso o property pra criar um atributo cpfLimpo que vai limpar os '.' e '-' do meu cpf
        get: function() { //e crio um get
            return cpfEnviado.replace(/\D+/g, ''); //que vai limpar os '.' e '-' do meu cpf com uma expressão regular
            //Essa expressão vai substituir tudo que não é número (/\D+/g) em cpfEnviado por vazio ('').
        }
    })
}
//Crio um método para o proto de validaCPF.
ValidaCPF.prototype.valida = function() { // Esse método vai validar meu cpf
    if (typeof this.cpfLimpo === 'undefined') return false; //Se  meu atributo cpfLimpo for 'undefined', retorna false (cpf inválido)
    if (this.cpfLimpo.length !== 11) return false; //Se meu atributo cpfLimpo tem mais de 11 caracteres, retorna false (cpf inválido)
    if (this.isSequencia()) return false; //Se meu atributo cpfLimpo é uma sequencia do mesmo número, retorna false (cpf inválido)
    const cpfParcial = this.cpfLimpo.slice(0, -2); //Atribuo a cpfParcial o meu cpfLimpo sem os dois últimos digitos.
    const digito1 = this.criaDigito(cpfParcial); //Atribuo a digito1 o retorno do método criaDigito do proto de ValidaCPF com cpfParcial
    const digito2 = this.criaDigito(cpfParcial + digito1); //Atribuo a digito2 o retorno do método criaDigito do proto de ValidaCPF com cpfParcial concatenado com digito1
    const novoCpf = cpfParcial + digito1 + digito2; //Atribuo a novoCpf a concatenação de cpfParcial, digito1 e digito2
    return novoCpf === this.cpfLimpo; //Retorno true se novoCpf for estritamente igual ao atributo cpfLimpo;
};
//Crio no prototype de ValidaCPF o método que vai calcular e falar qual tem que ser o próximo digito do CPF.
ValidaCPF.prototype.criaDigito = function(cpfParcial) { //Essa função recebe o parâmetro cpfParcial que é a string do meu cpfLimpo
    const cpfArray = Array.from(cpfParcial); //Atribuo a cpfArray um array onde cada caractere da String cpfParcial vai ser um elemento
    let regressivo = cpfArray.length + 1; //regressivo é o comprimento do meu cpfArray + 1 (ou seja, se o tamanho de cpfArray for 9 = regressivo começa a contar em 10, se for 10, começa a contar em 11)
    const total = cpfArray.reduce((ac, val) => { //Atribuo a total a conta de reduce (soma dos valores) de cpfArray onde, ac = somatório e val= valor de cada elemento de cpfArray
        ac += (regressivo * Number(val)); //ac vai ser somado a expressão de regressivo multiplicado pelo valor em formato numérico.
        regressivo--; //Subtraio 1 do regressivo
        return ac; //retorno somatório
    }, 0); //Seto o ac inicial como 0
    const digito = 11 - (total % 11); //Atribuo ao digito a conta de 11 menos o resto da divisão de total (somátorio final de cpfArray.reduce) por 11
    return digito > 9 ? '0' : String(digito); //Se digito for maior que 9 retorno uma String '0', se não retorno o meu digito em formato de string
};
//Crio um método que vai avaliar se meu número é sequencia.
ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //Atribuo a sequencia o primeiro digito do meu cpfLimpo repetido pela mesma quantidade de vezes do tamanho da String cpfLimpo.
    return sequencia === this.cpfLimpo; //Retorno true se o cpfLimpo for uma sequencia e false se não for.
}

const cpf = new ValidaCPF('705.484.450-52'); //Instância de criação do objeto ValidaCPF
//Utilizando o validador na prática
if (cpf.valida()) { //A qualquer momento em um sistema posso tentar validar um cpf e retornar algo para o usuário ou para alguma outra ação no sistema.
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}