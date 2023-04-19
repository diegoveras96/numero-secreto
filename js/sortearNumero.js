window.addEventListener("contextmenu", (event)=>{ //Tirando as funções do botão direito da página
    event.preventDefault();
})
const btn = document.querySelector('.btn');
const escolha = document.querySelector('#escolha');
var minValor = document.querySelector('#menor-valor').innerHTML;
var maxValor = document.querySelector('#maior-valor').innerHTML;

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
    
    escolha.innerText = `O Número Escolhido Está Entre ${minValor} e ${maxValor}`; //.innerText foi escolhido no lugar do .replace() para não ter edição de valores depois de escolhido, com a tela sempre mostrando a faixa correta dos números
    const numeroSecreto = Math.floor(Math.random() * (maxValor - minValor + 1) + minValor); //Função que pega o inteiro entre os números escolhidos
    btn.remove();
    criarRestart();

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

//Função para criar o botão de Restart da página
function criarRestart(){
    const container = document.createElement('div');
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('btn');
    resetBtn.innerHTML = `Recomeçar o Game`;

    container.append(resetBtn);
    document.body.appendChild(container);

    //Botão de reset voltando pros padrões da página
    resetBtn.addEventListener("click", ()=>{
        window.location.href = "";
    });

}
