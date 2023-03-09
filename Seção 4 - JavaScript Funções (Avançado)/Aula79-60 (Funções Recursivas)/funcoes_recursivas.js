console.log('FUNÇÕES RECURSIVAS:');
//É uma função que ela mesma se chama.
//Com ela fazemos uma função muito similar a uma estrutura de repetição.
//Existe um limite de quantidade de vezes que posso usar a recursividade de uma função. Usar muito essa função pode gerar um erro no navegador.
function recursiva(max) { //Crio uma função que vai contar números de 0 a 10 com o parâmetro max que vai ser meus números.
    console.log(max); //Mostro o valor de Max
    if (max>=10) return; //Se meu max for maior ou igual a 10 eu retorno e paro minha função.
    max++; //Preciso ter um incremento, decremento ou algo que modifique o valor da minha variável na minha função
    //Para que minha variável uma hora chegue no valor que finalize minha recursividade. Se não, terei um loop eterno.
    recursiva(max); //Chamo minha função dentro dela mesma para gerar a recursividade.
}

recursiva(0); //Chamo minha função no escopo global com o atributo o valor que desejo que max comece.
//Quando chego no limite da recursividade aparece o erro "Maximum call stack size exceeded" ou "Call Stack máximo excedido."

/*
MINHA OPINIÃO: Função recursiva desse ser muito útil quando tenho um loop que pode ou não ser infinito, para fazer ele parar uso a recursividade e o Try, se ele for infinito vai gerar um erro e executar outro código ao invés do loop.
*/