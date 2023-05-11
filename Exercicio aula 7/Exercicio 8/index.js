function somar(){
   var n1 = Number(document.getElementById('number1').value)//6
   var n2 = Number(document.getElementById('number2').value)//85
   var area = document.getElementById('resultado')//seleção do elemento que vai exibir o resultado

   var soma = n1 + n2//realizamos a soma

   area.innerText=soma//exibimos dentro da area o resultado


}