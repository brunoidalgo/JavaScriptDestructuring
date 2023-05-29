const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];

const numeros = [...numerosPares, ...numerosImpares];

console.log(numeros[5]);


const [num1, num2, ...outrosNumeros] = [1,2,3,4,5]


console.log(num1, num2, outrosNumeros)



const [nome1 = "Bruno"] = []

console.log(nome1)


const pessoa = {
    nome: "Bruno",
    idade:21,
    email:"idalgob99@gmail.com"
}

const pessoaComTelefone = {
    ...pessoa, status:"Noivo",
}


console.log(pessoaComTelefone);


function imprimeDados({nome,idade}) {
    
    console.log(nome,idade);
};


imprimeDados(pessoa);