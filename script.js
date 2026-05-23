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
    
if (imc < 18.5) {
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m², abaixo do peso!`)
}else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m², peso saudável!`)
}else if (imc >= 25.0 && imc <= 29.9) {
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m², sobrepeso!`)
}else if (imc >= 30.0 && imc <= 34.9) {
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m², obesidade grau 1!`)
}else if (imc >= 35.0 && imc <= 39.9) {
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m², obesidade grau 2!`)
}else if (imc > 40.0) {
    alert(`Seu imc equivale a ${imc.toFixed(2)}kg/m², obesidade grau 3!`)
}
  }while (confirm("Deseja tentar novamente?"))
}

button.addEventListener('click', handleButtonClick)