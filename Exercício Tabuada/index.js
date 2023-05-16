function tabuada(){
    let num = document.getElementById('txtnum')
    let resultado = document.getElementById('area')
    

    if(num.value.length == 0){//verifica o tamanho do que tem dentro do elemento num
        alert('Digite um número.')
    }else{

    let n = Number(num.value)//transformando a entrada em número
    let contador = 1//inicializando o contador
    resultado.innerHTML=''//limpando a área que será exibida a tabuda

//1
    while(contador<=10){
        // resultado.innerText=`${num} x ${contador}=${num*contador}`
        // contador++//contador = contador + 1


        let item = document.createElement('p')//


        item.innerHTML = `${n} x ${contador}=${n*contador} <br>`
        area.appendChild(item)
        contador++// contador = contador + 1




    }



    }
}
