// a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.
// Resolução a)
// function nomePessoa(nome) {
//     console.log(`Olá ${nome}`);
// }
// nomePessoa("Ludmila")

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// Resolução b)
// function tabuada(numero) {
//     for(let i= 1; i<=10; i++){
//         console.log(`${numero} x ${i} = ${numero*i}`);
//     }
// }
// tabuada(6);

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions
//Resolução c)
// letra a:
const nomePessoa = (nome) => {
    console.log(`Olá ${nome}`);
}
nomePessoa("Ludmila")

// letra b:
const tabuada = (numero) =>{
    for(i=1; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}
tabuada(6)