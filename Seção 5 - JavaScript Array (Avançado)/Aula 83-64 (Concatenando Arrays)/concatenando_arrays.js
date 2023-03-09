console.log('CONCATENANDO ARRAYS:');
//Para unir arrays não posso usar o operador + como nas strings
const a1= [1,2,3];
const a2= [4,5,6];
//Se eu fizer isso, eu pego os valores dos arrays em formato de String e concateno em uma string
console.log(a1+a2, typeof(a1+a2)); //Dessa forma estou concatenando os valores e não os arrays
//Inclusive o typeof desse resultado é uma string
console.log('-> Concatenando com .concat:');
//Para concatenar de forma correta em formato de array faço:
const a3= a1.concat(a2); //Ou seja, eu digo que a3 recebe a1 concatenado com a2.
console.log(a3);
//Posso também concatenar mais de 2 arrays em um só, ou concatenar qualquer outro dado como um valor do meu array.
const a4= a1.concat(a2, [7,8,9], 'Luiz');
console.log(a4);
console.log('-> Concatenando com spread:');
//... pode ser usando tanto como rest (para pegar o resto de algo) quanto como spread (para unir algo)
//Prof. acha mais fácil concatenar com spread do que com concat.
const a5=[...a1,...a2]; //Atribuo ao a5 um array [] que contém o espalhamento de a1 e o espalhamento de a2.
console.log(a5);
//Dessa forma também consigo adicionar outros valores dentro do meu array.
const a6=[...a1,'Luiz',...a2,...[7,8,9]]; //Nesse caso [7,8,9] é um array literal e para concatenar arrays dessa forma eu preciso usar o spread.
//Não usá-lo vai fazer com que um valor do meu array seja todo o array literal. (O spread vai espalhar o array literal dentro de a6)
console.log(a6);

/*FUNCIONA DA MESMA FORMA PARA ARRAYS E OBJETOS, A DIFERENÇA É QUE OBJETOS USO {} E ARRAYS [] */