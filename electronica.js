// Modela un sistema de productos electrónicos con:

// 1.Clase Producto con nombre, precio, marca y método descripcion().
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `Producto: ${this.nombre} | Marca: ${this.marca} | Precio: $${this.precio}`;
  }
}
 
// 2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca); // Llama al constructor de la clase padre
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `Teléfono: ${this.nombre} | Marca: ${this.marca} | Precio: $${this.precio} | Almacenamiento: ${this.almacenamiento}GB | RAM: ${this.ram}GB`;
  }
}


// 3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `Laptop: ${this.nombre} | Marca: ${this.marca} | Precio: $${this.precio} | Procesador: ${this.procesador} | Pantalla: ${this.pulgadas}"`;
  }
}

// Crea instancias y muestra sus descripciones
const producto1 = new Producto("Cargador Universal", 25, "Samsung");
const telefono1 = new Telefono("Galaxy S22", 850, "Samsung", 256, 8);
const laptop1 = new Laptop("MacBook Air", 1200, "Apple", "M2", 13.6);

// Mostrar descripciones
console.log(producto1.descripcion());
console.log(telefono1.descripcion());
console.log(laptop1.descripcion());
