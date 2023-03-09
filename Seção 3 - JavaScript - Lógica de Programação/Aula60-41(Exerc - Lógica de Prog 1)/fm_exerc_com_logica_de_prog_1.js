//Escreva uma função que recebe 2 números e retorne o maior deles.
const n1=5;
const n2=5;
function comparaNum(n1,n2) {
    if (n1>n2) {
        return 'O primeiro número é maior.'
    } else if (n1<n2) {
        return 'O segundo número é maior.'
    } else {
        return 'Os números são iguais.'
    }
}
console.log(comparaNum(n1,n2));