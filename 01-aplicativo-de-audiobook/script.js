const botaoPlayPause = document.getElementById("btn__play-pause");
const botaoAvancar = document.getElementById("btn__avancar");
const botaoVoltar = document.getElementById("btn__voltar");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");
const numeroCapitulos = 10;

let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    taTocando = 1;
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
    taTocando = 0;
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    trocarNomeFaixa()
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    trocarNomeFaixa()
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);

/* function tocarOuPausar() {
    if (taTocando === 0) {
        audioCapitulo.play();
        botaoPlayPause.classList.remove("bi-play-circle-fill");
        botaoPlayPause.classList.add("bi-pause-circle-fill");
        taTocando++
        audioCapitulo.pause();
        botaoPlayPause.classList.remove("bi-pause-circle-fill");
        botaoPlayPause.classList.add("bi-play-circle-fill");
        taTocando--
    }
} */
