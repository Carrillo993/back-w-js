const fs = require('fs');
const archivocitas = 'citas.json';

if (!fs.existsSync(archivocitas)) {
    fs.writeFileSync(archivocitas, JSON.stringify([]));
}

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync(archivocitas, 'utf8'));

    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync(archivocitas, JSON.stringify(citas, null, 2));

    console.log('Cita registrada exitosamente');
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync(archivocitas, 'utf8'));

    if (citas.length === 0) {
        console.log('No hay citas registradas');
        return;
    }

    console.log('Citas registradas:\n');
    citas.forEach((cita, index) => {
        console.log(`Cita ${index + 1}`);
        console.log(`Nombre: ${cita.nombre}`);
        console.log(`Edad: ${cita.edad}`);
        console.log(`Tipo: ${cita.tipo}`);
        console.log(`Color: ${cita.color}`);
        console.log(`Enfermedad: ${cita.enfermedad}`);
        console.log('------------------------');
    });
};

module.exports = { registrar, leer };
