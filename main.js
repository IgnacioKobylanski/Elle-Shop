// function Persona(Nombre, Apellido){
// this.Nombre = Nombre;
// this.Apellido = Apellido;
// }

// let carlos = new Persona("Carlos", "Gonzales");
// let julio = new Persona("Julio", "Fandango");
// let wilbur = new Persona("Wilbur", "Wilson");

// let personas = [carlos, julio, wilbur];

// console.table(personas);

// let lenguajes = ["Html", "Js", "Java"];
// console.table(lenguajes);

// array.forEach(element => {
//     fo
// });

/* function login(){
    let contador = 0;//el contador inicializado en 0
    let contrasenia = prompt("Ingrese su contraseña");// el pedido inicial de contraseña

    //Si la contraseña es incorrecta se entra en el while y se le suma 1 al contador
    while(contador < 3 && contrasenia !== "pepe"){
        contador++;
        contrasenia = prompt("Contraseña incorrecta, intentelo nuevamente\nNumero de intentos restantes " + (3 - contador));
    }
    //si el contador es 3 se sale del bucle y se toma como fallido el intento de login
    if(contador === 3){
        alert("Agotaste tus intentos, cuebta bloqueada");
        //Si no se terminaron los intentos se loguea de manera exitosa
    } else{
        alert("Iniciando sesion");
    }
}

  //Se llama a la funcion para que inicie.
login(); */

//aunque la cont fuera pepe desde la inicializacion

let nombre = "Carlos";

for(let aux of nombre){
    console.log(aux);
}
