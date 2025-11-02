let peso = Number(prompt("Digite seu peso:"))
let altura = Number(prompt("Digite sua altura:"))

let imc = ( peso / (altura * altura))

if (imc < 18.5) {

    console.log("Abaixo do peso")
    
} else if (imc < 24) {
    console.log("Peso normal" + imc)
} else if (imc < 30) {
    console.log("Sobrepeso" + imc)
} else if (imc < 35) {
    console.log("Obesidade grau I" + imc)
} else if (imc < 40) {
    console.log("Obesidade grau II" + imc)
} else if (imc < 50) {
    console.log("Obesidade mórbida" + imc)
} else if (imc > 50) {
    console.log("Rei do Ifood" + imc)
}
