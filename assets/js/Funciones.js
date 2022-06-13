import * as variables from './variables.js'
export function mostrarAlerta(mensaje){
    const alerta = document.querySelector("#alerta");
    alerta.textContent = mensaje;
    alerta.classList.add("alerta");
    variables.boton.disabled = true
    setTimeout(() => {
        alerta.textContent = '';
        alerta.classList.remove('alerta');
        variables.boton.disabled = false
    }, 2000);
}