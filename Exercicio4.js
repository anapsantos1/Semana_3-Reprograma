//4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
// a) números de 1 a 100  

for(let i = 1; i<=100; i++){
    
    console.log(i)
        
    }
// b) quando chegar no número 50 interrompa a instrução e pare o loop 

for(let b = 1; b<=100; b++){
    

    if(b === 51){

        console.log("PULOU")
        break
    
    } 
    
    console.log(b)
    
}


// c) quando chegar no número 50 pule a instrução 

for(let c = 1; c<=100; c++){
    
    
    if(c === 50){

        console.log("PULOU")
        continue
        
    } 
    console.log(c)
    
}






