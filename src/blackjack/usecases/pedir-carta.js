
/**
 * 
 * @param {Array<String>} deck Ejemplo ['4C','8D','AC','JD', ...]
 * @returns {String} Ejemplo '4C'
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}