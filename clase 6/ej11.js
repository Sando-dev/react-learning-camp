function saludarUsuario(nombre, edad) {
    numeroNegativo(edad);

    if (edad >= 0) {
        console.log(`¡Bienvenido, ${nombre}! Tienes ${edad} años.`);
    }
}

const nombreUsuario = "Juan";
const edadUsuario = 25;

saludarUsuario(nombreUsuario, edadUsuario);