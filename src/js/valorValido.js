function valorValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor invalido </div>';
    }

    if (numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += '<div> valor inválido: fale um número  entre ${menorValor}e ${maiorValor} </div>';
    }   //precisar ser crase "`" para poder linkar variaveis dentro do texto

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você acertou! </h2>
        <h3> O numero secreto era ${numeroSecreto}

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-down-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
          //target é uma referencia ao objeto que enviou o evento, neste caso o evento "e" que
          //acontece ao clicar.
          window.location.reload();
        } //recarrega a janela do navegador para reiniciar o jogo
});