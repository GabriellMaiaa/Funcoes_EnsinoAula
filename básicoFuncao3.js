//Arroww Function -- é uma função Anônimaa.

const FelizAnoNovo = () => console.log("Feliz Ano Novo meu irmão!!");
FelizAnoNovo();

const nomes = (nome) => `Meu nome é ${nome} meu irmão!!`;
console.log(nomes("Júnior"));


const somar = (numeros) => {
    let total = 0;
    for(let n of numeros) {
        total += n;
    }
    return total;/////TEM SEMPRE QUE TER O RETURNNNNN
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))



//////COMO CRIAR UMA ARROW FUNCTION DENTRO DE OUTRA?

const soma = (num1) =>{
    return function(num2) {
        return num1 + num2;

    }
}

console.log(soma(4)(6));

/////OUUUU UMA ARROW COM ARROW:


const soma2 = (num1) =>{
    return (num2) => {
        return num1 + num2;

    }
}

console.log(soma(5)(6));

/////MAIS ENXUTOO AINDAA:

const teste3 = num1 => num2 => Math.pow(num1, num2);
console.log(teste3(4)(4))
