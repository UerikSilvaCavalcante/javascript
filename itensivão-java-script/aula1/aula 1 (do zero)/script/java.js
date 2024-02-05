// tocar audio

const audio = document.getElementById('audio-capitulo');
const Play_Pause_btn = document.querySelector('.PlayPause');
const Capítulo_txt = document.getElementById('cap')
const quantCap = 10;


let taTocando = false
let Cap = 1;

function TocarAudio(){
    audio.play();
    Play_Pause_btn.innerHTML = '<i class="bi bi-pause-fill" id="Play_P"></i>'
    taTocando = true
}

function PauseAudio(){
    Play_Pause_btn.innerHTML = '<i class="bi bi-play-fill" id="Play_P"></i>';
    audio.pause();
    taTocando = false
}

function ConfereAudio(){
    if (taTocando === false) {
        TocarAudio();
    } else {
        PauseAudio();
    }
}

Play_Pause_btn.addEventListener("click", ConfereAudio);

// avançar audio

const btn_avansa = document.querySelector('.avansar');

function NextCap() {
    if (Cap < quantCap) {
        Cap ++;
    } else {
        Cap = 1;
    }
    audio.src = "books/dom-casmurro/" + Cap + ".mp3";
    Capítulo_txt.innerText = "Capitulo " + Cap;
    TocarAudio();
}

btn_avansa.addEventListener("click", NextCap);

// audio volta

const btn_volta = document.querySelector('.voltar');

function VoltaAudio() {
    if (Cap === 1) {
        Cap = 10;
    } else {
        Cap --;
    }

    audio.src = "books/dom-casmurro/" + Cap + ".mp3";
    Capítulo_txt.innerText = "Capitulo " + Cap;
    TocarAudio(); 
}

btn_volta.addEventListener('click', VoltaAudio)