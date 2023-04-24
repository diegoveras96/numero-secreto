function verificarChute(chute){
    const numero = +chute;
    console.log(numeroSecreto);
    console.log(chute);

    if (Number.isNaN(numero)){
        if (chute === "game over"){
            recognition.stop();
            document.body.style.backgroundColor = "#850000";
            document.body.style.color = "#FFDB89";
            document.body.innerHTML = `
                <h1>QUE PENA, VOCÊ NÃO CHEGOU NO NÚMERO SECRETO <i class="fa-regular fa-face-sad-cry" style="color: #ffdb89;"></i></h1>
                <h3>Mas você pode tentar novamente clicando no botão abaixo</h3>
                `
            criarRestart();
            const btn = document.querySelector('.btn');
            btn.style.backgroundColor = "#DC0000";
            btn.style.color = "#FFF6C3";
            btn.innerText = "Jogar Novamente";
        } else{
            elementoChute.innerHTML += `<div>Valor Inválido</div>`;
        }
    } else if(numero > maxValor || numero < minValor){
        elementoChute.innerHTML += `Valor Inválido: O número secreto precisa estar entre ${minValor} e ${maxValor}`;
    } else{
        if (chute > numeroSecreto){
            elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long fa-beat" style="color: #f2e3db;"></i></div>`;
        } else if (chute < numeroSecreto){
            elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long fa-beat" style="color: #f2e3db;"></i></div>`;
        } else{
            document.body.innerHTML = `
                <div><h2>VOCÊ ACERTOU!</h2>
                <h3>O NÚMERO SECRETO ERA ${numeroSecreto} <i class="fa-sharp fa-solid fa-circle-check fa-bounce" style="color: #f2e3db;"></i></h3></div>
                `;
                criarRestart();
        }        
    }
}
