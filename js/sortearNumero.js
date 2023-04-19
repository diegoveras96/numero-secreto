window.addEventListener("contextmenu", (event)=>{
    event.preventDefault();
})
const btn = document.querySelector('#btn-comeco')
var minValor = 1;
var maxValor = 100;

const elementoNumero = document.querySelectorAll('.numero');

elementoNumero.forEach((elemento)=>{
    elemento.addEventListener("mousedown", (valor)=>{
        operacao(valor.target.id, valor.target.innerHTML, valor.button);
    })
})

btn.addEventListener("click", ()=>{
    if(minValor > maxValor){ //Verificação para caso do minValor seja maior que o maxValor. Se isso acontecer, o código irá trocar os valores para poder funcionar corretamente
        let aux = minValor;
        minValor = maxValor;
        maxValor = aux;
    }
    const numeroSecreto = Math.floor(Math.random() * (maxValor - minValor + 1) + minValor); //Função que pega o inteiro entre os números escolhidos
    console.log(numeroSecreto)
})

function operacao(id, valor, mouse){

    //Pega o botão do Mouse que aconteceu o Click e altera a variável auxiliar $valor, usada porque ainda não sabemos qual estamos mexendo
    if (mouse === 0){
        valor++;
    } else if(mouse == 2){
        valor--;
    }

    //Pega o ID para alterar a variável correta
    if (id.includes("maior")){
        maxValor = valor;
        trocarHTML(1, maxValor);
    } else if (id.includes("menor")){
        minValor = valor;
        if (minValor < 0){
            minValor = 0;
        }
        trocarHTML(0, minValor);
    }
    
}

//Função para trocar o HTML da página
function trocarHTML(i, valor){
    elementoNumero[i].innerHTML = valor;
    elementoNumero[i].innerHTML = valor;
}