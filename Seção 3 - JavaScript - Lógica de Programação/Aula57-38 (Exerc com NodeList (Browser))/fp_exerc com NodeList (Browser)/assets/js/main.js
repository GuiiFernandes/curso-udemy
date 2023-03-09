//seleciono minha classe .paragrafo com querySelector pq não tenho outra classe com esse nome.
const paragrafos=document.querySelector('.paragrafos');
//Para selecionar os parágrafos <p> o querySelector vai me retornar apenas o primeiro <p>.
//Então usamos querySelectorAll para selecionar todos os <p> e retornar uma NodeList
const ps=paragrafos.querySelectorAll('p');
//NodeList se comporta de forma similar ao array, mas não é
//Ele faz parte do DOM, da API do Browser, mas como se comporta como o array você pode utilizar códigos que manipulam array para manipulá-los. (for clássico, for in, for of).

//Como o objetivo do exercício é pegar o fundo do body e aplicar nos ps, vou trazer para o JS as estilizações do CSS.
const estilosBody= getComputedStyle(document.body); //Tudo de CSS computado pelo computador no body está aqui.
const backgroundColorBody = estilosBody.backgroundColor; //Coloco a cor do background do body dentro de uma variável
console.log(backgroundColorBody); //Mostro a cor do meu body no console.
for (p of ps) { //Crio uma repetição para rodar cada <p> da minha NodeList
    //No Java eu consigo trabalhar com CSS usando .style e .atributo_a_mudar
    //O JS não aceita hífen, então uso o camelCase para os atributos css.
    p.style.backgroundColor=backgroundColorBody; //
    p.style.color='#FFFFFF';
}