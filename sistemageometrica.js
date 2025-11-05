// Crea un sistema de clases para figuras geométricas:
// 1.Clase Figura con propiedad color y método area() que devuelve 0.
class Figura {
  constructor(color) {
    this.color = color; // todas las figuras tienen un color
  }

  area() {
    return 0; // por defecto el área es 0, ya que no sabemos la forma
  }
}

// 2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color); // llama al constructor de Figura
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}


// 3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}


//Crea instancias y muestra sus áreas
// Crear objetos
const figura1 = new Figura("Transparente");
const rectangulo1 = new Rectangulo("Rojo", 5, 10);
const circulo1 = new Circulo("Azul", 4);

// Mostrar áreas en consola
console.log(`Figura genérica (color ${figura1.color}): área = ${figura1.area()}`);
console.log(`Rectángulo (color ${rectangulo1.color}): área = ${rectangulo1.area()}`);
console.log(`Círculo (color ${circulo1.color}): área = ${circulo1.area().toFixed(2)}`);
