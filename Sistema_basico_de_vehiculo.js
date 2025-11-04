//  crear un sistema de clases para representar diferentes tipos de vehiculos.

// 1. Una clase Vehiculo con propiedades: marca, modelo, año y un método obtenerDetalles() que devuelva un string con toda la información.

class vehiculo { // definir clase vehiculo
    constructor(marca, modelo, año){
        this.marca = marca; // propiedad para guardar
        this.modelo = modelo;
        this.año = año;
    }
    ObtenerDetalles() {
        return `marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`;
    }
}
// 2. Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas
class Coche extends vehiculo {  //herencia de vehiculo
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año); // llama al contructor
    this.numeroPuertas = numeroPuertas; // nueva propiedad
  }
// para añadir mas informacion
  obtenerDetalles() {
    return `${super.ObtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
  }
}
// 3. Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada
class Moto extends vehiculo {  //herencia de vehiculo
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año); // llama al contructor
    this.cilindrada = cilindrada; // nueva propiedad
  }
// para añadir mas informacion
  obtenerDetalles() {
    return `${super.ObtenerDetalles()}, cilindrada: ${this.cilindrada}cc`;
  }
}

// ahora vamos a ir a crear un coche
const micoche = new Coche("chevrolet", "Aveo", 2025 );
// ahora vamos a crear una moto
const mimoto = new Moto("yamaha", "R15", 2025, 150 );

console.log(micoche.ObtenerDetalles());
console.log(mimoto.ObtenerDetalles());


