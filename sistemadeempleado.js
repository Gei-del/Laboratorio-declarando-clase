//Crea un sistema de clases para representar empleados de una empresa:

// 1.Clase Empleado con propiedades: nombre, edad, salarioBase y método calcularSalario() que devuelve el salario base.
class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

// 2.Clase Gerente que herede de Empleado y añada bonificacion. Sobrescribe calcularSalario() para que sume la bonificación.
class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase); // Llama al constructor de Empleado
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}



// 3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }

  calcularSalario() {
    return this.salarioBase; // Igual que el base
  }
}

// Crear objetos de cada clase
const empleado1 = new Empleado("Laura", 30, 1623000);
const gerente1 = new Gerente("Carlos", 45, 4000000, 500);
const dev1 = new Desarrollador("Lorena", 25, 2500000, "JavaScript");

// Mostrar resultados
console.log(`Empleado: ${empleado1.nombre} - Salario: $${empleado1.calcularSalario()}`);
console.log(`Gerente: ${gerente1.nombre} - Salario: $${gerente1.calcularSalario()}`);
console.log(`Desarrolladora: ${dev1.nombre} (${dev1.lenguaje}) - Salario: $${dev1.calcularSalario()}`);

