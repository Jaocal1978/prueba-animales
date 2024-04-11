const modulo = (() =>
{
    const arrayAnimales = [];

    function renderCardAnimal()
    {
        let cardAnimal = "";

        arrayAnimales.forEach((animal) =>
        {
            cardAnimal +=`
                <div id="${animal.getNombre}" class="animalCard card px-3 pb-2" style="width: 18rem; height:22rem;">
                    <img id="img-card" src="assets/imgs/${animal.getImagen}" class="img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${animal.getNombre}</h5>
                        <button id="btn-Ver" class="btnVer col-12 btn btn-success" data-toggle="modal" data-target="#exampleModal">
                            <i class="fa-solid fa-eye"></i> Ver
                        </button>
                        <button id="btn-Play" class="btnSonido col-12 btn btn-primary">
                            <i class="fa-solid fa-volume-high"></i> sonido
                        </button>
                    </div>
                </div>
            `;
        })

        document.querySelector('#Animales').innerHTML = cardAnimal;
        ver();
        sonidoAnimal();
        
    }

    function ver()
    {
        const buttonVer = document.querySelectorAll(".btnVer");

        buttonVer.forEach((bver, id) =>{
            bver.addEventListener('click', () =>
            {
                const modal = `
                    <div class="card" style="width: 100%;">
                        <img src="assets/imgs/${arrayAnimales[id].getImagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${arrayAnimales[id].getNombre}</h5>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Edad</h5>
                            <p class="card-text">${arrayAnimales[id].getEdad}</p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Comentario</h5>
                            <p class="card-text">${arrayAnimales[id].getComentario}</p>
                        </div>
                    </div>
                `;

                document.querySelector('.modal-body').innerHTML = modal;
            })
        })
    }

    function sonidoAnimal()
    {
        const buttonSonido = document.querySelectorAll('.btnSonido');
        buttonSonido.forEach((bsonido, id) =>
        {
            bsonido.addEventListener('click', () =>
            {
                const audioAnimal = new Audio(`./assets/sounds/${arrayAnimales[id].getSonido}`);
                console.log(audioAnimal);
                audioAnimal.play();
            })
        })
    }

    return {
        arrayAnimales: arrayAnimales,
        renderCardAnimal: renderCardAnimal,
    }

})()

export { modulo }