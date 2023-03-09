//Escreva uma função que recebe 2 números e retorne o maior deles.
function max1(x,y) {
    if(x>y) {
        return x;
    } else {
        return y;
    }  
}

//Se o return sai da função, não preciso de else para analisar se y é maior que x.
function max2(x,y) {
    if(x>y) {
        return x;
    }
    return y;    
}

//Se tenho só uma ação não preciso das {}
function max3(x,y) {
    if(x>y) return x;
    return y;    
}
//Posso usar a função ternária também
function max4(x,y) {
    return x>y ? x : y;
}

//Posso também fazer com arrow function
const max = (x,y) => {
    return x>y ? x : y;
}

//Quando arrow function tem só uma linha de ação não preciso da chave e quando ela tem só uma linha de ação, fica implicito que o que está nessa linha será retornado.
const maxx = (x,y) => x>y ? x : y;

console.log(maxx(5,10));