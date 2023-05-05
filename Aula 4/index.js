// //variável - let, var, const
// // executar no console--> f8 ou fn+f8

// let n1 = 10
// let n2= 5

// let soma = n1+n2// 15
// let subtracao = n1-n2// 5
// let divisao = n1/n2//2
// let multiplicacao = n1*n2//50
// let resto = n1 % n2 //0
// let exponenciacao = n1 ** n2//100000


// // console.log(soma)
// // console.log(subtracao)
// // console.log(divisao)
// // console.log(multiplicacao)
// // console.log(resto)
// // console.log(exponenciacao)

// console.log(`Soma: ${soma} \nSubtração: ${subtracao} \nDivisão: ${divisao} \nMultiplicação: ${multiplicacao} \nResto da divisão: ${resto} \nExponenciação: ${exponenciacao}`)

// //operadores de atribuição

// let n3 = 4

// //maneira + simplificada
// console.log(n3+=2)//n3=n3 + 2=6
// console.log('Novo valor n3= ' + n3)
// console.log(n3-=1)//n3=n3-1= 5
// console.log('Novo valor n3= ' + n3)
// console.log(n3*=2)//n3=n3*2 = 10
// console.log('Novo valor n3= ' + n3)
// console.log(n3/=2)//n3=n3/2=5
// console.log('Novo valor n3= ' + n3)
// console.log(n3**=2)//n3=n3**2=25
// console.log('Novo valor n3= ' + n3)
// console.log(n3%=2)//n3=n3%2=1
// console.log('Novo valor n3= ' + n3)
// // Algoritmo é uma sequência de passos. O N3 é atualizado a cada linha da sequência acima.

// //Operador de incremento
// let x = 6

// x++ // x + =1 ou x = x+1 = 7

// x--// X -=1 ou x = x-1 = 6

// //Operadores de comparação
// var a = 5
// var b = 7
// console.log(a>b)//true ou false = false
// console.log(a<b)//true
// console.log(a>=b)//false
// console.log(a<=b)//true
// console.log(a!=b)//true (diferente / negação / não é igual )
// console.log(5=='5')//true - caractere é igual dos lados
// console.log(5==='5')//false - tipo e caractere
// //number === string

//Operadores lógicos - expressões lógicas
// ! não
// && e conjunção
// || ou 

//Aluno ser aprovado a nota dele tem que ser maior que 5 e tem que ter 75% ou mais de presença.

let nota = true // aprovado
let presenca = true //aprovado

// true true --> true
// true false --> false
// false true --> false
// false false --> false

//aprovado (true) - reprovado (false)
console.log(nota&&presenca)

//Eu quero uma caneta azul ou vermelha.
//true true --> true
//true false --> true
//false true --> true
//false false --> false
console.log(true&&false)


console.log(!true)//false
console.log(!false)//true
