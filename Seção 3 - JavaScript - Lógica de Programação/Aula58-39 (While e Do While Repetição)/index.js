function random(min, max) { //crio minha função random
    const r=Math.random()*(max-min)+min; //cálculo do random (random volta um número aleatório entre 0 e 1)
    return Math.floor(r); //retorna o número
}
//Usuário escolhe o mínimo e máximo
const min=1; //1 foi a escolha como mínimo do usuário.
const max=60; //11 foi a escolha como máximo do usuário.
let rand;
do { //Executa a ação
    rand=random(min,max); //chamo a função random e armazeno o novo número na variável rand
    console.log(`${rand}, ${rand!==10}`); //Mostro rand
} while(rand!==10);