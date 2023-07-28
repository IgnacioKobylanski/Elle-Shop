function Persona(Nombre, Apellido){
this.Nombre = Nombre;
this.Apellido = Apellido;
}

let carlos = new Persona("Carlos", "Gonzales");
let julio = new Persona("Julio", "Fandango");
let wilbur = new Persona("Wilbur", "Wilson");

let personas = [carlos, julio, wilbur];

console.table(personas);

let lenguajes = ["Html", "Js", "Java"];
console.table(lenguajes);