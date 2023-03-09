//Escreva uma função que recebe um número e retorne:
//Número divisível por 3 = Fizz
//Número divisível por 5 = Buzz
//Número divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número = Retorna o valor
//Use a função com números de 0 a 100

function fizzBuzz(i) {
    let div='';
    if (typeof(i)=='number') {
        if (i%3===0) {
            div+='Fizz';
        }
        if (i%5===0) {
            div+='Buzz';
        }
        if (div===''){
            div=i;
        }
        return div
    } else {
        return i
    }
}

for (let i=0; i<=100; i++) {
    console.log(fizzBuzz(i));
}