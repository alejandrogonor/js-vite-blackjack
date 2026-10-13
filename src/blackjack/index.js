import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta } from './usecases';

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTML.
    const btnPedir = document.querySelector('#pedir'),
        btnNuevo = document.querySelector('#nuevo'),
        btnDetener = document.querySelector('#detener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    // Inicializar juego.
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
        for ( let i=0; i<numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Turno: 0 = jugador, y el ultimo sera el ordenador.
    const acumularPuntos = ( carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos)
            {
                alert('Nadie gana');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana');
            } else if ( puntosComputadora > 21) {
                alert('jugador gana');
            } else {
                alert('Computadora gana');
            }
        }, 5000);

    }

    // Eventos.
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta( deck );
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta( carta, divCartasJugadores, 0 );

        if ( puntosJugador > 21) 
        {
            console.warn('Lo siento, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, deck, acumularPuntos, puntosJugadores, crearCarta, determinarGanador, divCartasJugadores);

        } else if ( puntosJugador === 21) {
            console.warn('¡Genial, lo conseguiste!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, deck, acumularPuntos, puntosJugadores, crearCarta, determinarGanador, divCartasJugadores);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], puntosHTML, deck, acumularPuntos, puntosJugadores, crearCarta, determinarGanador, divCartasJugadores);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();        
    });

    return {
        nuevoJuego: inicializarJuego
    }
})();

