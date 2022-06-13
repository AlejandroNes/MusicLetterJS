//imports
import * as variables from './variables.js';
import {mostrarAlerta} from "./Funciones.js";
class DatosAPI{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    llamarAPI(){
        variables.respuesta.textContent = 'buscando...'
        let url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        //consumir mediante FETCH
        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
          
            if(!data.lyrics){
               mostrarAlerta("CANCIÓN NO ENCONTRADA");
               variables.respuesta.innerHTML =  `<h5 class="titulo-cancion">No existe la canción<h5>`
               variables.formulario.reset();
            }else{
                variables.respuesta.innerHTML = `
                <h5 class="titulo-cancion">${this.artista} - ${this.cancion}<h5>
                <p>${data.lyrics}</p>
                `
            }


        } )
    }

}

export default DatosAPI