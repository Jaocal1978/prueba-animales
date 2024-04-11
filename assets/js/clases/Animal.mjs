class Animal
{
    #nombre
    #edad
    #img
    #comentarios
    #sonido
    constructor(nombre, edad, img, comentarios, sonido)
    {
        this.#nombre= nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get getNombre()
    {
        return this.#nombre;
    }

    get getEdad()
    {
        return this.#edad;
    }

    get getImagen()
    {
        return this.#img;
    }

    get getComentario()
    {
        return this.#comentarios;
    }

    get getSonido()
    {
        return this.#sonido;
    }
}

export { Animal }