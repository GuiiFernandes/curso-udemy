let varA='A'; //B
let varB='B'; //C
let varC='C'; //A

const varTemp = varA;
varA=varB;
varB=varC;
varC=varTemp;

// Outra maneira seria:
// [varA, varB, varC] = [varB, varC, varA];
// Essa forma é mais moderna e usual, vamos aprender ela mais para frente.

console.log(varA, varB, varC);