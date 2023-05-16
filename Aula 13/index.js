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
