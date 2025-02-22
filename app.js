let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e 10`);
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', `Parabéns, você acertou em ${tentativas} ${palavraTentativas}`);
        exibirTextoNaTela('p', `O número secreto é ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    if (chute > numeroSecreto){
        exibirTextoNaTela('p', `Errou, o número secreto é menor`);
    } else {
        exibirTextoNaTela('p', `Errou, o número secreto é maior`);
    }
    tentativas++;
    limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 10) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
}