console.log('TRATANDO E LANÇANDO ERROS (TRY, CATCH, FINALLY):');
try {
    // É executado quando não há erro
    console.log('Abri um arquivo');
    console.log('Manipulando o arquivo');
    try { //Posso ter um Try dentro de outro
        console.log('--tentei conexão com outro sistema.')
        console.log(a); //Posso por exemplo, tentar conectar dois arquivos
    } catch (e) {
        console.log('--tratei erro de conexão');
    } finally {
        console.log('--fechei a conexão com finally');
    }
    console.log(naoExisto); //Se gerar um erro, mais nada abaixo vai ser executado
    console.log('Fechei o arquivo'); //Então o arquivo não será fechado nessa parte
} catch (e) {
    //É executado quando há erros
    console.log('Tratando o erro arquivo');
    //Não posso fechar o arquivo em catch, pq se não assumo que meu código vai dar erro. Neste caso fecho o aquivo no finally
} finally {
    //sempre é executado, mas pode ser omitido se não precisar que um código seja sempre executado
    console.log('Fechei o arquivo no finally.') //Fechando no finally não preciso do código que fecha o arquivo no try, pois o finally sempre vai ser executado.
}
//finally é muito útil quando preciso executar uma ação com potencial de erro, mas preciso que uma ação após a possibilidade desse erro e seu possível tratamento seja executado, independente se ele vai realmente acontecer ou não.

//SEMPRE QUE EU USAR MUITA IDENTAÇÃO (AFASTAR MUITO DA MARGEM), É UMA MÁ PRÁTICA DE PROGRAMAÇÃO. SEMPRE QUANDO AFASTO MUITO DA MARGEM, TENHO UMA SOLUÇÃO MELHOR PARA AQUELE PROBLEMA!

//Posso executar um Try dentro de outro também..
console.log('-> Try na prática:');
//Vou criar uma função que retorna a hora de uma data.
function retornaHora(data) { //Crio a função com parâmetro data
    if (data && !(data instanceof Date)) { //Se minha data for envianda e não for uma instância (tiver um formato) da função construtora Date
    //instaceof = estiver no tipo da função construtora, neste caso, Date
        throw new TypeError('Esperando instância de Date.'); //lanço o erro.
    }
    if (!data) { //Se a data não for informada.
        data=new Date(); //Uso a data atual do sistema.
    }
    return data.toLocaleTimeString('pt-BR', {  //retorno a data no formato pt-BR
        hour: '2-digit', //Hora com 2 dígitos
        minute: '2-digit', //Minuto com 2 dígitos
        second: '2-digit', //Segundo com 2 dígitos
        hour12: false //formato de 24 horas.
    });
}

try {
    let hora=retornaHora(); //Se não tenho data, retorna a data do sistema
    console.log(hora); //exibo hora do sistema.
    let data= new Date('01-01-1970 08:08:09'); //Se tenho uma data válida
    hora=retornaHora(data); //Retorna hora certa
    console.log(hora); //Exibo 08:08:09
    hora=retornaHora(11); //Se tentar colocar um número, gera um erro
} catch (e) {
    //trato erro
    //console.log(e); ->Ou exibo o erro.
} finally {
    console.log('tenha um bom dia.'); //Uso um finally que vai ser executado de todo jeito..
}