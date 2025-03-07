let pantalla = document.getElementById("pantalla");
let operacionActual = '';
let operacionPendiente = '';
let operador = '';

function agregarNumero(numero) {
    if (pantalla.innerText === '0' && numero !== '.') {
        pantalla.innerText = numero;
    } else {
        pantalla.innerText += numero;
    }
}

function operacion(oper) {
    if (pantalla.innerText !== '') {
        if (operacionActual && operador) {
            calcular();
        }
        operacionActual = pantalla.innerText;
        operador = oper;
        pantalla.innerText = '';
    }
}

function calcular() {
    if (pantalla.innerText !== '' && operacionActual !== '') {
        operacionPendiente = pantalla.innerText;
        let resultado;

        switch (operador) {
            case '+':
                resultado = parseFloat(operacionActual) + parseFloat(operacionPendiente);
                break;
            case '-':
                resultado = parseFloat(operacionActual) - parseFloat(operacionPendiente);
                break;
            case '*':
                resultado = parseFloat(operacionActual) * parseFloat(operacionPendiente);
                break;
            case '/':
                resultado = parseFloat(operacionActual) / parseFloat(operacionPendiente);
                break;
        }

        pantalla.innerText = resultado;
        operacionActual = resultado.toString();
        operacionPendiente = '';
        operador = '';
    }
}

function limpiar() {
    pantalla.innerText = '0';
    operacionActual = '';
    operacionPendiente = '';
    operador = '';
}
