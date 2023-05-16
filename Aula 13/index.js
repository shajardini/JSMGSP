var nome = 'Shay'//simples
        //   0        1      2        3
var nomes = ['Ana', 'Luan', 'Pablo', 'Pedro', 'Nadmila', 'Lilyan']//array[]

console.log(nomes)

console.log(nomes[4])//mostrar dado em uma posição específica

nomes[0]='Giovanna'//substituiu a Ana pela Giovanna
console.log(nomes)

nomes.push('Mariana')//adiciona na última posição
console.log(nomes)

nomes.splice(4, 0, 'Atena')//inserindo elemento(posiçãoparainserir,0,"novo elemento")
console.log(nomes)

nomes.splice(1,1)//removendo da lista
console.log(nomes)

console.log(nomes.length)//mostra o tamanho do array

console.log(nomes.sort())//ajustar em ordem crescente

//for(inici;condição;itera){}
/*'Giovanna', 'Luan',
'Pablo',    'Pedro',
'Atena',    'Nadmila',
'Lilyan',   'Mariana'
*/


                        //7<8
for(let posicao=0;posicao<nomes.length;posicao++){
    console.log(`A posição ${posicao} tem ${nomes[posicao]}`)
}

for(let cont in nomes){
    console.log(nomes[cont])
}