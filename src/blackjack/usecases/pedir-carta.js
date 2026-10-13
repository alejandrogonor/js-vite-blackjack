/**
 * Esta función toma una carta.
 * @param {Array<String>} deck Ejemplo: []
 * @returns {String} muestra carta.
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0) throw new Error('No hay cartas en la baraja.');

    return deck.pop();
}