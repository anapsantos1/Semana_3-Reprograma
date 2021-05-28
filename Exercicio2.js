//2 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converDaysInHoras(qtdDias){
    let horas = 24
    let resultado = qtdDias * horas
    return resultado
}

console.log(`Dias convertidos em Horas: ${converDaysInHoras(3)} horas`)