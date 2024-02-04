const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("PlayPause");
const ic = document.getElementById('icon-play')

const quantCap = 10

function PlayAudio(){
    ic.className('fa-solid fa-pause');
    audio.play();
}

botaoPlayPause.addEventListener('click', PlayAudio);