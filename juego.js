let mostrarTarjetas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let puntaje = 0;
let tiempo = false;
let tiempoRestante = 180;
let pararTiempo = null;

let mostrarTiempo = document.getElementById('cronometro');
let mostrarPuntaje = document.getElementById('puntaje');

let letras = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","Ñ","Ñ"];
letras = letras.sort(() => {return Math.random() - 0.5});
console.log(letras)

function contarTiempo(){
    pararTiempo = setInterval(() => {
        tiempoRestante--;
        mostrarTiempo.innerHTML = 'Tiempo: ' + tiempoRestante + ' segundos';
        if(tiempoRestante === 0){
            clearInterval(pararTiempo);
            mostrarPerdido();
        }
    },1000);
}

function mostrarPerdido(){
    for(let i = 0; i <= 29; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = letras[i];
        tarjetaBloqueada.disabled = true;
    }
}

function destapar(id){
    if(tiempo == false){
        contarTiempo();
        tiempo = true;
    }

    mostrarTarjetas++;

    if(mostrarTarjetas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = letras[id];
        tarjeta1.innerHTML = letras[id];
        tarjeta1.disabled = true;
    } else if(mostrarTarjetas == 2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = letras[id];
        tarjeta2.innerHTML = segundoResultado;
        tarjeta2.disabled = true;

        if(primerResultado == segundoResultado){
            mostrarTarjetas = 0;
            puntaje++;
            mostrarPuntaje.innerHTML = 'Puntaje: ' + puntaje;

            if(puntaje == 15){
                mostrarPuntaje.innerHTML = '¡Felicidades! Has ganado .😎';
                clearInterval(pararTiempo)
            }
        } else {
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                mostrarTarjetas = 0;
            }, 800);
        }
    }
}
