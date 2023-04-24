window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.querySelector('#chute');
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

function ouvirUsuario(){
    recognition.start();
    recognition.addEventListener('end', ()=> recognition.start())
    recognition.addEventListener('result', onSpeak);
}

function onSpeak(evento){
    let chute = evento.results[0][0].transcript;
    exibeChute(chute);
    verificarChute(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
   `
}
