window.addEventListener("contextmenu", (event)=>{
    event.preventDefault();
})
const btn = document.querySelector('#btn-comeco')
var minValor = 1;
const maxValor = 100;

const elementoMenor = document.querySelector('#menor-valor');
elementoMenor.innerHTML = minValor;

const elementoMaior = document.querySelector("#maior-valor");
elementoMaior.innerHTML = maxValor;

elementoMenor.addEventListener("mousedown", (click)=>{
    console.log(click)
    if (click.button == 0){
        minValor++;
    } else if(click.button == 2){
        if (minValor <= 0){
            minValor = 0;
        } else{
            minValor--;
        }
    }
    elementoMenor.innerHTML = minValor;
})

btn.addEventListener("click", ()=>{
    const numeroSecreto = parseInt(Math.random()* maxValor + minValor);
    console.log(numeroSecreto)
})