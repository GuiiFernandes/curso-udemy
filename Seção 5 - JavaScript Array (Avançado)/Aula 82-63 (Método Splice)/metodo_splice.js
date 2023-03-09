console.log('MÉTODO SPLICE:');
//indices+ =[  0  ,   1  ,      2     ,    3   ,      4    ,   5  ,   6   ,     7    ]
const nomes=['Gui', 'Pli', 'Valentina', 'Alice', 'Cristina', 'JC', 'Rubya', 'Fabiano'];
//indices- =[ -8  ,  -7  ,     -6     ,   -5   ,     -4    , -3  ,  -2    ,    -1    ]
//Sendo o indice = array.lenght - indiceNegativo

/*
-> splice tem as mesmas funções que shift, unshift, pop, push e um pouco mais.
-> Um pouco mais complexa.
-> Mexe no array original
*/
//.splice(argumentos)
//.splice(indice inicial, qtd delete a partir do indice incial, elem1*, elem2*, elem3*) *para adicionar

console.log('-> Removendo com splice:');
//Removendo o último elemento:
const removidos = nomes.splice(3,1); //.splice(indiceDoElmenetoAManipular, QtdDeElementoARemoverAPartirDoIndice);
//Ou seja, quero remover a partir do indice 3, 1 elemento.
console.log(nomes,removidos); //Splice também retorna o elemento removido assim como .pop(), porém por poder remover mais de um elemento de uma vez, retorna um array.
//Posso trabalhar com o indice negativo também. Dessa forma se quiser remover os dois últimos elementos fica:
const removidos2 = nomes.splice(-2,2); //Ou seja, .splice(indice: array.length-2, qtd: 2)
console.log(nomes,removidos2);
//Para dizer que quero remover a partir do meu indice todos os números após uso como qtd a expressão Number.MAX_VALUE
const removidos3= nomes.splice(-1, Number.MAX_VALUE); //Neste caso vou remover apenas um elemento pq o indice= array.lenght-1
//Number.MAX_VALUE é o maior valor numerico existente em JS ()
console.log(`Number.MAX_VALUE= ${Number.MAX_VALUE}`);
//Sendo assim quando passo uma quantida de elementos maior que meu array, ele vai apenas até o fim do array.
console.log(nomes,removidos3);
//Posso não remover nada usando o splice. Para isso:
const removidos4= nomes.splice(-2, 0); //basta eu indicar que a qtd de elementos a remover é 0
//Isso é inútil para remover itens, mas muito importante para adicionar itens com splice.

console.log('-> Adicionando com splice:');
//indices=   [   0   ,    1  ,    2    ,   3   ]
const nomes2=['Bruce', 'Jack', 'Maggye', 'Nick'];
//Para adicionar uso a qtd=0
const removidos5=nomes2.splice(-2,0,'Elvis'); //Ou seja, a partir do indice 2 (array.length(4)-2), remova 0 elementos e adicione 'Elvis'
console.log(nomes2, removidos5); //Dessa forma eu adiciono Elvis no lugar de Maggye e jogo Maggye, Nick para frente.

console.log('-> Substituindo com splice:');
const removidos6=nomes2.splice(-2,1,'Cindy'); //Ou seja, a partir do indice 2 remova 1 elemento e coloque Cindy.
//Troco Maggye por Cindy
console.log(nomes2, removidos6);
//Também posso remover mais de um elemento e adicionar outro
const removidos7=nomes2.splice(2,2,'Cecilia'); //Ou seja, a partir do indice 2 remova 2 elemento (Cindy e Nick) e coloque Cecilia no indice 2.
console.log(nomes2, removidos7);
//Posso substituir dois por dois
const removidos8=nomes2.splice(2,2,removidos7[0],removidos7[1]); //Ou seja, a partir do indice 2, remova 2 elementos (Cecilia, Nick) e adicione ao indice 2 removidos7[0] (Elvis) e no próximo indice adicione removidos7[1] (Cindy).
console.log(nomes2, removidos8);

console.log('-> Simulando metodos de adicionar e remover elemento com splice:');
console.log('     ->pop (remove fim)');
const removidos10=nomes2.splice(-1,1);
console.log(nomes2, removidos10);
console.log('     ->shift (remove inicio)');
const removidos11=nomes2.splice(0,1);
console.log(nomes2, removidos11);
console.log('     ->push (adiciona fim)');
nomes2.splice(nomes.length,1,'Havena');
console.log(nomes2);
console.log('     ->unshift (adiciona inicio)');
nomes2.splice(0,0,'Cecilia');
console.log(nomes2);