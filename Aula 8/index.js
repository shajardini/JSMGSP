// //logica?true:false

// //Estrutura de condição
// //if/
// //if/else
// //if/ else if/else

// var velocidade = 70
// //if
// //if(teste){}
// if(velocidade>100){
//     console.log('Você foi multado!')
// }

// console.log('Continuação do código após a estrutura if simples')

// //if/else

// /* (se/senão)
// if(teste){
//     true/
// }else{
//     false
// }
// */ 

// var nota = 4
//     //true ou false
// if(nota>6){
//     console.log('Aprovado')
// }else{
//     console.log('Reprovado')
// }

// //aprovado, reprovado, exame

// // //if(teste){

// // }else if(teste){

// // }else{

// // }

// var nota1=5
// //5  false
// if(nota1>7){
//     console.log('Aprovado')
// }else if(nota1>5){
//     console.log('Exame')
// }else{
//     console.log('Reprovado')
// }

// //


function verificar(){
    let timea = Number(document.getElementById('timea').value)//5
    let timeb = Number(document.getElementById('timeb').value)//2

    let area = document.getElementById('resultado')

    //se(oquetemdentrodotimea for maior oquetemdentrodotimeb)

    if(timea>timeb){
        //selecionando a area e add um texto
       area.innerText= 'Time A vencedor.'

       //senão, se(oquetemdentrodotimea for menor que o temdentro do time b)
    }else if(timea<timeb){
        area.innerText='Time B vencedor.'

        //senão
    }else{
        area.innerText='Empate!'
    }
}
