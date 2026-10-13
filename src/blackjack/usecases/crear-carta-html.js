/**
 * Crear carta.
 * @param {String} carta.
 * @returns {HTMLImageElement} retorna imagen.
 */

export const crearCarta = ( carta, divCartasJugadores, turno ) => {

    if ( !carta ) throw new Error('No se ha recibido la carta.');

    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );

    return imgCarta;
}