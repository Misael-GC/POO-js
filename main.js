// objecto lineral
const natalia = {
    name: 'Natalia',
    age:20,
    cursosAprovados:[
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
    ],
};

console.log(natalia)

//que pasa si natalia aprobo un curso
natalia.cursosAprovados.push('Responsive Desing');

console.log(natalia);

natalia.name ='Nath';
natalia.age += 1;

console.log(natalia);

