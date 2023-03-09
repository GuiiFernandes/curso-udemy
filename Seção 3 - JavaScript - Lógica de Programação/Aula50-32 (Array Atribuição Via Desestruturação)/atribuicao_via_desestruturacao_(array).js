console.log('ATRIBUIÇÃO VIA DESESTRUTURAÇÃO / AVD (ARRAY):');
console.log('->Exércicio antigo com atribuição via desestruturação:');
//Quando fizemos o exercício que trocava o valor das variáveis
let a= 'A'; //Recebe B
let b= 'B'; //Recebe C
let c= 'C'; //Recebe A
console.log(a,b,c); //No exercícios criamos uma variável temporária, porém com a atribuição via desestruturação podemos resolver esse exercício de uma forma mais fácil.

[a,b,c] = [1,2,3];
console.log(a,b,c);
//[variáveis de desestruturação] = [array com os valores respectivos]
//Se as variávei já foram criadas, a atribuição via desestruturação vai reatribuir valores a elas.

//Outra forma que posso atribuir via desestruturação é:
const numero = [3,2,1]; //atribuimos o array a uma variação
[a,b,c] = numero; //E fazemos a atribuição via desestruturação com a variável.
console.log(a,b,c);

//A partir da forma acima, podemos ao invés de um valor usar os valores iniciais das variáveis.
a= 'A';
b= 'B';
c= 'C';
const letras=[b,c,a]; //uso as variáveis para inverter os valores inciais.
[a,b,c]=letras;
console.log(a,b,c);

console.log('->Manipulando array com atribuição via desestruturação:');
// Os valores de um array são indexados 0, 1, 2, 3, 4, . . .
let numeros=[100, 200, 300, 400, 500, 600, 700, 800, 900]; //Crio um array com vários valores
const [um, dois, tres, ...resto] = numeros; //Atribuo os 3 primeiros valores a variáveis um, dois e tres
//... é um operador com duas funções:
//rest= que vai colocar o resto do meu array (tirando o que foi atribuido nas variáveis anteriores) a uma variável 'resto'.
//spread = no sentido de espalhar ou distribuir alguma coisa.
console.log(um,dois,tres);
console.log(resto);
//Outra forma de manipular o array é pulando números do array:
const [um1, , tres1, , cinco1, , sete1] = numeros; //Quando quero pular um valor no array, uso ', ,' para pular o index da posição das variáveis de desestruturação
console.log(um1,tres1,cinco1,sete1);

console.log('->Manipulando array dentro de array:');
//Quando eu tenho listas dentro de uma lista o meu index fica:
//             0          1          2
//          0  1  2    0  1  2    0  1  2
numeros= [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
//sendo assim, quando quero chamar o valor 6 da variável números escrevo:
console.log(numeros[1][2]); //retorna 6

console.log('->Atribuição via desestruturação de array dentro de array:');
//Uma forma complexa, mas que existe de pegar o 6 dentro do array numeros usando a AVD é:
const [ ,[ , ,seis]]=numeros; //Eu pulei meu indíce 0 do array pai, entrei no array de indíce 1, pulei os dois primeiros indices do meu array filho de indice 1 e peguei o número 6.
console.log(seis);
//Só que é muito mais simples fazer isso dessa forma:
const [lista1,lista2,lista3]=numeros; //Atribuo as listas filhas as variáveis.
console.log(lista2[2]); //chamo o indice 2 da lista filha2 que retornará 6.