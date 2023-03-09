//Escreva uma função que recebe um número e retorne:
//Número divisível por 3 = Fizz
//Número divisível por 5 = Buzz
//Número divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número = Retorna o valor
//Use a função com números de 0 a 100

function fizzBuzz(i) {
    if (typeof i !=='number') return i;
    if (i%3===0 && i%5===0) return 'FizzBuzz';
    if (i%3===0) return 'Fizz';
    if (i%5===0) return 'Buzz';
    return i;
}

console.log('a',fizzBuzz('a'));
for (let i=0; i<=100; i++) {
    console.log(i,fizzBuzz(i));
}