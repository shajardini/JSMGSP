function calcular() {
    let n1 = Number(document.getElementById('numero1').value)
    let n2 = Number(document.getElementById('numero2').value)
    let operacao = document.getElementById('selectop').value
    let area=document.getElementById('resultado')

    let resultado = 0


    // //switch(teste){
    //     case:
    //     façaisso
    //     break

    //     cade tatata:
    //     façaisso
    //     break
    // }

    switch(operacao){
        case '+':
            resultado = n1+n2
            break
        case '-':
            resultado = n1-n2
            break
        case '/':
            resultado = n1 / n2
            break
        case '*':
            resultado = n1 * n2
    }

    area.innerText = resultado.toFixed(2)
}