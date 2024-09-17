//ARREGLOS
let mensaje = "";
let estudiantes = ["Juan", "Carlos", "Monica", "Julian", "Camila"];
let ciudades = ["Medellin", "Bogota", "Cali", "Cartagena", "Santa Marta"];
let bool = [true, true , false, true, true];
let edades = [25, 32, 17, 22, 22]
let datos = [
    {nombre: estudiantes[0], edad:edades[0], ciudad:ciudades[0], matriculado:bool[0]},
    {nombre: estudiantes[1], edad:edades[1], ciudad:ciudades[1], matriculado:bool[1]},
    {nombre: estudiantes[2], edad:edades[2], ciudad:ciudades[2], matriculado:bool[2]},
    {nombre: estudiantes[3], edad:edades[3], ciudad:ciudades[3], matriculado:bool[3]},
    {nombre: estudiantes[4], edad:edades[4], ciudad:ciudades[4], matriculado:bool[4]}
]
//METODOS DE LOS ARREGLOS

//.reduce()
console.log(mensaje = "Metodo .reduce()")
let resultadoEstudiantes = estudiantes.reduce((acumulado, estudiante) => acumulado + " & " + estudiante);
console.log(resultadoEstudiantes);

let ciudadConC = ciudades.reduce((acumulado, ciudad) => {
    if (ciudad.startsWith('C')) acumulado++;
    return acumulado;
}, 0);
console.log(ciudadConC);  

let todosMatriculados = bool.reduce((acumulado, valor) => acumulado && valor, true);
console.log(todosMatriculados);

let promedioEdad = edades.reduce((acumulado, edad, i, edades) => {
    acumulado += edad;
    if (i === edades.length - 1){
        return Math.round(acumulado / edades.length); // Math.round: aproxima numeros enteros unicamente
    } 
    else{
        return acumulado;
    }
}, 0)
console.log(promedioEdad);

let descripcionPersonas = datos.reduce((acumulado, persona) => {
    acumulado.push(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);
    return acumulado;
}, []);
console.log(descripcionPersonas);

//.forEach()
console.log(mensaje = "Metodo .forEach()")
estudiantes.forEach((estudiante) => {
    console.log(estudiante.toUpperCase());
});

ciudades.forEach((ciudades) => {
    console.log(`La ciudad ${ciudades} tiene ${ciudades.length} caracteres.`);
});

let matriculados = 0;
bool.forEach((valor) => {
    if (valor) matriculados++;
});
console.log(`Hay ${matriculados} estudiantes matriculados.`);

edades.forEach((edad, i) => {
    if (edad >= 18) {
        console.log(`${estudiantes[i]} con ${edad} años: Mayor de edad`);
    } else {
        console.log(`${estudiantes[i]} con ${edad} años: Menor de edad`);
    }
});

datos.forEach((persona) => {
    console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}.`);
});

//.filter()
console.log(mensaje = "Metodo .filter()")
let estudiantesLargos = estudiantes.filter((estudiante) => estudiante.length > 5);
console.log(estudiantesLargos);

let ciudadesConC = ciudades.filter((ciudad) => ciudad.startsWith('C'));
console.log(ciudadesConC);

let noMatriculados = bool.filter((valor) => valor === false);
console.log(noMatriculados);

let mayoresDeEdad = edades.filter((num) => num >= 18);
console.log(mayoresDeEdad);

let mismaEdad = datos.filter((persona) => persona.edad === 22);
console.table(mismaEdad); //con console.log no me permitia ver los datos solo la longitud del array

//.map()
console.log(mensaje = "Metodo .map()")
let estudiantesMayusculas = estudiantes.map((nombre) => nombre.toUpperCase());
console.log(estudiantesMayusculas);

let ciudadesConEtiqueta = ciudades.map((ciudad) => `Ciudad: ${ciudad}`);
console.log(ciudadesConEtiqueta);

let boolInvertidos = bool.map((valor) => !valor);
console.log(boolInvertidos);

let edadesAumentadas = edades.map((edad) => edad + 1);
console.log(edadesAumentadas);

let datosConCategoria = datos.map((persona) => ({
    ...persona,
    categoria: persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"
}));
console.table(datosConCategoria);