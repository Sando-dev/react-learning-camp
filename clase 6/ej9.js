/* Crea una función que tome un objeto como parámetro y devuelva una cadena con información legible sobre la película. Utiliza templates de strings y destructuring para obtener los valores del objeto.*/

const pelicula = {titulo: "Mad Max", genero: "accion", estreno: 2015};

function infoPelicula(pelicula) {
    const {titulo, genero, estreno} = pelicula;
    return `La pelicula ${titulo} se estreno en el anio ${estreno} y es del genero ${genero}.`
}