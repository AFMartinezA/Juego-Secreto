let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};


function verificarIntento() {
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos == 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // Si el usuario Pierde

        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        };
    };
    limpiarCaja();
    numeroIntentos++;
    return;
};

function limpiarCaja() {
    document.getElementById('valorUsuario').value = "";
    return;
};


function generarNumeroSecreto() {
    let nuemroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(nuemroGenerado);
    console.log(numerosSorteados);
    if(numerosSorteados.length == numeroMaximo){

        asignarTextoElemento("p", "Hemos alcansado todos los numeros posibles");
    }else{
        
        if(numerosSorteados.includes(nuemroGenerado)){
    
            return generarNumeroSecreto();
            
        }else{
            numerosSorteados.push(nuemroGenerado);
            return nuemroGenerado;
        };
    };


};

function parametrosIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

};

function reiniciarJuego() {
    limpiarCaja();
    parametrosIniciales();    
};

parametrosIniciales();
