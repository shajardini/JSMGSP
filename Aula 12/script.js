function calcular() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let operacao = document.getElementById('operacao').value
    let area = document.getElementById('resultado')

    


    switch(operacao) {
        case '+':
            console.log(num1)
            break
        case '-':
            resul = num1 - num2
            console.log(resul)
            break
        case '*':
            resul = num1 * num2
            console.log(resul)
            break
        case '/':
            resul = num1 / num2
            console.log(resul)
    }
}