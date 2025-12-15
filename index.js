const { registrar, leer } = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (!operacion) {
    console.log('No se indicó una operación');
    console.log('Ejemplos:');
    console.log('node index.js registrar Benito "2 años" perro blanco vomitos');
    console.log('node index.js leer');
    return;
}

if (operacion === 'registrar') {
    const [ , nombre, edad, tipo, color, enfermedad ] = args;

    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log('Faltan datos para registrar la cita');
        return;
    }

    registrar(nombre, edad, tipo, color, enfermedad);
}

if (operacion === 'leer') {
    leer();
}
