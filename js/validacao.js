function verificarChute(chute){
    const numero = +chute
    console.log(numeroSecreto)
    console.log(chute)

    if (Number.isNaN(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido</div>`;
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
