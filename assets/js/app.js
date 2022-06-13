//importaciones
import * as variables from "./variables.js";
import DatosAPI from "./API.js";
import {mostrarAlerta} from "./Funciones.js";


//eventos locales
(()=>{
    variables.formulario.addEventListener( "submit", validarForm );
})()


//funciones
function validarForm(e){
    e.preventDefault();
    //validar inputs
    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;
    if( !artista.trim() || !cancion.trim() ){
        mostrarAlerta('COMPLETAR EL FORMULARIO');
        return;
    }
    const newLetter = new DatosAPI(artista, cancion);
    newLetter.llamarAPI();
}

