import { pedirCarta } from "./";

/**
 * Turno del ordenador.
 * @param {Number} puntosMinimos puntos minitos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos.
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, deck = [], acumularPuntos, puntosJugadores, crearCarta, determinarGanador, divCartasJugadores) => {

    if ( !puntosMinimos ) throw new Error('Puntos minimos son obligatorios.');
    if ( !puntosHTML ) throw new Error('Argumentos puntosHTML es obligatorio.');

    let puntosComputadora = 0;

    do
    {
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        crearCarta(carta, divCartasJugadores, puntosJugadores.length - 1);

        if (puntosMinimos > 21)
        {
            break;
        }
    }
    while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador();
}
