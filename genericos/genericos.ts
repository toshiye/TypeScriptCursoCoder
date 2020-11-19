function echo(objeto: any){
    return objeto
}

console.log(echo('Heitor').length)
console.log(echo(27).length)
console.log(echo({nome: 'Heitor', idade: 0.3}))

// Usando Generics
function echoMelhorado<T>(objeto: T): T{
    return objeto
}
console.log(echoMelhorado('Heitor').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'Heitor', idade: 0.3}).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([4, 5, 6])
imprimir<string>(['Sara', 'Heitor', 'Samara'])
imprimir<{nome: string, idade: number}>([
    {nome: 'Sara', idade: 3},
    {nome: 'Heitor', idade: 0.3},
    {nome: 'Samara', idade: 33}

])

type Aluno = {nome: string, idade: number}
imprimir<Aluno>([
    {nome: 'Sara', idade: 3},
    {nome: 'Heitor', idade: 0.3},
    {nome: 'Samara', idade: 33}

])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T){}

    abstract executar(): R
}

/* console.log(new OperacaoBinaria('Bom ', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria(3, 'Opa').executar())
console.log(new OperacaoBinaria({}, {}).executar()) */

class somaBinaria extends OperacaoBinaria<number, number>{
    executar(): number{
        return this.operando1 + this.operando2
    }
}

console.log(new somaBinaria(3, 4).executar())
console.log(new somaBinaria(31, 47).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number{
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(27, 8, 2020)
const d2 = new Data(18, 10, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

/* Desafio Classe Fila
Atributo: fila (array)
Métodos: entrar, próximo, imprimir */
class Fila<T extends number | string>{
    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo(): T{
        if(this.fila.length >= 0 && this.fila[0]){
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null
        }
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Sara', 'Samara', 'Heitor', 'Eu')
fila.imprimir()
fila.entrar('Bachan')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// const outraFila = new Fila<boolean>(true, false)

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = {chave: C, valor: V}

class Mapa<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave)

        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar(){
        this.itens = new Array<Par<C, V>>()
    }

    imprimir(){
        console.log(this.itens)
    }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()