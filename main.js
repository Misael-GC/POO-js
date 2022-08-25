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


//Prototipo
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //método 1 forma de crearlo
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

//otra forma de agregar métodos
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//Instancias del prototipo

const reyna = new Student(
    'Reyna Alejandra',
    23,
    [
        'Int a los videojuego',
        'Creación de personajes',
    ]
);


reyna.aprobarCurso("Curso de Unreal Engine");

console.log(reyna);


//Prototipos con la sintaxis de clases
class Student2 {
    //metodo que se ejecuta cuando creamos la instancia del prototipo/clase
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    //creamos métodos
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new Student2(
    'Miguel',
    28,
    [
        'Curso Análisis de Negocios para Ciencia de Datos',
        'Curso de Principios de visualización de Datos'
    ]
)

miguelito.aprobarCurso('Curso de Tableu');

console.log(miguelito.cursosAprobados);