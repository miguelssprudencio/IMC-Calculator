const button = document.getElementById('button');

function handleButtonClick() {
  do{
    let nome = prompt("Qual é seu nome?")

    if (nome === null) {
        alert('Até logo!')
        return
    } else if (nome === "") {
        alert("Por favor, digite seu nome!")
        continue
    } else {
        alert(`Olá ${nome}, agora vamos calcular seu IMC...`)
    }
    
    let peso = prompt("Qual é seu peso em kg?")
    if (peso === null) {
        alert('Até logo!')
        return
    } else if (isNaN(peso) || peso === "") {
        alert("Por favor, digite um peso válido!")
        continue
    }
    
    let altura = prompt("Qual é sua altura em cm?")
    if (altura === null) {
        alert('Até logo!')
        return
    } else if (isNaN(altura) || altura === "") {
        alert("Por favor, digite uma altura válida!")
        continue
    }
    
    altura = altura / 100
    let imc = peso / (altura * altura)
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m²`)
  }while (confirm("Deseja tentar novamente?"))
}

button.addEventListener('click', handleButtonClick)
