// objecto lineral
const natalia = {
    name: 'Natalia',
    age:20,
    cursosAprobados:[
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

natalia.aprobarCurso('Curso de CSS Grid');

console.log(natalia);


