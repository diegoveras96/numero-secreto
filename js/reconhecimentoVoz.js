window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.querySelector('#chute');
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    console.log(e)
    // let chute = e.results[0][0].transcript;
    // exibeChute(chute);
}

// function exibeChute(chute){
//     elementoChute.innerHTML = `
//     <div>Você disse:</div>
//     <span class="box">${chute}</span>
//     <div>${compararNumeros(chute)}</div>
//    `
// }

// function compararNumeros(chute){
//     if (chute > numeroSecreto){
//         const texto = `O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>`;
//     } else if (chute < numeroSecreto){
//         const texto = `O número secreto é menor <i class="fa-solid fa-arrow-up-long"></i>`;
//     } else{
//         const texto = `VOCÊ ACERTOU! O NÚMERO SECRETO É ${numeroSecreto}</i>`
//     }

//     return texto
// }