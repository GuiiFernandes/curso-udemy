//Escreva uma função que recebe um número e retorne:
//Número divisível por 3 = Fizz
//Número divisível por 5 = Buzz
//Número divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número = Retorna o valor
//Use a função com números de 0 a 100

function fizzBuzz(numero) { //Crio a função
    //Primeiro analiso se meu dado é diferente de number, se sim, retorno o valor
    if (typeof numero !== 'number') return numero;
    //Segundo analiso se é divisível por 5 e 3, se sim, retorno 'FizzBuzz'
    if (numero%3===0 && numero%5===0) return 'FizzBuzz'; //É importante ter esse antes, pq se eu analisar os debaixo primeiro, vou encerrar a função se o número for divisível só por 3 ou 5..
    //Aí analiso é divisível só por 3.
    if (numero%3===0) return 'Fizz';
    //Analiso se é divisível por 5.
    if (numero%5===0) return 'Buzz';
    return numero
}

console.log('a', fizzBuzz('a'));
for (let i=0; i<=100; i++) { //For clássico para repetir 100x meu fizzbuzz
    console.log(i, fizzBuzz(i));
}