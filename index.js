let peso = Number(prompt("Digite seu peso:"))
let altura = Number(prompt("Digite sua altura:"))

let imc = peso / (altura * altura) + imc;

if (imc < 18,5) {

    console.log("Abaixo do peso")
    
} else if (imc < 24) {
    console.log("Peso normal")
} else if (imc < 30) {
    console.log("Sobrepeso")
} else if (imc < 35) {
    console.log("Obesidade grau I")
} else if (imc < 40) {
    console.log("Obesidade grau II")
} else if (imc < 50) {
    console.log("Obesidade mórbida")
} else if (imc > 50) {
    console.log("Rei do Ifood")
}