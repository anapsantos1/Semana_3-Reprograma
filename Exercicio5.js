//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

let resultado = 0
function conta(Calcular, num1, num2){
    
    switch(Calcular){
        case 'soma':
            resultado = num1 + num2
            break
        
        case 'multiplicacao':
            resultado = num1 * num2
            break
        case 'divisao':
            resultado = num1 / num2
            break
        case 'subtracao':
            resultado = num1 - num2
            break
        default:
            console.log('informe uma operação valida, para isso usar as palavras: soma, multiplicacao, divisao e subtracao para realizar a operação ')
            
        
    }
    return `O resultado da ${Calcular}: ${resultado}`
}

console.log(conta('soma',2,2))
console.log(conta('multiplicacao',2,2))
console.log(conta('divisao',2,2))
console.log(conta('subtracao',2,2))
conta('1000',2,2)
