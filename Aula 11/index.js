//Estrutura de repetição - while

// let contador = 5
//         //true

//         //1 2
// while(contador<=5){//1 - true/
//     console.log('Oi')
//     contador++
//     //contador = contador + 1
// }

// let velocidade = 80

// while(velocidade>0){//80-70-60-
//     console.log(velocidade)
//     velocidade = velocidade - 10//velocidade-=10

// }
// console.log('velocidade:' + velocidade)
// console.log('Oi')

//Laço de repetição - do...While

//Estrutura:

/*do{ 

}while()*/

/*Traduzindo

faça{
    isso
}enquanto(fortrue)*/

// let velo = 0
// do{
//     console.log(velo)
//     velo = velo - 10//velocidade-=10 -10
// }while(velo>0)//false
// //-10

let numero = 0

while(numero<=100){
   
    document.getElementById('resultado').innerHTML+=`<br>${numero}`
    numero++// numero = numero + 1
}

// do ... while

let n = 0
do{
    document.getElementById('resultado').innerHTML+=`<br>${n}`
    n++// numero = numero + 1
}while(n<=100)//101

console.log('O que tem dentro da variável número agora? '+ numero )
console.log('O que tem dentro da variável nagora? '+ n )