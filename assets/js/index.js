import { Animal } from "../js/clases/Animal.mjs";
import { Aguila } from "../js/clases/Aguila.mjs";
import { Leon } from "../js/clases/Leon.mjs";
import { Lobo } from "../js/clases/Lobo.mjs";
import { Oso } from "../js/clases/Oso.mjs";
import { Serpiente } from "../js/clases/Serpiente.mjs";
import { modulo } from "./modulo/modulo.mjs";

let imagenAnimal;
let sonidoAnimal;

//Cambio de imagen formulario
document.getElementById("animal").addEventListener("change", async function() 
{
    let baseUrl = ".";
    let recurso = "/animales.json";

    let response = await fetch(baseUrl + recurso);
    let data = await response.json();
        
    const seleccion = this.value;
    const animalSeleccionado = data.animales.find(animal => animal.name == seleccion);
    

    let casillaImagen = document.getElementById("preview");
    casillaImagen.style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`;

    const nombreAnimal = this.value;
    imagenAnimal = animalSeleccionado.imagen;
    sonidoAnimal = animalSeleccionado.sonido;

});

//Obtener edad
document.getElementById("edad").addEventListener("change", function()
{
    const edadAnimal = this.value;
});

//Evento Click a Boton Registro
let btnRegistro = document.querySelector('#btnRegistrar');
btnRegistro.addEventListener('click', () =>
{
    let nombreAnimal = document.querySelector('#animal').value;
    let edadAnimal = document.querySelector('#edad').value;
    let comentarios = document.querySelector('#comentarios').value;
    
    if(nombreAnimal == 'Seleccione un animal' || edadAnimal == 'Seleccione un rango de años' || comentarios == '' || comentarios == null)
    {
        alert('Falta completar algunos campos.');
    }
    else
    {
        //Creamos objetos
        let objAnimales = new Animal(nombreAnimal, edadAnimal, imagenAnimal, comentarios, sonidoAnimal);

        //Creo Array con animales
        modulo.arrayAnimales.push(objAnimales);

        //envio card a panel izquierdo
        modulo.renderCardAnimal();

        //limpiar campos
        document.getElementById('animal').selectedIndex = 0;
        document.getElementById('edad').selectedIndex = 0;
        document.getElementById('comentarios').value = '';
        document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/lion.svg)`
        
    }
});
