interface Humano{
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Sara'
}

const pessoa: Humano = {
    nome: 'Heitor', 
    idade: 0.3,
    saudar(sobrenome: string){
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Samara', idade: 33, altura: 1.50 })
pessoa.saudar('Sasaki')

// Usando Classes...
class Cliente implements Humano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente
meuCliente.nome = 'Heitor'
saudarComOla(meuCliente)
meuCliente.saudar('Sasaki')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo{
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function(base: number, expoente: number): number{
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(expoente).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)

// Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

/* console.log(x)
console.log(y)
console.log(z) */

x.log()
y.log()
z.log()

const cli = { 
    nome: 'Heitor', 
    toString() {
        return this.nome
    } 
}
cli.log()