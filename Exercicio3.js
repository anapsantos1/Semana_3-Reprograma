//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisao(num1,num2){
    let resultado = num1/num2;

    if(resultado % 2 === 0){
        return `O resultado da divisão é um numero par:${resultado}`
    }else{
        return `O resultado da divisão é: ${resultado}`

    }
     
}

console.log(divisao(13,5))

