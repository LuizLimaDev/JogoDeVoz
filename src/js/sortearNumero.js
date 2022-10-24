const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()


//usa um numero matematico aleatorio MatchRandom para gerar um numero secreto,
//o mesmo é multiplicado pelo valor maior e ParseInt por ser numero quebrado.
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

//altera o html para os numeros escolhidos de maiorValor e menorValor.
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

//web speech API, apenas o browser Google Chrome atende todos os requisitos para esta funcao
