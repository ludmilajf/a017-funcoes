// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function numeros(num1, num2) {
    console.log(num1+num2);
}
numeros(9, 16)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
function numerosBool(num1, num2) {
    console.log(num1 >= num2);
}
numerosBool(4, 67)

// c) Uma função que receba um número e imprima se ele é par ou não
function verificaNumero(numero) {
    if(numero % 2 === 0){
        console.log(`O número é par`);
    }else{
        console.log(`O número é ímpar`);
    }
}
verificaNumero(46)

// d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function string(mensagem) {
    console.log(`Tamanho da mensagem: ${mensagem.length}
    Mensagem maísucula: ${mensagem.toUpperCase()}`);
}
string("Atenção")