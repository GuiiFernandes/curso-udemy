console.log('IF, ELSE IF E ELSE (1):');
//Vou criar uma condição para meu programa dizer bom dia, caso seja antes das 12:00.
const hora=50; //Essa é a hora, o valor é dado pelo sistema ou internet, é a hora atual
//crio a condição com if(condição) {O que fazer quando a condição for aceita.}
if (hora>=0 && hora<=11){ //Se hora estiver  entre 0 E 11.
    console.log(`Bom dia!`); //Dizer 'Bom dia!'
    //if não precisa de ; para finalizar
} else if (hora>=12 && hora<=17){ //Se hora for maior ou igual 12 e se for menor ou igual a 17.
    console.log(`Boa tarde!`); //Diz 'Boa tarde!'
} else if (hora>=18 && hora<=23) { //Se hora for menor ou igual a 23.
    console.log(`Boa noite!`);
} else {
    console.log(`Olá!`);
}

//if pode ser usado sozinho, sem else if e sem else.
//else if e else precisa ter um if antes.
//Podem ser usados quantos else if você quiser, ou nem ter else if.
//Só posso ter um else e ser no final da condição, else não leva condição.
//Ex.:
console.log('Exemplo (if e else):')
const saldoConta=10000; //Meu sistema recebe o saldo da conta bancária de alguém
if (saldoConta) { //Lembrando do short-circuit, qualquer valor que não seja um FALSY retorna true. Portanto Se meu saldo for diferente de 0.
    console.log(`Posso sair de casa!`); //Mostro a mensagem 'Posso sair de casa!'
} else { //Se não, ou seja, se meu saldo for um FALSY, ou seja, 0.
    console.log(`Não posso sair de casa!`); //Mostro a mensagem 'Não posso sair de casa!'
}