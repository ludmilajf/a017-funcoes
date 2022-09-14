// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
function soma(num1, num2) {
    const operacao = num1 + num2
    console.log(operacao);
}
soma(12, 43)

function subtracao(num1, num2) {
    const operacao = num1 - num2
    console.log(operacao);
}
subtracao(12, 43)

function multiplicacao(num1, num2) {
    const operacao = num1 * num2
    console.log(operacao);
}
multiplicacao(12, 43)

function divisao(num1, num2) {
    const operacao = num1 / num2
    console.log(operacao);
}
divisao(12, 43)

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

let numeroUsuario1 = Number(prompt("Insira um número para calcular"))
let numeroUsuario2 = Number(prompt("Insira mais um número para calcular"))

soma(numeroUsuario1, numeroUsuario2)
subtracao(numeroUsuario1, numeroUsuario2)
multiplicacao(numeroUsuario1, numeroUsuario2)
divisao(numeroUsuario1, numeroUsuario2)