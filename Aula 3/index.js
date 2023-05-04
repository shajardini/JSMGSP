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

var nome = prompt('Digite seu nome?')
var email = prompt('Insira seu email: ')
//O email de __________ é ________
alert('O email de ' +  nome + ' é ' + email+'.')
alert(`O email de ${nome} é ${email}.`)
