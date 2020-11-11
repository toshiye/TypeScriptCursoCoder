"use strict";
// string 
let nome = 'Sara';
console.log(nome);
// numbers
let idade = 2;
console.log(idade);
// boolean
let possuiHobbies = true;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 33;
console.log(typeof minhaIdade);
// array
let hobbies = ['Cozinhar', 'Praticar Esportes', 'Dormir'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Sara'))
console.log(multiplicar(4, 9));
// tipo função
let calculo;
/* calculo = digaOi
calculo() */
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'Sara',
    idade: 2
};
console.log(usuario);
//usuario = {}
/* usuario = {
    name: 'Heitor',
    age: 0
} */
usuario = {
    idade: 0,
    nome: 'Heitor'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Sara', 'Heitor', 'Samara'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    supervisores: ['Pessoa', 'Pessoa1', 'Pessoa2'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//nota = true
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log('É um valor numerico');
}
else {
    console.log(typeof valor);
}
// Never
function falha(msg) {
    while (true) {
        throw new Error(msg);
    }
}
const produto = {
    nome: 'Sabonete',
    preco: 2,
    validarPoduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarPoduto();
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Heitor',
    tel1: '987654321',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Sara Sassaki',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map