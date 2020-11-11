// string 
let nome: string = 'Sara'
console.log(nome)

// numbers
let idade: number = 2
console.log(idade)

// boolean
let possuiHobbies: boolean = true
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 33
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes', 'Dormir']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor{
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10,   // 10
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

// funções
function retornaMeuNome(): string{
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void{
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

//console.log(multiplicar(2, 'Sara'))
console.log(multiplicar(4, 9))

// tipo função
let calculo: (numeroA: number, numeroB: number) => number
/* calculo = digaOi
calculo() */

calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Sara',
    idade: 2
}
console.log(usuario)

//usuario = {}

/* usuario = {
    name: 'Heitor',
    age: 0
} */

usuario = {
    idade: 0,
    nome: 'Heitor'
}
console.log(usuario)

// Desafio

// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Sara', 'Heitor', 'Samara'],
    baterPonto(horario: number) : string {
        if(horario <= 8){
            return 'Ponto Normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Pessoa', 'Pessoa1', 'Pessoa2'],
    baterPonto(horario: number) : string {
        if(horario <= 8){
            return 'Ponto Normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// Union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
//nota = true

// Checando tipos
let valor = 30

if(typeof valor === "number"){
    console.log('É um valor numerico')
} else {
    console.log(typeof valor)
}

// Never
function falha(msg: string): never{
    while(true){
        throw new Error(msg)
    }
}

const produto = {
    nome: 'Sabonete',
    preco: 2,
    validarPoduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome!')
        }
        if(this.preco <= 0){
            falha('Preço inválido!')
        }
    }
}

produto.validarPoduto()

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Heitor',
    tel1: '987654321',
    tel2: null
}
console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
 
let correntista: Correntista = {
    nome: 'Sara Sassaki',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)