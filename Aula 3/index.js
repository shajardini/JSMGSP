// // var nome = prompt('Qual seu nome?')

// // alert('Boa tarde '+ nome+'!')//+ ${}

// // alert(`Seja bem vindo(a) ${nome}`)/*utilizando template string, marcação é feita com crase*/

// //declarar variável - var, let, const

// //Tipos primitivos de dados

// var pi = 3.1415//casas decimais separadas pelo .
// console.log('Tipo de dado da variável pi: ' + typeof pi)//number

// var texto = 'Olá pessoal!'
// console.log('Tipo de dados da variável texto: ' + typeof texto)//string - tipo texto
// console.log(texto)

// texto = 'A Nadmila é uma aluna maravilhosa!'
// console.log(texto)

// var chuva = true; //booleanos - true - verdadeiro/ false - falso
// console.log(typeof chuva)

// var a
// console.log(typeof a)//undefined- é quando não atribuído valor.

// //tipos de object

// var pessoa = {nome: 'Shay', email: 'shshs@gmail.com'}
// console.log(typeof pessoa)//objeto demarcado pela chaves

// var lista = [1, 2, 3]//Array (demarcado pelo colchetes)
// console.log(typeof lista)

// var nome = prompt('Digite seu nome?')
// var email = prompt('Insira seu email: ')
// //O email de __________ é ________
// alert('O email de ' +  nome + ' é ' + email+'.')
// alert(`O email de ${nome} é ${email}.`)


// var n1 = Number(prompt('Digite um número'))
// var n2 = Number(prompt('Digite mais um número'))

// alert(n1+n2)

var pessoaMaisVelha = prompt('Digite o nome da pessoa mais velha')
var idadeMaisVelha = prompt('Digite a idade da pessoa mais velha')
var pessoaMaisNova = prompt('Digite o nome da pessoa mais nova')
var idadeMaisNova = prompt('Digite a idade da pessoa mais nova')

var diferenca = idadeMaisVelha-idadeMaisNova

alert(`A diferença de idade de ${pessoaMaisVelha} e ${pessoaMaisNova} é ${idadeMaisVelha-idadeMaisNova} anos.`)

alert(`A diferença de idade de ${pessoaMaisVelha} e ${pessoaMaisNova} é ${diferenca} anos.`)