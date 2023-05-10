// function addInput(parâmetros){
    // return(

    // )
    
// }
//var let const - declaração de variável


function addInput(){
   const ul = document.getElementById('inputs')

    const NovaLista= document.createElement('li')
    NovaLista.className='item-lista'
    NovaLista.innerText='Novo input'

    const novoInput = document.createElement('input')
    novoInput.type='text'

    NovaLista.appendChild(novoInput)
    ul.appendChild(NovaLista)

    //<ul>
    //  <li>-NovaLista
    //      <input>-NovoInput



}