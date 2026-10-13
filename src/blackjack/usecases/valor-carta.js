/**
 * Mostrar valor de una carta.
 * @param {String} carta 
 * @returns {Number} devuelve valor.
 */

export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN(valor) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor*1;
}