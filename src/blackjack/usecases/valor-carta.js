/**
 * Obtener el valor de la carta
 * @param {String} carta Ejemplo '10C'
 * @returns {Number} Ejemplo 10
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
