import { Animal } from "../js/clases/Animal.mjs";
import { Aguila } from "../js/clases/Aguila.mjs";
import { Leon } from "../js/clases/Leon.mjs";
import { Lobo } from "../js/clases/Lobo.mjs";
import { Oso } from "../js/clases/Oso.mjs";
import { Serpiente } from "../js/clases/Serpiente.mjs";

const arrAnimal = [];
let nombreAnimal;
let edadAnimal;
let imagenAnimal;
let sonidoAnimal;
let cardAnimal;

//Cambio de imagen formulario
document.getElementById("animal").addEventListener("change", async function() 
{
    let baseUrl = ".";
    let recurso = "/animales.json";

    let response = await fetch(baseUrl + recurso);
    let data = await response.json();
    //console.log(data);

    const seleccion = this.value;
    const animalSeleccionado = data.animales.find(animal => animal.name == seleccion);
    

    let casillaImagen = document.getElementById("preview");
    casillaImagen.style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`;

    nombreAnimal = this.value;
    imagenAnimal = animalSeleccionado.imagen;
    sonidoAnimal = animalSeleccionado.sonido;

})

//Obtener edad
document.getElementById("edad").addEventListener("change", function()
{
    edadAnimal = this.value;
})

//Evento Click a Boton Registro
let btnRegistro = document.querySelector('#btnRegistrar');
btnRegistro.addEventListener('click', () =>
{
    let comentarios = document.querySelector('#comentarios').value;

    //Creamos objetos
    let objAnimales = new Animal(nombreAnimal, edadAnimal, imagenAnimal, '', sonidoAnimal);
    objAnimales.setComentario = comentarios;

    //llamo a funcion para crar la card para mostrar en panel izquierdo
    renderCardAnimal(objAnimales);
});


function renderCardAnimal(datos)
{
    cardAnimal +=`
        <div id="${datos.getNombre}" class="card" style="width: 18rem; height:22rem;">
            <img id="img-card" src="assets/imgs/${datos.getImagen}" class="img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${datos.getNombre}</h5>
                <button id="btnVer" class="col-12 btn btn-success">
                    <i class="fa-solid fa-eye"></i> Ver
                </button>
                <button id="playBtn" class="col-12 btn btn-primary">
                    <i class="fa-solid fa-volume-high"></i> sonido
                </button>
            </div>
        </div>
    `;

    if (document.getElementById(datos.getNombre) ) 
    {
        alert("El animal esta en la lista.");
    }
    else 
    {
        document.querySelector('#Animales').innerHTML = cardAnimal;
    }
}


let btnVer = document.querySelector('#btnVer');
btnVer.addEventListener('click', () =>
{
    alert('Me hicieron Click');
});
    

    


