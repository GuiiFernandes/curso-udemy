const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];
//Node não tem DOM (Document Object Model) e nem BOM (Browser Object Model)
//Portanto quando usamos .document alert() e etc. o console do node dá erro.

const container=document.querySelector('.container');
/*querySelector seleciona apenas um elemento.
Quando uso ela pra container vou pegar o primeira classe container do meu HTML.
*/
const div=document.createElement('div'); //Cria o elemento que vai conter as frases do meu array.

//Agora iteramos (percorremos) o array:
for (let i=0; i<elementos.length; i++) /*Uso i< pq length retorna 4 e meu maior indice é 3, se eu usar i<= vou ter um valor de i que não existe index.*/ {
    let { tag, texto}=elementos[i]; //uso atribuição via desestruturação (AVD) para extrair a tag e o texto de cada objeto do meu array.
    let tagCriada = document.createElement(tag); //crio um elemento tag para meu HTML
    tagCriada.innerText=texto; //Adiciono o texto dentro da minha tag criada
    //Neste caso usar innerText é mais seguro, pq estamos adicionando apenas texto, não tem tags na variável texto.
    /* Outra forma de fazer isso é usando:
    let textoCriado = document.createTextNode(texto); //Crio um nó de texto dentro do HTML
    tagCriada.appendChild(textoCriado); //Adiciono esse texto criado dentro da minha tagCriada
    */
    div.appendChild(tagCriada); //adiciono a tag com o texto dentro da minha div
}

container.appendChild(div); //Adiciono tudo ao meu container.