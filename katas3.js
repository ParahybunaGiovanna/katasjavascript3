// sampleArray
const sampleArray=  [469,755,244,327,535,126,805,411,919,202,408,734,651,287,632,654,156,860,940,472]

// Kata 1 - Retornar os números de 1 a 25: (1, 2, 3, …, 24, 25)

function retornaNumeros(){
    const arrayNum = []
    
    for(let i=1; i<=25;i++){
        arrayNum.push(i)
    }
    return arrayNum
}
//console.log(retornaNumeros())


//Kata 2- Retornar os números de 25 a 1: (25, 24, 23, …, 2, 1)

function retorna(){
    const arrayNum = []
   

    for(let i = 25; i > 0; i--){
        arrayNum.push(i)

    }
    return arrayNum
}
//console.log(retorna())


//Kata 3- Retornar os números de -1 a -25: (-1, -2, -3, …, -24, -25)

function retornaNegativos(){
    const arrayNum = []
    
    for(let i = 1; i <= 25; i++){
        arrayNum.push(-i)
    }
    return arrayNum
}
//console.log(retornaNegativos())


//Kata 4- Retornar os números de -25 a -1: (-25, -24, -23, …, -2, -1)

function retornaNegativoss(){
    const arrayNum = []

    for(let i =-25; i < 0; i++){
        arrayNum.push(i)
    }
    return arrayNum
}
//console.log(retornaNegativoss())


//Kata 5- Retornar os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)

function retornaImpar(){
    const arrayNum = []

    for(let i = 25; i > -26; i-=2){
        
        arrayNum.push(i)
    }
    return arrayNum
}
//console.log(retornaImpar())


//Kata 6- Retornar os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)

function retornaDTres(){
    const arrayNum = []

    for(let i = 0; i <= 100; i+=3){
            arrayNum.push(i)
    }
    return arrayNum
}
//console.log(retornaDTres())


//Kata 7- Retornar os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)

function retornaDSete(){
    const arrayNum = []

    for(let i=0; i <= 100; i+=7){
            arrayNum.push(i)
        }
    return arrayNum
}
//console.log(retornaDSete())


//Kata 8- Retornar os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)

function retornaTresSete(){
    const arrayNum = []

    for(let i=100; i > 0; i--){
        if(i % 3 === 0 || i % 7 === 0){
            arrayNum.push(i)
        }
    }
    return arrayNum
}
//console.log(retornaTresSete())


//Kata 9- Retornar os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)

function retornarImpares(){
    let resultado = []

    for(let i=0; i <= 100; i++){
        if(i % 5 === 0){
        resultado.push(i)
        }
    }    
        return resultado
}
//console.log(retornarImpares())


//Kata 10 - Retornar os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)

function retornarElementos(){
    
    for(let i=0; i <sampleArray.length; i++){
        sampleArray[i]
    }
    return sampleArray
}
//console.log(retornarElementos())


//Kata 11 - Retornar todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)

function todosPares(){

    let resultado = []
   
    for(let i=0; i<sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
           resultado.push(i)
        }
    }
    return resultado
}    
//console.log(todosPares(sampleArray))


//Kata 12 - Retornar todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)

function todosImpares(){

    let resultado = []

    for(let i=0; i<sampleArray.length; i++){
        if(i % 2 != 0){
            resultado.push(i)
        }
    }    
    return resultado
}
//console.log(todosImpares(sampleArray))


//Kata 13 - Retornar os números divisíveis por 8 em sampleArray: (712, 456, …, 472)

function retornaDivisiveis(){
    let resultado = []

    for(i=0; i<sampleArray.length; i++){
        if(i % 8 === 0){
            resultado.push(i)
            
        }
    }
    return resultado
}
console.log(retornaDivisiveis(sampleArray))


//Kata 14 - Retornar o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)

function retornQuadrado(){

    const arrayNum =  []

    for(let i = 0; i*i; i++){
        if(i*i >= 100)
            arrayNum.push(i*i)
    }
    return arrayNum
}
//console.log(retornQuadrado(sampleArray))



//Kata 15 - Retornar a soma de todos os números de 1 a 20.

function somaNumeros(){

    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let soma = 0

    for(let i = 0; i < numbers.length; i++){
        soma+= numbers[i]
    }
    return soma
}
console.log(somaNumeros())



//Kata 16 - Retornar a soma de todos os elementos de sampleArray.

function somaNumbers(){

    const sampleArray=  [469,755,244,327,535,126,805,411,919,202,408,734,651,287,632,654,156,860,940,472]
    let soma = 0
    for(let i = 0; i < sampleArray.length;i++){
        soma+= sampleArray[i]
    }
    return soma
}
//console.log(somaNumbers())

//Kata 17 - Retornar o menor elemento de sampleArray.

function retornaMenor(){
    let menorNumero = sampleArray[0]
    for(let i = 1; i<sampleArray.length; i++){
        if(sampleArray[i] <  menorNumero){
            menorNumero = sampleArray[i]
        }
    }
    return menorNumero
}
//console.log(retornaMenor())


//Kata 18 - Retornar o maior elemento de sampleArray.

function retornaMaior(){
    let maiorNumero = sampleArray[0]
    for(let i = 1; i<sampleArray.length; i++){
        if(sampleArray[i] > maiorNumero){
            maiorNumero = sampleArray[i] 
        }
    }
    return maiorNumero
}
//console.log(retornaMaior())












