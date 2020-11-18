"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Sara';
}
const pessoa = {
    nome: 'Heitor',
    idade: 0.3,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Samara', idade: 33, altura: 1.50 })
pessoa.saudar('Sasaki');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Heitor';
saudarComOla(meuCliente);
meuCliente.saudar('Sasaki');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(expoente).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
/* console.log(x)
console.log(y)
console.log(z) */
x.log();
y.log();
z.log();
const cli = {
    nome: 'Heitor',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map