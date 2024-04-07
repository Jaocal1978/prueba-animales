import { Animal } from "./Animal.mjs";

class Lobo extends Animal
{
    constructor(nombre, edad, img, comentarios, sonido)
    {
        super(nombre, edad, img, comentarios, sonido)
    }

    aullar()
    {

    }
}

export { Lobo }