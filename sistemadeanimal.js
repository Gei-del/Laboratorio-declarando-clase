// Modela un sistema de animales con:
// 1.Clase Animal con nombre, edad y método emitirSonido().
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "Sonido genérico de animal.";
  }
}

// 2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad); // Llama al constructor del padre
    this.raza = raza;
  }

  emitirSonido() {
    return `${this.nombre} dice: ¡Guau guau!`;
  }
}

// 3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
class Gato extends Animal {
  constructor(nombre, edad, color) {
    super(nombre, edad);
    this.color = color;
  }

  emitirSonido() {
    return `${this.nombre} dice: ¡Miau miau!`;
  }
}

// Crea instancias y haz que emitan sonidos.
const animal1 = new Animal("Animal genérico", 5);
const perro1 = new Perro("Rocky", 3, "Labrador");
const gato1 = new Gato("Michi", 2, "Blanco");

// Mostrar los sonidos en consola
console.log(animal1.emitirSonido());
console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());