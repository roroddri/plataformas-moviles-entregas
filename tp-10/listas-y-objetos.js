var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

function ordenarPorApellido(listaDePersonas) {
    listaDePersonas.sort((a, b) => {
        if (a.apellido.toLowerCase() < b.apellido.toLowerCase()) return -1;
        if (a.apellido.toLowerCase() > b.apellido.toLowerCase()) return 1;
        return 0;
    });
    return listaDePersonas;
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

function promedioEdades(listaDePersonas) {
    if(listaDePersonas.length === 0) return 0;
    let suma = listaDePersonas.reduce((acc, persona) => acc + persona.edad, 0);
    return suma / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

function cumplirAños(listaDePersonas) {
    // Retorna una lista nueva con personas clonadas y edad aumentada
    return listaDePersonas.map(persona => ({
        ...persona,
        edad: persona.edad + 1
    }));
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

function laPersonaMayor(listaDePersonas) {
    if(listaDePersonas.length === 0) return null;
    return listaDePersonas.reduce((mayor, persona) => {
        return (persona.edad > mayor.edad) ? persona : mayor;
    }, listaDePersonas[0]);
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));


function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    return listaDePersonas.map((persona, index) => ({
        ...persona,
        heladoFavorito: listaDeHelados[index] || "vainilla"
    }));
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
