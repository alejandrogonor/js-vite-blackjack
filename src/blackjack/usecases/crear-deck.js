import _ from 'underscore';
// export const miNombre = 'Alejandro';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Regresa un nuevo deck de cartas.
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un array de string.');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un array de string.');

    let deck = [];

    for ( let i = 2; i <= 10; i++)
    {
        for ( let tipo of tiposDeCarta )
        {
            deck.push( i + tipo);
        }
    }

    for ( let tipo of tiposDeCarta )
    {
        for ( let esp of tiposEspeciales)
        {
            deck.push( esp + tipo);
        }
    }

    return _.shuffle( deck );
}
// export default crearDeck;