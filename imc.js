const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso.'

        } else if (valorIMC < 18.5 || 24.9) {
            classificacao = 'Parabens!! Voce esta  com peso ideal.';
        } else if (valorIMC < 25.0 || 29.9) {
            classificacao = 'Voce esta acima do peso obesidade grau I';
        } else if (valorIMC < 30.0 || 39.9) {
            classificacao = 'Com obesidade grau II';

        } else {
            classificacao = 'Com obesidade grau III.Grave';
        }
        resultado.textContent = `${nome} seu IMC e ${valorIMC} e voce esta ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha os campos!!';
    }
}
calcular.addEventListener('click', imc);