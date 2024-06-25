function numeroNegativo(numero) {
    try {
        if(numero < 0) {
            throw new Error("El número no puede ser negativo");
        }
    } catch (error) {
        console.error(error.message);
    }
}