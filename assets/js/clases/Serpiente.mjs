import { Animal } from "./Animal.mjs";

class Serpiente extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido)
    }

    sisear()
    {
        return sonido;
    }
}

export { Serpiente }