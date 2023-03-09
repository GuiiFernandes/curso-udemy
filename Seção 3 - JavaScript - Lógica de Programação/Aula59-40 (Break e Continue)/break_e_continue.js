console.log('BREAK E CONTINUE');
//Break e continue nos permite ter controle de quando pular um elemento ou quebrar o laço.
//Funcionam em todas as estruturas de repetição.
const num=[1,2,3,4,5,6,7,8,9]; //crio um array com números
console.log('-> Break e Continue com FOR:');
for (let n of num) { //crio um for of para iterar o meu array
    if (n===2 || n===4) { //Se n for 2 OU 4
        console.log(`pulei o número ${n}`);
        continue; //O continue pula para a próxima iteração e não executa o que está abaixo.
    } else if (n===6) { //Dependendo posso usar mais de uma condição e ter mais de um continue dentro do meu laço de repetição.
        console.log(`pulei o número ${n}`);
        continue;
    }
    if (n===7) { //Se n for 8
        //O break é muito bom para poupar recurso do computador para melhorar a velocidade do código.
        console.log(`número ${n} encontrado, finaliza`);
        break; //O break vai encerrrar o laço de repetição e não executar mais nada da minha estrutura de repetição.
    }
    console.log(n);
}
//Com for, usar continue e break é tranquilo.

console.log('-> Break e Continue com While:');
//Quando usamos com while temos que ficar atento ao contador.
//Precisamos incluí-lo na condição do continue, se não vamos criar um laço infinito.
let i=0; //crio uma variável de controle
while (i<num.length) { //crio um while que itera meu array
    let n=num[i]; //crio uma variável para armazenar o valor do index do array
    if (n===1 || n===3) { //SE o valor for 1 OU 3
        console.log(`pulei o número ${n}`); //pulo o número
        i++; //acrescento um no contador
        continue; //uso o continue para ir para o próximo sem exibir o número
    } else if (n===5) { //SE o valor for 5
        console.log(`pulei o número ${n}`);
        i++;
        continue; //Faço o mesmo que o anterior
    }
    if (n===8) { //Se o valor for 8
        console.log(`número ${n} encontrado, finaliza`); //Encontrei meu número
        break; //encerro a repetição sem exibir o que está abaixo
    }
    console.log(n); //Exibo o valor
    i++; //Sempre no while usamos o contador no final.
}