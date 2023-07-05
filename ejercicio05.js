/* Definir clase  */
class Animal {

    /* Definir las propiedades */
    name = "Default";
    edad = null;
    peso = null;
    tipo = "Default"

    /* Definir métodos */
    hablar() {
        alert("¡¡¡Hola soy " + this.name + " adoptame!!!");
    }
    crearBloque() {
        let bloque = document.createElement("div");
        bloque.setAttribute("class", "card");
        bloque.innerHTML = `
                <p>${this.name}</p>
                <p>Edad: ${this.edad}</p>
                <p>Peso: ${this.peso}</p>
                <p>Tipo: ${this.tipo}</p>
            `;
        document.querySelector("body").append(bloque);
    }

}

/* Crear nuevos objetos */
let gato1 = new Animal();
let gato2 = new Animal();
let perro = new Animal();

/* Cambiar propiedades de cada objeto */
gato1.name = "Bethoven";
gato1.edad = 3;
gato1.peso = 6;
gato1.tipo = "Felino";

gato2.name = "Tom";
gato2.edad = 3;
gato2.tipo = "Felino";
gato2.peso = 8;

perro.name = "Pluto";
perro.edad = 6;
perro.tipo = "Canino";
perro.peso = 17;

