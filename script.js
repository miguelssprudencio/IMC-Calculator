// 1. PEGAR OS ELEMENTOS (conectar JS com HTML)
const modal = document.getElementById('modal');
const inputNome = document.getElementById('nome');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botaoCalcular = document.getElementById('calcular');
const botaoFechar = document.getElementById('fechar');
const buttonStart = document.getElementById('button');

// 2. FUNÇÃO PARA MOSTRAR O MODAL
function abrirModal() {
    modal.classList.remove('hidden'); // Remove a classe 'hidden'
}

// 3. FUNÇÃO PARA FECHAR O MODAL
function fecharModal() {
    modal.classList.add('hidden'); // Adiciona a classe 'hidden'
    limparInputs(); // Limpa os campos
}

// 4. FUNÇÃO PARA LIMPAR OS INPUTS
function limparInputs() {
    inputNome.value = '';
    inputPeso.value = '';
    inputAltura.value = '';
}

// 5. FUNÇÃO PARA VALIDAR E CALCULAR
function calcularIMC() {
    const nome = inputNome.value.trim(); // .trim() remove espaços vazios
    const peso = parseFloat(inputPeso.value); // Converte para número
    const altura = parseFloat(inputAltura.value);

    // VALIDAÇÃO
    if (nome === '') {
        alert('Digite seu nome!');
        return;
    }
    if (isNaN(peso) || peso <= 0) {
        alert('Digite um peso válido!');
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        alert('Digite uma altura válida!');
        return;
    }

    // CÁLCULO
    const alturaEmMetros = altura / 100;
    const imc = peso / (alturaEmMetros * alturaEmMetros);

    // RESULTADO
    let categoria = '';
    if (imc < 18.5) categoria = 'Abaixo do peso';
    else if (imc < 25) categoria = 'Peso saudável';
    else if (imc < 30) categoria = 'Sobrepeso';
    else if (imc < 35) categoria = 'Obesidade grau 1';
    else if (imc < 40) categoria = 'Obesidade grau 2';
    else categoria = 'Obesidade grau 3';

    // MOSTRAR RESULTADO
    alert(`${nome}, seu IMC é ${imc.toFixed(2)} - ${categoria}`);
    fecharModal();
}

// 6. CONECTAR OS EVENTOS
buttonStart.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);
botaoCalcular.addEventListener('click', calcularIMC);

// BÔNUS: Fechar modal clicando fora dele
modal.addEventListener('click', function(evento) {
    if (evento.target === modal) {
        fecharModal();
    }
});