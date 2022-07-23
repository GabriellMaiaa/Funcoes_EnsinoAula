function primeira() {
    console.log("Eai Parceiroo")
}

function segunda() {
    console.log("Tudo em Cimaaa?")
}

function executar(fn) {
    if(typeof fn ==="function"){
    
        fn()
    }
}

//executar(primeira);
//executar(segunda);


///RETORNANDO UMA FUNÇÃO DENTRO DE OUTRA

function potencia(base){
    return function(exp) {
        return Math.pow(base, exp);
    }
}

console.log(potencia(4)(2));


function calcular(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

console.log(calcular(3)(7));


function somar(num1, num2, num3) {
    
        return num1 + num2 + num3;
}

console.log(somar(3, 4, 5));

/////OUUU PODE SER ASSIMMM:

function somar2(num1) {
    return function(num2){
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}
const somarTd = somar2(3)(4)(5);
console.log(somarTd)

console.log("Prédio")